from django.contrib import admin
from django.urls import path
from project1 import views

urlpatterns = [
    path('',views.login,name='login'),
    path('login1',views.login1,name='login1'),
    path('index',views.index,name='index'),
    path('welcome',views.welcome,name='welcome'),
    path('clubs',views.clubs,name='clubs'),
    path('contact',views.contact,name='contact'),
    path('Resume',views.Resume,name='Resume')
      
]