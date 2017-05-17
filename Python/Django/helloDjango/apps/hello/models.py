# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class UserDB(models.Model):
    first_name = models.CharField(max_length=50, blank=False)
    last_name = models.CharField(max_length=50, blank=False)
    email = models.CharField(max_length=200, blank=False)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
class Post(models.Model):
    title = models.CharField(max_length=50, blank=False)
    message = models.TextField(max_length=1000, blank=False)
    user_id = models.ForeignKey(UserDB)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
