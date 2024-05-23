import mercadopago
from django.conf import settings

# idempotency_key = str(uuid.uuid4())
# request_options = mercadopago.config.RequestOptions()
# request_options.custom_headers = {
#     'x-idempotency-key': idempotency_key
# }

url = "https://lexcom.tech/"


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
            "title": self.data.get('plan'),
            "quantity": 1,
            "unit_price": float(self.data.get('price')),
            "currency_id": "PEN"
        }

        preference_data = {
            "items": [item],
            "back_urls": {
                "success": url + "",
                "failure": url + "",
                "pending": url + ""
            },
            "auto_return": "approved",
        }

        preference_response = client.preference().create(preference_data)
        preference = preference_response["response"]

        return preference
