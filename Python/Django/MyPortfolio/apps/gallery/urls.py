from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^like/(?P<id>\d*)$', views.likes, name="likes"),
    url(r'^(?P<id>\d*)$', views.showOne, name="showone")
]
