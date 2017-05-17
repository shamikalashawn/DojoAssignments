# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect

# Create your views here.

def index(request):
    return render(request, 'DisappearingNinja/index.html')

def ninja(request):
    return render(request, 'DisappearingNinja/ninja.html')

def ninjaColor(request, ninja_color):
    return render(request, 'DisappearingNinja/ninja.html', {'color': ninja_color})
