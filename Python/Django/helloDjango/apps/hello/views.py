# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from .models import UserDB

users = [
    {
      "id":1,
      'first_name': 'Bilbo',
      'last_name': 'Baggins',
      'email': 'bbaggins@coding.com',
    },
    {
      "id":2,
      'first_name': 'Jack',
      'last_name': 'Sparrow',
      'email': 'jsparrow@coding.com',
    },
    {
      "id":3,
      'first_name': 'Minnie',
      'last_name': 'Mouse',
      'email': 'mmouse@coding.com',
    },
]

def index(request):
    print "&" *  50
    if 'users' in request.session:
        for user in request.session['users']:
            print user
    context = {
        'users': users
    }
    return render(request, "hello/index.html", context)

def show(request, id):
    context = {
        'user': None
    }
    for user in users:
        if str(user['id']) == id:
            context['user'] = user
    return render(request, 'hello/user.html', context)

def new(request):
    if 'users' in request.session:
        request.session['users'].append(
            {
                'first_name': request.POST['fname'],
                'last_name': request.POST['lname'],
                'email': request.POST['email'],
            }
        )
        request.session.modified = True
    else:
        request.session['users'] = [{
            'first_name': request.POST['fname'],
            'last_name': request.POST['lname'],
            'email': request.POST['email'],
        }]
    return redirect('hello:index')

def create(request):
    if request.method == 'POST':
        print '*' * 50
        print request.POST
        request.session['name'] = request.POST['first_name']
        print '*' * 50
        return redirect('/')
    else:
        return redirect('/')

def clear(request):
    request.session.clear()
    print request.session.is_empty
    return redirect('hello:index')
