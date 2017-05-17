from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^survey', views.survey),
    url(r'^result', views.result),
]
