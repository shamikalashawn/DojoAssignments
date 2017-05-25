# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
import re

EMAILREG = re.compile(r'[a-zA-Z0-9.-_+]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]*$')

NAMEREG = re.compile(r'^[a-zA-Z.-]*$')

class userDBManager(models.Manager):
    def user_check(self, data):
        errors = []
        check_user = userDB.objects.filter(email=data['email'])
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
        if check_user:
            errors.append(['user', 'Please register with alternate information.'])
        if errors:
            return [False, errors]
        else:
            newUser = userDB(first_name=data['first_name'], last_name=data['last_name'], email=data['email'], password=data['password'])
            newUser.save()
            return [True, newUser]

    def login_check(self, data):
        errors = []
        if not re.match(EMAILREG, data['email']):
            errors.append(['email', "Email must be a valid email address."])
        if len(data['password']) < 8:
            errors.append(['password', 'Password must be at least 8 characters.'])
        if errors:
            return [False, errors]
        else:
            check_user = userDB.objects.filter(email=data['email'], password=data['password'])
            if not check_user:
                errors.append(['login', "Email or password not correct.  Please try again."])
            if errors:
                return [False, errors]
            else:
                return [True, check_user]

class messageManager(models.Manager):
    def message_check(self, data):
        errors = []
        if len(data['message']) < 1:
            errors.append('message', 'Message must be entered.')

        if errors:
            return [False, errors]
        else:
            user = userDB.objects.get(id=data['user_id'])
            message = Message.objects.create(message=data['message'], user=user)
            return [True, message]

class commentManager(models.Manager):
    def comment_check(self, data):
        errors = []
        if len(data['comment']) < 1:
            errors.append('comment', 'Comment must be entered.')

        if errors:
            return [False, errors]
        else:
            user = userDB.objects.get(id=data['user_id'])
            message = Message.objects.get(id=data['message_id'])
            comment = Comment.objects.create(comment=data['comment'], user=user, message=message)
            return [True, comment]

class userDB(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    birthday = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = userDBManager()

class Message(models.Model):
    message = models.TextField()
    user = models.ForeignKey(userDB)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = messageManager()

class Comment(models.Model):
    comment = models.TextField()
    user = models.ForeignKey(userDB)
    message = models.ForeignKey(Message)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = commentManager()
# Create your models here.
