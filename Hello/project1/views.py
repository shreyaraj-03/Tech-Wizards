from django.shortcuts import redirect, render,HttpResponse
from datetime import datetime
from project1.models import Contact,Signup
from django.contrib import messages



# Create your views here.
def login1(request):
    if request.method == "POST":
        UserName = request.POST.get('UserName')
        Email = request.POST.get('Email')
        Password = request.POST.get('Password')
        signup= Signup(UserName=UserName,Email=Email,Password=Password)
        signup.save()   
    return render(request,"login1.html")

def login(request):
    if request.method == "POST":
        username=request.POST.get("UserName")
        password=request.POST.get("Password")
        from django.contrib import auth
        log=auth.authenticate(UserName=username,Password=password)
        if log is None:
            return redirect(request,'login.html')
        else:
            return redirect(request,'index.html')

    return render (request,"login.html")

def index(request):
    #to sent a variable in html we can make a context variable and then add in the
    # render(request,"file",context)
    return render(request,"index.html")
   # return HttpResponse("This is MY WEBSITE HOME PAGE")
def welcome(request):
    return render(request,"welcome.html")

def clubs(request):
    return render(request,"clubs.html")
def  contact (request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        desc = request.POST.get('desc')
        contact = Contact(name=name,email=email,phone=phone,desc=desc,date=datetime.today())
        contact.save()
        messages.success(request, 'Your Request has been submitted !')

    return render(request,"contact.html")
def Resume(request):
    return render(request,"Resume.html")
