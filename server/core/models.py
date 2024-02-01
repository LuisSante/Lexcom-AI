from django.db import models


class Todo(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True) 

class User(models.Model):
    name = models.CharField(max_length=200)
    surname = models.CharField(max_length=200)
    phone = models.CharField(max_length=15)
    country = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    email = models.EmailField()
    password = models.CharField(max_length=200)
    user = models.CharField(max_length=200, default='user')
    gender = models.CharField(max_length=30)
    date_of_birth = models.DateTimeField(null=True, blank=True) 
