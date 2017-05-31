# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.db.models import Count
from django.shortcuts import render, redirect
from ..LogReg.models import userDB
from .models import Book, Review

# Create your views here.
def index(request):
    return render(request, 'reviewer/index.html')

def home(request):
    context = {
        'reviews': Review.objects.all().order_by('-created_at')[:3],
        'books': Book.objects.annotate(num_reviews=Count('review_book')).order_by('-num_reviews').filter(num_reviews__gt=0)
    }
    return render(request, 'reviewer/home.html', context)

def books_add(request):
    return render(request, 'reviewer/add.html')

def add_book_review(request):
    print 'trying to add new book'
    if request.method == "POST":
        current_user = userDB.objects.get(id=request.session['user']['id'])
        response = Book.objects.check_add(request.POST, current_user)
        if not response[0]:
            print 'errors!'
            for error in response[1]:
                messages.error(request, error[1])
            return redirect('reviewer:books_add')
        else:
            print 'book and review successfully added'
            return redirect('reviewer:show_book', id=response[1].id)
    print 'uh oh'
    return redirect('reviewer:books_add')

def show_book(request, id):
    context = {
        'book': Book.objects.get(id=id),
        'reviews': Review.objects.filter(book=Book.objects.get(id=id)),
    }
    return render(request, 'reviewer/book.html', context)

def delete_review(request, id):
    thisReview = Review.objects.get(id=id)
    thisBook = thisReview.book
    thisReview.delete()
    return redirect('reviewer:show_book', id=thisBook.id)

def add_review(request, id):
    if request.method == 'POST':
        current_user = userDB.objects.get(id=request.session['user']['id'])
        current_book = Book.objects.get(id=id)
        response = Review.objects.check_add(request.POST, current_user, current_book)
        if not response[0]:
            for error in response[1]:
                messages.error(request, error[1])
    return redirect('reviewer:show_book', id=id)

def show_user(request, id):
    context = {
        'user': userDB.objects.get(id=id),
    }
    return render(request, 'reviewer/user.html', context)
