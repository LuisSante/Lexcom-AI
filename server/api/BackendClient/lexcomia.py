import joblib  
import os
from django.conf import settings
import requests

class LexComIA_Client:        
    def get_predictin(self , data):
        rf_path = os.path.join(settings.STATIC_ROOT, 'IAmodels', 'random_forest_model.joblib')
        lr_path = os.path.join(settings.STATIC_ROOT, 'IAmodels', 'logistic_regression_model.joblib')
        
        vector_features = [data]
        # vector_features = logic.convert_language(vector_features)
        loaded_rf_model = joblib.load(rf_path)
        loaded_lr_model = joblib.load(lr_path)

        loaded_rf_probabilities = loaded_rf_model.predict_proba(vector_features)
        loaded_lr_probabilities = loaded_lr_model.predict_proba(vector_features)

        print(loaded_rf_probabilities)
        print(loaded_lr_probabilities)
        return