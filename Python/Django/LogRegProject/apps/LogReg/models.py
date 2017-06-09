# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
import bcrypt, re

EMAILREG = re.compile(r'[a-zA-Z0-9.-_+]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]*$')

#regex for name that has spaces in it
FULLNAMEREG = re.compile(r'^[a-zA-Z.-]+( [a-zA-Z.-]+)*$')

NAMEREG = re.compile(r'^[a-zA-Z.-]*$')

class userDBManager(models.Manager):
    def check_create(self, data):
        errors = []
        if len(data['first_name']) < 2:
            errors.append(['first_name', "First name must be at least two characters in length."])
        if len(data['last_name']) < 2:
            errors.append(['last_name', "Last name must be at least two characters in length."])
        if not re.match(NAMEREG, data['first_name']) or not re.match(NAMEREG, data['last_name']):
            errors.append('name', 'Name must only include letters and "-" please.')
        if not re.match(EMAILREG, data['email']):
            errors.append(['email', "Email must be a valid email address."])
        if len(data['password']) < 8:
            errors.append(['password', 'Password must be at least 8 characters.'])
        if len(data['password_confirmation']) < 8 or data['password_confirmation'] != data['password']:
            errors.append(['password_confirmation', 'Password confirmation must be entered and match password.'])
        if errors:
            return [False, errors]
        else:
            user_check = userDB.objects.filter(email=data['email'])
            if user_check:
                errors.append(['user_check', 'Unable to register, please use alternate information.'])
                return [False, errors]
            newUser = userDB(first_name=data['first_name'], last_name=data['last_name'], email=data['email'])
            hashed_pass = bcrypt.hashpw(data['password'].encode(), bcrypt.gensalt())
            newUser.password = hashed_pass
            newUser.save()
            return [True, newUser]

    def check_login(self, data):
        errors = []
        if not re.match(EMAILREG, data['email']):
            errors.append(['email', "Email must be a valid email address."])
        if len(data['password']) < 8:
            errors.append(['password', 'Password must be at least 8 characters.'])
        if errors:
            return [False, errors]
        else:
            check_user = userDB.objects.filter(email=data['email'])
            if not check_user:
                errors.append(['login', "Email or password not correct.  Please try again."])
            if not bcrypt.checkpw(data['password'].encode(), check_user[0].password.encode()):
                errors.append(['login', "Email or password not correct.  Please try again."])
            if errors:
                return [False, errors]
            else:
                user = check_user[0]
                print user
                return [True, user]

class userDB(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return 'ID: %s | Name: %s %s | Email: %s' % (self.id, self.first_name, self.last_name, self.email)
    objects = userDBManager()
# Create your models here.
