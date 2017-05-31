# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models

class BookManager(models.Manager):
    def check_add(self, data, user):
        errors = []
        if len(data['title']) < 1:
            errors.append(['title', 'Book Title must be entered.'])
        if len(data['review']) < 1:
            errors.append(['review', 'Review must be entered.'])
        if errors:
            return [False, errors]
        else:
            if data['new_author']:
                newBook = Book.objects.create(title=data['title'], author=data['new_author'])
            else:
                newBook = Book.objects.create(title=data['title'], author=data['author'])
            newReview = Review.objects.create(reviewer=user, rating=data['rating'], book=newBook, review=data['review'])
            print 'new book and review have been created!'
            return [True, newBook]

class ReviewManager(models.Manager):
    def check_add(self, data, user, book):
        errors = []
        if len(data['review']) < 1:
            errors.append('review', 'Review must be entered.')
        if errors:
            return [False, errors]
        else:
            newReview = Review.objects.create(reviewer=user, rating=data['rating'], book=book, review=data['review'])
            return [True]

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = BookManager()

class Review(models.Model):
    reviewer = models.ForeignKey('LogReg.userDB', related_name="review_author")
    rating = models.IntegerField()
    book = models.ForeignKey(Book, related_name="review_book")
    review = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def rating_list_yellow(self):
        alist = []
        for item in range(self.rating):
            alist.append(item)
        return alist
    def rating_list_white(self):
        alist = []
        for item in range(5-self.rating):
            alist.append(item)
        return alist
    objects = ReviewManager()

# Create your models here.
