# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse

def index(request):
    print "Hello world!"
    return render(request, 'Hello_World/index.html')

# Create your views here.
