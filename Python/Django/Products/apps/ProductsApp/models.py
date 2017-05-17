# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=1000)
    weight = models.CharField(max_length=50)
    price = models.IntegerField()
    cost = models.IntegerField()
    category = models.CharField(max_length=100)
