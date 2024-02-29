from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class LexcomIA_ApiView(APIView):
    permission_classes = (IsAuthenticated, )
    def post(self, request):
        data = request.data
        print(data)
        return Response({'message': 'Datos recibidos correctamente'}, status=200)