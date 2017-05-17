# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from .models import Book
from datetime import datetime

# Create your views here.

def index(request):
    book1 = Book.objects.create(title='Where the Wild Things Are', published_date=datetime(1963, 04, 9))
    author1= Author.objects.create(name='Maurice Sendak', book=book1)
    book2 = Book.objects.create(title="Charlotte's Web", published_date=datetime(1952, 10, 15))
    author2=Author.ojects.create(name='E.B. White', book=book2)
    book3 = Book.objects.create(title='Winnie the Pooh', published_date=datetime(1926, 10, 14))
    author3=Author.objects.create(name='A. A. Milne', book=book3)
    book4 = Book.objects.create(title="Alice's Adventures in Wonderland", published_date=datetime(1865, 11, 26))
    author4=Author.objects.create(name='Lewis Carroll', book=book4)
    book5 = Book.objects.create(title='Goodnight Moon', published_date=datetime(1947, 9, 3))
    author5=Author.objects.create(name='Margaret Wise Brown', book=book5)
    books = Book.objects.all()
    authors = Author.objects.all()
    def printBookObjects(obj):
        for item in obj:
            print item.title, item.author, item.published_date
    def printAuthorObjects(obj):
        for item in obj:
            print item.name, item.book_id

    printBookObjects(books)
    return render(request, 'BooksApp/index.html')
