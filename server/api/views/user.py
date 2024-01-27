## GET, PUSH , PATCH, DELETE
from rest_framework import viewsets
from core.models import User
from api.serializers.user import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    model_class = User
    serializer_class = UserSerializer
    queryset = User.objects.all() ## Permisos POST, PUSH
