# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect
from django.contrib import sessions
from django.urls import reverse
from .models import Picture
from ..LogReg.models import userDB
from .forms import PictureForm
from django.db.models.aggregates import Count
from random import randint

def index(request):
    if request.method == "GET":
        pics = Picture.objects.all().order_by('?')[:10]
        print pics
        picForm = PictureForm(auto_id=True)
        context = {
            'pictures': pics,
            'picForm': picForm.as_table()
        }
        return render(request, 'gallery/gallery.html', context)
    elif request.method == "POST":
        newPic = PictureForm(request.POST or None, request.FILES, auto_id=True)
        if newPic.is_valid():
            pic = {
                'image': request.FILES['image'],
                'creator': userDB.objects.get(id=request.session['user']['id'])
            }
            Picture.objects.createPic(pic)
            return redirect('gallery:index')
        else:
            count = Picture.aggregate(count=Count('id'))['count']
            random_index = randint(0, count - 1)
            pics = Picture.objects.all()[random_index][:10]
            picform = PictureForm(auto_id=True)
            context2 = {
                'pictures': pics,
                'picForm': picForm.as_table()
            }
            return render(request, 'gallery/gallery.html', context2)
    pass

def likes(request, id):
    Picture.objects.likePic(id)
    return redirect('gallery:index')

def showOne(request, id):
    user = userDB.objects.get(id=id)

    context = {
        'user': user
    }
    return render(request, 'gallery/picwall.html', context)
# Create your views here.
