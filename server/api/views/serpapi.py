import os
import requests
from dotenv import load_dotenv
from rest_framework import viewsets, status
from rest_framework.views import APIView  
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.request import Request
from rest_framework.response import Response
from api.BackendClient.serpapi import GoogleApiClient


load_dotenv()
API_KEY = os.getenv("SERPAPI_KEY")
API_CLIENT_TOKEN = "" ## authenticacion

class SerpApiViewSet(viewsets.ViewSet):
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [TokenAuthentication]

    def get_serpapi_client(self):
        return GoogleApiClient(
            token = API_CLIENT_TOKEN,
            api_key = API_KEY,
        )

    def region_data(self, request: Request, *args, **kwargs):
        serpapi_client = self.get_serpapi_client()
        try:
            product = request.GET.getlist('product')
            response = serpapi_client.get_google_region_data(product)
            response.raise_for_status()
            return Response(response.json()["interest_by_region"])
        except requests.RequestException as e:
            return Response({'error': str(e)}, status=500)

    def trends_data(self, request: Request):
        serpapi_client = self.get_serpapi_client()
        try:
            response = serpapi_client.get_google_trends_data('product', 'US')
            response.raise_for_status()
            return Response(response.json()["interest_over_time"])
        except requests.RequestException as e:
            return Response({'error': str(e)}, status=500)


    def topics_data(self, request: Request):
        serpapi_client = self.get_serpapi_client()
        try: 
            response = serpapi_client.get_topics_relation('product')
            response.raise_for_status()
            return Response(response.json()["interest_over_time"])
        except requests.RequestException as e:
            return Response({'error': str(e)}, status=500)