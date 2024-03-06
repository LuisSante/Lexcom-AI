import os
import requests
import openai
from dotenv import load_dotenv
from rest_framework import viewsets
from rest_framework.response import Response
from api.BackendClient.serpapi import GoogleApiClient
from rest_framework.permissions import IsAuthenticated

load_dotenv()
API_KEY = os.getenv("SERPAPI_KEY")

class GoogleApiView(viewsets.ViewSet):
    permission_classes = (IsAuthenticated, )
    def get_serpapi_client(self):
        return GoogleApiClient(
            api_key = API_KEY,
        )

    def region_data(self, request, id:str):
        serpapi_client = self.get_serpapi_client()
        try:
            response = serpapi_client.get_google_region_data(id)
            response.raise_for_status()
            return Response(response.json()["interest_by_region"])
        except requests.RequestException as e:
            return Response({'error': str(e)}, status=500)

    def trends_data(self, request, id:str, id_region:str):
        serpapi_client = self.get_serpapi_client()
        try:
            response = serpapi_client.get_google_trends_data(id, id_region)
            response.raise_for_status()
            return Response(response.json()["interest_over_time"])
        except requests.RequestException as e:
            return Response({'error': str(e)}, status=500)


    def topics_data(self, request, id:str):
        serpapi_client = self.get_serpapi_client()
        try: 
            response = serpapi_client.get_topics_relation(id)
            response.raise_for_status()
            return Response(response.json()["related_topics"]["rising"])
        except requests.RequestException as e:
            return Response({'error': str(e)}, status=500)