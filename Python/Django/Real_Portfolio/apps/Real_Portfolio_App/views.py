# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

def index(request):
    return render(request, 'Real_Portfolio_App/index.html')

def testimonials(request):
    return render(request, 'Real_Portfolio_App/testimonials.html')

def about(request):
    return render(request, 'Real_Portfolio_App/about.html')

def projects(request):
    print 'projects'
    return render(request, 'Real_Portfolio_App/projects.html')
# Create your views here.
