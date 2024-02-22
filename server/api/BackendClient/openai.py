import os
import openai

class OpenAIClient:

    def __init__(self, openai_client):
        self.openai_client = openai_client

    def get_recommend(self , product:str):
        prompt = f"Describe en español una estructura de video para promocionar el producto {product}. " \
                "Asegúrate de incluir escenas realistas, diálogos interesantes y más detalles. " \
                "La estructura del video debe tener los siguientes elementos:\n\n" \
                "Introducción:<br>\n" \
                "Desarrollo:<br>\n" \
                "Conclusiones:<br><br>"

        response = self.openai_client.completions.create(
            model="gpt-3.5-turbo-instruct",
            prompt=prompt,
            max_tokens=1000
        )

        return response

def modificacion(product,sesgo):
    openai.api_key = os.getenv("OPENAI_KEY")

    conversacion_inicial = f"Describe en español una estructura de video para promocionar el producto {product}. " \
                            f"Asegúrate de incluir escenas {sesgo}, diálogos interesantes y otros detalles. " \
                            "La estructura del video debe tener los siguientes elementos:\n\n" \
                            "Introducción:<br>\n" \
                            "Desarrollo:<br>\n" \
                            "Conclusiones:<br><br>"

    response = openai.Completion.create(
        model="gpt-3.5-turbo-instruct",
        prompt=conversacion_inicial,
        max_tokens=1000
    )

    # respuesta_gpt = response['choices'][0]['text']

    return response