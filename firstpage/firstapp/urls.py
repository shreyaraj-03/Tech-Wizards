from os import name
from firstapp import views
from django.urls import path

urlpatterns = [
    path('',views.home,name="home"),
    path("registrationpage",views.registrationpage,name="registrationpage"),
    path('loginpage',views.loginpage,name="loginpage"),
    path('resume',views.resume,name='resume'),
    
]