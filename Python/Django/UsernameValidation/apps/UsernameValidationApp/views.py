# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.shortcuts import render, redirect
from .models import usernameDB
from datetime import datetime

def index(request):
    return render(request, 'UsernameValidationApp/index.html')

def username(request):
    if request.method == "POST":
        response = usernameDB.objects.username_check(request.POST)
        if not response[0]:
            for error in response[1]:
                messages.error(request, error[1])
            return redirect('/')
        else:
            request.session['username'] = response[1].username
            return redirect('/user')

def user(request):
    context = {
        "all_usernames": usernameDB.objects.all(),
    }
    print datetime.now()
    return render(request, 'UsernameValidationApp/user.html', context)

def delete(request, id):
    usernameDB.objects.get(id=id).delete()
    return redirect('/user')
# Create your views here.
