from rest_framework.permissions import IsAuthenticated
from api.BackendClient.payment import PaymentApiClient, NotificationApiClient
from django.conf import settings
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status

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

        return Response(payment)


class WebHookNotifications(viewsets.ViewSet):

    def get_notification_client(self):
        client = NotificationApiClient(
            access_token=access_token,
        )

        return client

    def webhook_notifications(self, request):
        notification = request.query_params
        print("NOTIFICACION", notification)
        if notification.get('type') == 'payment':
            payment_id = notification.get('data.id')
            client_notification = self.get_notification_client()
            notification_res = client_notification.get_payment_notification(
                payment_id)
            # print(notification_res)
            return Response(payment_id, status=notification_res['status'])
        else:
            return Response({'prev': 'tramite en proceso'}, status=status.HTTP_200_OK)

        #     response = notification_res['response']['status']
        #     if (status == 'approved'):
        #         print(status)
        #         return Response({'state': status}, status=200)
        #     else:
        #         return Response({'state': 'error', 'message': 'Falla en el pago'}, status=500)
        # else:
        #     return Response({'prev': 'tramite en proceso'})
