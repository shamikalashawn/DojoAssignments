# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.shortcuts import render, redirect
from .models import userDB, secretDB

def index(request):
    return render(request, 'Secrets/index.html')

def log_reg(request):
    if request.method == "POST":
        if request.POST['attempt'] == "register":
            response = userDB.objects.check_create(request.POST)
        elif request.POST['attempt'] == 'login':
            response = userDB.objects.check_login(request.POST)
        if not response[0]:
            for error in response[1]:
                messages.error(request, error[1])
            return redirect('/')
        else:
            request.session['user'] = {
                "first_name": response[1].first_name,
                "last_name": response[1].last_name,
                "id": response[1].id,
            }
            request.session['like'] = []
        return redirect('/secrets')

def secrets(request):
    secret_count = secretDB.objects.count()
    last_secret = secretDB.objects.last()
    highest_id = last_secret.id
    recent = highest_id-10
    if secret_count > 10:
        print 'greater!'
        context = {
            "secrets": secretDB.objects.filter(id__gt=recent)
        }
    else:
        context = {
            "secrets": secretDB.objects.all()
        }
    return render(request, 'Secrets/secrets.html', context)

def post_secret(request):
    if request.method == "POST":
        response = secretDB.objects.check_secret(request.POST)
        if not response[0]:
            for error in response[1]:
                messages.error(request, error[1])
    return redirect('/secrets')

def like(request, id):
    secret = secretDB.objects.get(id=id)
    secret.likes += 1
    secret.save()
    request.session['like'].append(int(id))
    request.session.modified = True
    return redirect('/secrets')

def delete(request, id):
    secretDB.objects.get(id=id).delete()
    return redirect('/secrets')

def logoff(request):
    request.session.clear()
    return redirect('/')

def popular(request):
    context = {
        "secrets": secretDB.objects.all().order_by('-likes')
    }
    return render(request, 'Secrets/popular.html', context)
# Create your views here.
