from django.urls import path
from .views import user
from .views import serpapi, openai, tiktok

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path(r'register' , user.RegisterView.as_view(), name="register"),
    path(r'token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path(r'token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path(r'logout/blacklist/', user.BlacklistTokenUpdateView.as_view(), name='blacklist'),
    # path(r'login' , user.LoginView.as_view(), name="login"),
    # path(r'user' , user.UserView.as_view(), name="user"),
    # path(r'logout' , user.LogoutView.as_view(), name="logout"),
    path(r'product/<str:id>/region_data' , serpapi.GoogleApiView.as_view({'get': 'region_data'}), name="region_data"),
    path(r'product/<str:id>/trends_data' , serpapi.GoogleApiView.as_view({'get': 'trends_data'}), name="product_trends"),
    path(r'product/<str:id>/topics_data' , serpapi.GoogleApiView.as_view({'get': 'topics_data'}), name="topics_data"),
    path(r'openai/<str:id>' , openai.OpenAIApiView.as_view({'get': 'recommend_video'}), name="recommend_video"),
    path(r'tiktok/<str:id>' , tiktok.TiktTokApiView.as_view({'get': 'video_interest'}), name="video_interest"),
]