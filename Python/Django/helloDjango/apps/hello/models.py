# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
import re

EMAILREG = re.compile(r'[a-zA-Z0-9.-_+]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]*$')
# Create your models here.
class userDBManager(models.Manager):
    def check_create(self, data):
        errors = []
        if len(data['fname']) < 2:
            errors.append(['fname', "First name must be at least two characters in length."])
        if len(data['lname']) < 2:
            errors.append(['lname', "Last name must be at least two characters in length."])
        if not re.match(EMAILREG, data['email']):
            errors.append(['email', "Email must be a valid email address."])
        if errors:
            return [False, errors]
        else:
            newUser = UserDB(first_name=data['fname'], last_name=data['lname'], email=data['email'])
            newUser.save()
            return [True, newUser]

class UserDB(models.Model):
    first_name = models.CharField(max_length=50, blank=False)
    last_name = models.CharField(max_length=50, blank=False)
    email = models.CharField(max_length=200, blank=False)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    objects = userDBManager()


class Post(models.Model):
    title = models.CharField(max_length=50, blank=False)
    message = models.TextField(max_length=1000, blank=False)
    user_id = models.ForeignKey(UserDB)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
