import mercadopago
from django.conf import settings

# idempotency_key = str(uuid.uuid4())
# request_options = mercadopago.config.RequestOptions()
# request_options.custom_headers = {
#     'x-idempotency-key': idempotency_key
# }

url = "https://7276-181-176-72-46.ngrok-free.app/"
if not settings.DEBUG:
    url = "https://nginxpm.lexcom.tech/api/v1/"


class PaymentApiClient():

    def __init__(self, access_token, data):
        self.access_token = access_token
        self.data = data

    def get_mercadopago_client(self):
        sdk = mercadopago.SDK(self.access_token)
        return sdk

    def create_preference(self):
        client = self.get_mercadopago_client()
        item = {
            "title": self.data.get('title'),
            "quantity": 1,
            "unit_price": float(self.data.get('price')),
            "currency_id": "USD"
        }

        preference_data = {
            "items": [item],
            "back_urls": {
                "success": "https://lexcom.tech/" + "",
                "failure": "https://lexcom.tech/" + "",
                "pending": "https://lexcom.tech/" + ""
            },
            "auto_return": "approved",
            "notification_url": url + "api/v1/webhook/"
        }

        preference_response = client.preference().create(preference_data)
        preference = preference_response["response"]
        return preference


class NotificationApiClient():

    def __init__(self, access_token):
        self.access_token = access_token

    def get_notification_client(self):
        sdk = mercadopago.SDK(self.access_token)
        return sdk

    def get_payment_notification(self, id_):
        client = self.get_notification_client()
        request = client.payment().get(id_)
        return request
