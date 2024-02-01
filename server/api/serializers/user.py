from rest_framework import serializers
from django.db.models import Q
from core.models import User
from django.contrib.auth import authenticate

class LoginSerializer(serializers.ModelSerializer):
    user = serializers.CharField()
    password = serializers.CharField(write_only=True)
    key = serializers.CharField(source="id", read_only=True)

    def validate(self, data):
        user = data.get('user')
        password = data.get('password')
       
        usuario = User.objects.get(Q(email=user) | Q(user=user))
    
        if usuario:
            if (password!=usuario.password):
                raise serializers.ValidationError("Contraseña Incorrecta")
        else:
            raise serializers.ValidationError("Invalid credentials")

        return usuario
    class Meta:
        model = User
        fields = ("key" , "id" , "user" , "password")
        
        
class UserSerializer(serializers.ModelSerializer):
    key = serializers.CharField(source="id", read_only=True)

    class Meta:
        model = User
        fields = ("key" , "id" , "name" , "surname" , "phone" , "country" , 
                  "city", "address" , "email" , "password" , "user" , "gender",
                  "date_of_birth")