# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect
import random
import datetime

# Create your views here.
def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
    if 'log' not in request.session:
        request.session['log'] = []
    length = len(request.session['log'])
    if length > 5:
        height = 40*length
    else:
        height = 200
    return render(request, 'NinjaGold/index.html', {'height':height})

def processMoney(request):
    request.session['building'] = request.POST['building']
    if request.session['building'] == 'farm':
        farm = random.randrange(10,21)
        request.session['gold'] += farm
        request.session['log'].append('Earned {} golds from the farm! ({:%m-%d-%Y %H:%M:%S})\n'.format(farm, datetime.datetime.now()))
    elif request.session['building'] == 'cave':
        cave = random.randrange(5,11)
        request.session['gold'] += cave
        request.session['log'].append('Earned {} golds from the cave! ({:%m-%d-%Y %H:%M:%S})\n'.format(cave, datetime.datetime.now()))
    elif request.session['building'] == 'house':
        house = random.randrange(2,6)
        request.session['gold'] += house
        request.session['log'].append('Earned {} golds from the house! ({:%m-%d-%Y %H:%M:%S})\n'.format(house, datetime.datetime.now()))
    elif request.session['building'] == 'casino':
        toss = random.randrange(0,2)
        casino = random.randrange(0,51)
        if casino == 0:
            request.session['log'].append('Entered a casino and did not lose or win anything. Phew! ({:%m-%d-%Y %H:%M:%S})\n'.format(casino, datetime.datetime.now()))
        if toss == 0: #loss
            request.session['gold'] -= casino
            request.session['log'].append('Ouch...Entered a casino and lost {} golds. ({:%m-%d-%Y %H:%M:%S})\n'.format(casino, datetime.datetime.now()))
        if toss == 1: #win
            request.session['gold'] += casino
            request.session['log'].append('Entered a casino and won {} golds! ({:%m-%d-%Y %H:%M:%S})\n'.format(casino, datetime.datetime.now()))

    return redirect('/')

def restart(request):
    request.session.clear()
    return redirect('/')
