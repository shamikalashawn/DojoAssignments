# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.utils import timezone

class usernameDBManager(models.Manager):
    def username_check(self, data):
        errors = []
        try:
            check_username = usernameDB.objects.get(username=data['username'])
        except usernameDB.DoesNotExist:
            check_username = False
        if len(data['username']) < 8 or len(data['username']) > 16:
            errors.append(['username', 'Username must be between 8 and 16 characters!'])
        if check_username:
            errors.append(['username', 'Please try a different username.'])
        if errors:
            return [False, errors]
        else:
            newUsername = usernameDB.objects.create(username=data['username'])
            return [True, newUsername]

class usernameDB(models.Model):
    username = models.CharField(max_length=16)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = usernameDBManager()
# Create your models here.
