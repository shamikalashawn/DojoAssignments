# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect
from random_words import RandomWords

rw = RandomWords()

def index(request):
    if 'attempt' not in request.session:
        request.session['attempt'] = 1
    if 'ranword' not in request.session:
        word = rw.random_word()
        while len(word) < 14:
            word = rw.random_word()
        request.session['ranword'] = word
    return render(request, 'Random_Word_Generator_App/index.html')

def random(request):
    word = rw.random_word()
    while len(word) < 14:
        word = rw.random_word()
    request.session['attempt'] += 1
    request.session['ranword'] = word
    return redirect('/')

def clear(request):
    request.session.clear()
    return redirect('/')
# Create your views here.
