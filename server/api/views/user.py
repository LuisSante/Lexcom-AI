from rest_framework.response import Response
from rest_framework import viewsets, status

from core.models import User
from api.serializers.user import UserSerializer, LoginSerializer
from django.contrib.auth.models import User

class UserViewSet(viewsets.ModelViewSet):
    model_class = User
    serializer_class = UserSerializer
    queryset = User.objects.all()
    
class LoginView(viewsets.ModelViewSet):
    model_class = User
    serializer_class = LoginSerializer
    queryset = User.objects.all() 
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            return Response({"detail": "Login successful"}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)