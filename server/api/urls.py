from django.urls import path
from .views import user

urlpatterns = [
    path(r'register' , user.RegisterView.as_view(), name="register"),
    path(r'login' , user.LoginView.as_view(), name="register"),
    path(r'user' , user.UserView.as_view(), name="user"),
    path(r'logout' , user.LogoutView.as_view(), name="user")
]

# from rest_framework.routers import DefaultRouter
# from .views.user import RegisterView

# router = DefaultRouter()

# router.register(r"register" , RegisterView.as_view(), 'register')

# urlpatterns = router.urls