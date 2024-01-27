from rest_framework import serializers
from core.models import User

class UserSerializer(serializers.ModelSerializer):
    key = serializers.CharField(source="id", read_only=True)

    class Meta:
        model = User
        fields = ("key" , "id" , "name" , "surname" , "phone" , "country" , 
                  "city", "address" , "email" , "password" , "user" , "gender",
                  "date_of_birth")