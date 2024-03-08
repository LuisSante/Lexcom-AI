from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from core.models import User
from api.serializers.user import UserSerializer

class UserSettingsView(generics.RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated, )
    queryset = User.objects.all()
    serializer_class = UserSerializer