from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^username', views.username),
    url(r'^user', views.user),
    url(r'^delete/(?P<id>\d+)/$', views.delete),
]
