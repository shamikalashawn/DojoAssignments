# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.shortcuts import render, redirect
from .models import userDB

# Create your views here.
def log_reg(request):
    if request.method == "POST":
        if request.POST['attempt'] == "register":
            response = userDB.objects.check_create(request.POST)
        elif request.POST['attempt'] == 'login':
            response = userDB.objects.check_login(request.POST)
        if not response[0]:
            for error in response[1]:
                messages.error(request, error[1])
            return redirect('reviewer:index')
        else:
            request.session['user'] = {
                "alias": response[1].alias,
                "id": response[1].id,
            }
        return redirect('reviewer:home')
    return redirect('reviewer:index')

def logout(request):
    request.session.clear()
    return redirect('reviewer:index')
