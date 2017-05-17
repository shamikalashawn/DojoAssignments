# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect

def index(request):
    return render(request, 'SurveyForm/index.html')

def survey(request):
    request.session['name'] = request.POST['name']
    request.session['location'] = request.POST['location']
    request.session['language'] = request.POST['language']
    request.session['comment'] = request.POST['comment']
    request.session['submissions'] += 1
    return redirect('/result')

def result(request):
    return render(request, 'SurveyForm/result.html')
# Create your views here.
