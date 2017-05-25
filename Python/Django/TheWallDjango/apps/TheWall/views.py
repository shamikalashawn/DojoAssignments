# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.shortcuts import render, redirect
from .models import userDB, Message, Comment

def index(request):
    return render(request, 'TheWall/index.html')

def register(request):
    if request.method == "POST":
        response = userDB.objects.user_check(request.POST)
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
            request.session['attempt'] = 'registration'
        return redirect('/wall')

def login(request):
    if request.method == "POST":
        response = userDB.objects.login_check(request.POST)
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
            print 'logged in!', request.session['user']['id']
            request.session['attempt'] = 'log in'
        return redirect('/wall')

def wall(request):
    context = {
        'user_messages': Message.objects.all().order_by('-created_at'),
        'comments': Comment.objects.all().order_by('created_at'),
    }

    return render(request, 'TheWall/wall.html', context)

def message(request):
    if request.method == "POST":
        response = Message.objects.message_check(request.POST)
        if not response[0]:
            for error in response[1]:
                messages.error(request, error[1])
    return redirect('/wall')

def comment(request):
    if request.method == "POST":
        response = Comment.objects.comment_check(request.POST)
        if not response[0]:
            for error in response[1]:
                messages.error(request, error[1])
    return redirect('/wall')

def user(request, id):
    if request.session['user']['id'] == int(id):
        context = {
            "user": userDB.objects.get(id=id)
        }
        return render(request, 'TheWall/user.html', context)
    else:
        messages.error(request, "Please log in to view your user page.")
        return redirect('/')

def logoff(request):
    request.session.clear()
    return redirect('/')
# Create your views here.
