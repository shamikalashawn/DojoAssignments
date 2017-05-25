# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect
from .models import Course

def index(request):
    context = {
        "courses": Course.objects.all()
    }
    return render(request, 'CoursesApp/index.html', context)

def course(request):
    if request.method == 'POST':
        response = Course.objects.course_check(request.POST)
        if not response[0]:
            for error in response[1]:
                messages.error(request, error[1])
    return redirect('/')

def remove(request, id):
    context = {
        "course": Course.objects.get(id=id)
    }
    return render(request, 'CoursesApp/delete.html', context)

def delete(request, id):
    Course.objects.get(id=id).delete()
    return redirect('/')
# Create your views here.
