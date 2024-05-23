import mercadopago
from rest_framework.permissions import IsAuthenticated
from api.BackendClient.payment import PaymentApiClient
from django.conf import settings
from rest_framework import viewsets
from rest_framework.response import Response

access_token = settings.SECRET_ACCESS_KEY


class PaymentApiView(viewsets.ViewSet):
    # permission_classes = (IsAuthenticated, )

    def get_payment_client(self, request):
        client = PaymentApiClient(
            access_token=access_token,
            data=request.data
        )
        return client

    def create_preference(self, request):
        payment_client = self.get_payment_client(request)
        payment = payment_client.create_preference()
        id_ = payment['id']

        return Response(id_)
