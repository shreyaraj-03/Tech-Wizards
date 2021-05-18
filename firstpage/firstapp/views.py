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
def resume(request):
    return render (request,'accounts/resume.html')



