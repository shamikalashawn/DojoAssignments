from django.conf.urls import url
from . import views

app_name = 'hello'
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^user/', views.new, name='new'),
    url(r'^user/(?P<id>)\d+', views.show, name='show'),
    url(r'^new_user$', views.create),
    url(r'^clear', views.clear, name='clear')
]

'hello:index'
