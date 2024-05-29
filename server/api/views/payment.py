from rest_framework.permissions import IsAuthenticated
from api.BackendClient.payment import PaymentApiClient, NotificationApiClient
from django.conf import settings
from rest_framework import viewsets
from rest_framework.response import Response
from core.models import User
from api.serializers.user import UserSerializer
from rest_framework.views import APIView
from django.core.cache import cache

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


class CurrentPlan(viewsets.ViewSet):
    permission_classes = (IsAuthenticated, )

    def cache(self, request):
        email = request.data.get('email')
        plan = request.data.get('plan')
        cache.set(email, plan, timeout=720)
        return Response({'email': email, 'plan': plan})

    def send_plan(self, request):
        email = request.data.get('email')
        plan = cache.get(email)
        return Response({'plan': plan})


# class WebHookNotifications(viewsets.ViewSet):
    #     permission_classes = (IsAuthenticated, )

    #     def get_notification_client(self):
    #         client = NotificationApiClient(
    #             access_token=access_token,
    #         )

    #         return client

    #     def get_email(self, request):
    #         email = request.data.get('email')
    #         plan = request.data.get('plan')
    #         cache.set(email, plan, timeout=300)
    #         return Response({'email': email, 'plan': plan})

    #     def webhook_notifications(self, request):
    #         email = cache.get('user_email')
    #         if email is not None:
    #             notification = request.query_params
    #             if notification.get('type') == 'payment':
    #                 payment_id = notification.get('data.id')
    #                 client_notification = self.get_notification_client()
    #                 notification_res = client_notification.get_payment_notification(
    #                     payment_id)
    #                 status = notification_res['response']['status']
    #                 status_detail = notification_res['response']['status_detail']

    #                 try:
    #                     user = User.objects.get(email=email)
    #                     user.payment_id = payment_id
    #                     user.payment_status = status
    #                     user.payment_status_detail = status_detail
    #                     user.save()

    #                 except User.DoesNotExist:
    #                     return Response({'message': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
    #                 return Response(payment_id, status=notification_res['status'])

    #             else:
    #                 return Response({'message': 'In proccess'})
    #         else:
    #             return Response({'message': 'In proccess'})

    # class UserStatusView(APIView):
    #     # permission_classes = (IsAuthenticated, )

    #     def post(self, request):
    #         email = request.data.get('email')
    #         print(email)
    #         if email:
    #             try:
    #                 user = User.objects.get(email=email)
    #                 serializer = UserSerializer(user)
    #                 status = serializer.data.get('payment_status')
    #                 return Response({'status': status})
    #             except User.DoesNotExist:
    #                 return Response({'error': 'Usuario no encontrado'}, status=404)
    #         else:
    #             return Response({'error': 'Se debe proporcionar un correo electrónico'}, status=400)

    # class ResetPaymentStatusView(APIView):
    #     def post(self, request):
    #         email = request.data.get('email')
    #         user = User.objects.get(email=email)
    #         # user.payment_id = None
    #         user.payment_status = None
    #         # user.payment_status_detail = None
    #         user.save()
    #         return Response(status=200)
