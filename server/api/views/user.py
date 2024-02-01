## GET, PUSH , PATCH, DELETE
from rest_framework.response import Response

from rest_framework import viewsets
from core.models import User
from api.serializers.user import UserSerializer, LoginSerializer
from django.contrib.auth.models import User
from rest_framework import viewsets, status
from rest_framework.response import Response

class UserViewSet(viewsets.ModelViewSet):
    model_class = User
    serializer_class = UserSerializer
    queryset = User.objects.all() ## Permisos POST, PUSH
    
class LoginView(viewsets.ModelViewSet):
    model_class = User
    serializer_class = LoginSerializer
    queryset = User.objects.all() 
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            # El usuario se encuentra en serializer.validated_data['user']
            # Realiza acciones adicionales si es necesario
            return Response({"detail": "Login successful"}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)