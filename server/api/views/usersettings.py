from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import status
from django.contrib.auth import get_user_model  # Importa la función get_user_model para obtener el modelo de usuario personalizado

User = get_user_model()  # Obtén el modelo de usuario personalizado

class UserDetailView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            user_id = request.user.id
            user = User.objects.get(id=user_id)
            user_data = {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'name':user.name,
                'surname':user.surname,
                'phone':user.phone,
                'country':user.country,
                'city':user.city,
                'address':user.address,
                'gender':user.gender,
                'date_of_birth':user.date_of_birth
            }
            return Response(user_data)
        except User.DoesNotExist:
            return Response({'error': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)