import requests

class GoogleApiClient:
    def __init__(self, api_key):
        self.api_key = api_key
        self.api_base = "https://serpapi.com/search.json"
        
    def get_google_region_data(self, product):
        url = f"{self.api_base}?engine=google_trends&q={product}&data_type=GEO_MAP_0&api_key={self.api_key}"
        return requests.get(url)
    
    def get_google_trends_data(self, product, key_country):
        url = f"{self.api_base}?engine=google_trends&q={product}&data_type=TIMESERIES&geo={key_country}&api_key={self.api_key}"
        return requests.get(url)
        
    def get_topics_relation(self, product):
        url = f"{self.api_base}?engine=google_trends&q={product}&data_type=RELATED_TOPICS&api_key={self.api_key}"
        return requests.get(url)