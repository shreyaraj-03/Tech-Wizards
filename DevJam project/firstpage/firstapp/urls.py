from os import name
from firstapp import views
from django.urls import path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
urlpatterns = [
    path('',views.home,name="home"),
    path("registrationpage",views.registrationpage,name="registrationpage"),
    path('loginpage',views.loginpage,name="loginpage"),
    path('resume1',views.resume1,name='resume1'),
    path('resume2',views.resume2,name='resume2'),
    path('resume3',views.resume3,name='resume3'),
    path('resume4',views.resume4,name='resume4'),
    path('template',views.template,name='template'),
    
]