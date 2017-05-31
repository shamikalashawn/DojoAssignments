# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect
from ..LogReg.models import userDB

# Create your views here.
def index(request):
    return render(request, 'folio/index.html')

def home(request):
    context = {
        "users": userDB.objects.all()
    }
    return render(request, 'folio/home.html', context)
