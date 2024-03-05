from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from api.BackendClient.lexcomia import LexComIA_Client
from api.serializers.lexcomai import LexcomSerializer

class LexcomIA_ApiView(APIView):
    permission_classes = (IsAuthenticated, )

    def get_lexcom_client(self):
        client = LexComIA_Client()
        return client

    def post(self, request):

        data = request.data
        print(data)
        # return Response({'message': 'Datos recibidos correctamente'}, status=200)
    
        lexcom_client = self.get_lexcom_client()
        response = lexcom_client.get_copy(data)
        recommendation_text = response.choices[0].text.strip()
        serializer = LexcomSerializer(data={'prompt': recommendation_text})

        if serializer.is_valid():
            serialized_data = serializer.data
            return Response(serialized_data)
        else:
            return Response(serializer.errors, status=400)

'''
    model_path = os.path.join(settings.STATIC_ROOT, 'IAmodels', 'svm_model.joblib')
    
    if request.method == 'POST':
        questions = ['interes_producto', 'soluciona_problema', 'facil_de_usar', 'liviano', 'facil_transporte', 'depende_temporada', 'uso_constante', 'novedoso', 'buen_material']
        response_ = [request.POST.get(question) for question in questions]


        if error_input not in vector_features[0]:
            vector_features = logic.convert_language(vector_features)
            loaded_svm_model = joblib.load(model_path)

            svm_probabilities = loaded_svm_model.predict_proba(vector_features)

            fig = image.probability_clasification_product(svm_probabilities)

            fig_clasification = fig.to_html(full_html=False)
        else:
            message_error = "Error: Responde a todas las preguntas"
'''