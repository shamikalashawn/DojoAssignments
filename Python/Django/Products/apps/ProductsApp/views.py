# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect
from .models import Product

# Create your views here.

def index(request):
    product1 = Product.objects.create(name='Crisco', description='Oil for cooking', weight='2lbs', price=2.50, cost=1.50, category='Oil')
    product2 = Product.objects.create(name='Cheerios', description='breakfast cereal', weight='1lbs', price=1.50, cost=0.50, category='Cereal')
    product3 = Product.objects.create(name='Skippy Peanut Butter', description='peanut butter', weight='8oz', price=1.75, cost=0.75, category='Peanut Butter')
    products = Product.objects.all()
    def printObjects(obj):
        for item in obj:
            print item.name, item.description, item.weight, item.price, item.cost, item.category
    printObjects(products)
    return render(request, 'ProductsApp/index.html')
