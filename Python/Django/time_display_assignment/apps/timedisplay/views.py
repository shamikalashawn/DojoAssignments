# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from datetime import datetime
from dateutil.tz import tzlocal
import pytz

def index(request):
    mytz = pytz.timezone('America/New_York')
    request.session['date'] = '{:%h %d, %Y}'.format(pytz.utc.localize(datetime.now(), is_dst=None).astimezone(mytz))
    request.session['time'] = '{:%-I:%M:%S %p %Z}'.format(pytz.utc.localize(datetime.now(), is_dst=None).astimezone(mytz))
    return render(request, 'timedisplay/index.html')

# Create your views here.
