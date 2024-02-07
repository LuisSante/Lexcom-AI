from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200 , unique=True)
    password = models.CharField(max_length=200)
    username = models.CharField(max_length=200, default='username')

    surname = models.CharField(max_length=200)
    phone = models.CharField(max_length=15)
    country = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    gender = models.CharField(max_length=30)
    date_of_birth = models.DateTimeField(null=True, blank=True) 

    USERNAME_FIELD  = 'email'
    REQUIRED_FIELDS = []

