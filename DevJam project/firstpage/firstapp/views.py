from django import http
from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from .models import *
from django.contrib.auth import authenticate, login, logout
from .forms import OrderForm, CreateUserForm
from django.contrib import messages

from django.contrib.auth.decorators import login_required


# Create your views here.



def registrationpage(request):
	
	form = CreateUserForm()
	if request.method == 'POST':
		form = CreateUserForm(request.POST)
		if form.is_valid():
			form.save()
			
			user = form.cleaned_data.get('username')
			messages.success(request, 'Account was created for ' + user)
			return redirect('loginpage')

	context = {'form':form}
	return render(request, 'accounts/registrationpage.html', context)

def loginpage(request):
	if request.method == 'POST':
		username = request.POST.get('username')
		password =request.POST.get('password')

		user = authenticate(request, username=username, password=password)

		if user is not None:
			login(request, user)
			return redirect('home')
		else:
			messages.info(request, 'Username OR password is incorrect')

	context = {}
	return render(request, 'accounts/loginpage.html', context)

def logoutUser(request):
	logout(request)
	return redirect('loginpage')

@login_required(login_url='loginpage')
def home(request):
    return render(request,'accounts/home.html')

@login_required(login_url='loginpage')
def resume1(request):
    return render (request,'accounts/resume1.html')


@login_required(login_url='loginpage')
def resume2(request):
    return render (request,'accounts/resume2.html')\

@login_required(login_url='loginpage')
def resume3(request):
    return render (request,'accounts/resume3.html')
@login_required(login_url='loginpage')
def resume4(request):
    return render (request,'accounts/resume4.html')
@login_required(login_url='loginpage')
def template(request):
    return render (request,'accounts/template.html')