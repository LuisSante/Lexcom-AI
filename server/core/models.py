from django.contrib.auth.models import AbstractUser
from django.db import models

from django.dispatch import receiver
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail, EmailMessage

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
    REQUIRED_FIELDS = ['username']



@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):

    email_plaintext_message = "Open the link to reset your password" + " " + "{}{}".format(instance.request.build_absolute_uri("http://localhost:5173/reset-password-form/"), reset_password_token.key)
    
    """
        this below line is the django default sending email function, 
        takes up some parameter (title(email title), message(email body), from(email sender), to(recipient(s))
    """
    send_mail(
        "Password Reset for {title}".format(title="Crediation Lexcom portal account"),
        email_plaintext_message,
        "supportlexcom@gmail.com",
        [reset_password_token.user.email],
        fail_silently=False,
    )