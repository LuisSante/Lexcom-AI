import os

from dotenv import load_dotenv
from serpapi import GoogleSearch

load_dotenv()
serpapi_key = os.getenv("SERPAPI_KEY")

def get_google_region_data(product):
    params_region = {
        "engine": "google_trends",
        "q": f"{product}",
        "data_type": "GEO_MAP_0",
        "api_key": f"{serpapi_key}"
    }
    search = GoogleSearch(params_region)
    results = search.get_dict()

    return results["interest_by_region"]
    
def get_google_trends_data(product, key_country):
    params_trends = {
        "engine": "google_trends",
        "q": f"{product}",
        "data_type": "TIMESERIES",
        "geo": f"{key_country}",
        "api_key": f"{serpapi_key}"
    }

    search_trends = GoogleSearch(params_trends)
    results_trends = search_trends.get_dict()

    if "interest_over_time" in results_trends:
        interest_over_time = results_trends["interest_over_time"]
        
        return interest_over_time
    else:
        print("Error: 'interest_by_region' not found in the API response.")
        return None
    
def get_topics_relation(product):
    params = {
        "engine": "google_trends",
        "q": f"{product}",
        "data_type": "RELATED_TOPICS",
        "api_key": f"{serpapi_key}"
    }

    search = GoogleSearch(params)
    results = search.get_dict()

    if 'related_topics' in results:
        related_topics = results["related_topics"]

        rising_topics = {
            'topic': [item['topic']['title'] for item in related_topics['rising']],
            'type': [item['topic']['type'] for item in related_topics['rising']],
            'value': [item['value'] for item in related_topics['rising']],
        }

        return rising_topics
    
    
    else:

        rising_topics = {
            'topic': 'error',
            'type': 'error',
            'value': 'error'
        }

        return rising_topics 
    