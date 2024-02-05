from rest_framework.views import APIView  
from rest_framework.response import Response
from api.logic.api import get_google_region_data

class SerpApiViewSet(APIView):

    def get(self, request, id):
        product_value = id
        region_data = get_google_region_data(product_value)

        return Response({"status": "success", "data": region_data})