from django.db import models

# Create your models here.
#models is the things which describes the inbilt database provided by Django
class Contact(models.Model):
    name=models.CharField(max_length=122)
    email=models.CharField(max_length=122)
    phone=models.CharField(max_length=12)
    desc=models.TextField()
    date=models.DateField()

    def __str__(self):
        return self.name
        
class Signup(models.Model):
    UserName=models.CharField(max_length=122)
    Email=models.CharField(max_length=122)
    Password=models.CharField(max_length=20)

    def __str__(self):
        return self.UserName
