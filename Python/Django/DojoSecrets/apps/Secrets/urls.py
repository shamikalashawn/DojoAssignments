from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register', views.log_reg),
    url(r'^login', views.log_reg),
    url(r'^secrets', views.secrets),
    url(r'^post_secret', views.post_secret),
    url(r'^like/(?P<id>\d+)*$', views.like),
    url(r'^delete/(?P<id>\d+)*$', views.delete),
    url(r'^popular', views.popular),
    url(r'^logoff', views.logoff),
]
