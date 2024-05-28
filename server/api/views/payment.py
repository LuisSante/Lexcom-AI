from rest_framework.permissions import IsAuthenticated
from api.BackendClient.payment import PaymentApiClient, NotificationApiClient
from django.conf import settings
from rest_framework import viewsets
from rest_framework.response import Response
from core.models import User
from rest_framework.views import APIView

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
        print(notification)
        if notification.get('type') == 'payment':
            payment_id = notification.get('data.id')
            client_notification = self.get_notification_client()
            notification_res = client_notification.get_payment_notification(
                payment_id)
            print('notification: ', notification_res)
            status = notification_res['response']['status']
            status_detail = notification_res['response']['status_detail']
            payment_status, created = User.objects.get_or_create(
                payment_id=payment_id,
                defaults={'status': status, 'status_detail': status_detail}
            )

            if not created:
                payment_status.status = status
                payment_status.status_detail = status_detail
                payment_status.save()

                return Response(payment_id, status=notification_res['status'])
        else:
            return Response({'message': 'In proccess'})


class CheckPaymentStatusView(APIView):
    def get(self, request):
        payment_id = request.query_params.get('payment_id')
        if payment_id:
            try:
                payment_status = User.objects.get(
                    payment_id=payment_id)
                status = payment_status.status
                status_detail = payment_status.status_detail
            except User.DoesNotExist:
                status = 'pending'
                status_detail = None
        else:
            status = 'pending'
            status_detail = None

        return Response({'status': status, 'status_detail': status_detail})
