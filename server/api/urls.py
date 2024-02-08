from django.urls import path
from .views import user
from .views import serpapi

urlpatterns = [
    path(r'register' , user.RegisterView.as_view(), name="register"),
    path(r'login' , user.LoginView.as_view(), name="register"),
    path(r'user' , user.UserView.as_view(), name="user"),
    path(r'logout' , user.LogoutView.as_view(), name="user"),
    path(r'product/<str:id>/region_data' , serpapi.GoogleApiView.as_view({'get': 'region_data'}), name="region_data"),
    path(r'product/<str:id>/trends_data' , serpapi.GoogleApiView.as_view({'get': 'trends_data'}), name="product_trends"),
    path(r'product/<str:id>/topics_data' , serpapi.GoogleApiView.as_view({'get': 'topics_data'}), name="topics_data"),
]

# from rest_framework.routers import DefaultRouter
# from .views.user import RegisterView

# router = DefaultRouter()

# router.register(r"register" , RegisterView.as_view(), 'register')

# urlpatterns = router.urls