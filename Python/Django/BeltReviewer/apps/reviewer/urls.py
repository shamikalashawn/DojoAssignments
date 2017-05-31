from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^home', views.home, name='home'),
    url(r'^books/add$', views.books_add, name="books_add"),
    url(r'^books/add_book_review', views.add_book_review, name="add_book_review"),
    url(r'^books/(?P<id>\d+)/$', views.show_book, name="show_book"),
    url(r'^delete/(?P<id>\d+)/$', views.delete_review, name="delete_review"),
    url(r'^review/add/(?P<id>\d+)/$', views.add_review, name="add_review"),
    url(r'^users/(?P<id>\d+)/$', views.show_user, name='show_user'),
]
