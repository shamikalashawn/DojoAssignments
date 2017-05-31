# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.db.models import Count
from django.shortcuts import render, redirect
from .models import userDB, secretDB, likeDB

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
        return redirect('/secrets')

def secrets(request):
    context = {
        "secrets": secretDB.objects.all().order_by('created_at')[:10],
        'userObj': userDB.objects.get(id=request.session['user']['id'])
    }
    print context['userObj']
    return render(request, 'Secrets/secrets.html', context)

def post_secret(request):
    if request.method == "POST":
        response = secretDB.objects.check_secret(request.POST, request.session['user']['id'])
        if not response[0]:
            for error in response[1]:
                messages.error(request, error[1])
    return redirect('/secrets')

def like(request, id):
    secret = secretDB.objects.get(id=id)
    author = userDB.objects.get(id=request.session['user']['id'])
    newLike = likeDB.objects.create(user_like=author, secret_like=secret)
    return redirect('/secrets')

def delete(request, page, id):
    secretDB.objects.get(id=id).delete()
    if page == 'secrets':
        return redirect('/secrets')
    elif page == "popular":
        return redirect('/popular')

def logoff(request):
    request.session.clear()
    return redirect('/')

def popular(request):
    context = {
        "secrets": secretDB.objects.annotate(num_likes=Count("like_secret")).order_by('-num_likes'),
        'userObj': userDB.objects.get(id=request.session['user']['id'])
    }
    return render(request, 'Secrets/popular.html', context)
# Create your views here.
