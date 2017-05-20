# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.shortcuts import render, HttpResponse, redirect
from .models import UserDB


def index(request):
    context = {
        'users': UserDB.objects.all(),
    }
    return render(request, "hello/index.html", context)

def show(request, id):
    context = {
        'user': UserDB.objects.get(id=id)
    }
    print context['user'].first_name
    return render(request, 'hello/user.html', context)

def new(request):
    if request.method == "POST":
        response = UserDB.objects.check_create(request.POST)
        if not response[0]:
            for error in response[1]:
                messages.error(request, error[1])
        else:
            request.session['user'] = {
                "first_name": response[1].first_name,
                "last_name": response[1].last_name,
            }
            print request.session['user']

    return redirect('hello:index')

# def create(request):
#     if request.method == 'POST':
#         print '*' * 50
#         print request.POST
#         request.session['name'] = request.POST['fname']
#         print '*' * 50
#         return redirect('/')
#     else:
#         return redirect('/')

def clear(request):
    request.session.clear()
    print request.session.is_empty
    return redirect('hello:index')
