import joblib  
import os
from django.conf import settings


class LexComIA_Client:        

    def transformers(self, data):
        values_array = [int(data[0])]  
        values_array.extend(1 if value else 0 for value in data[1:])
        return values_array

    def get_prediction(self , data):
        rf_path = os.path.join(settings.STATIC_MODELS_IA, 'IAmodels', 'random_forest_model-001.joblib')
        values_array = list(data.values())
        transformer_array = self.transformers(values_array)
        vector_features = [transformer_array]
        loaded_rf_model = joblib.load(rf_path)
        loaded_rf_probabilities = loaded_rf_model.predict_proba(vector_features)
        return loaded_rf_probabilities