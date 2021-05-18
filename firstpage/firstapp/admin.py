from django.contrib import admin
from firstapp.models import Customer
from firstapp.models import Product
from firstapp.models import Order
# Register your models here.
admin.site.register(Customer)
admin.site.register(Product)
admin.site.register(Order)
