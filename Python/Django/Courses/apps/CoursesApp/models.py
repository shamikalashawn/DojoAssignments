# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models

class courseManager(models.Manager):
    def course_check(self, data):
        errors = []
        if len(data['name']) < 1:
            errors.append(['name', 'Course name must be included.'])
        if len(data['description']) < 1:
            errors.append(['description', 'Course description must be included.'])
        if errors:
            return [False, errors]
        else:
            newCourse = Course.objects.create(name=data['name'], description=data['description'])
            return [True, newCourse]


class Course(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = courseManager()
# Create your models here.
