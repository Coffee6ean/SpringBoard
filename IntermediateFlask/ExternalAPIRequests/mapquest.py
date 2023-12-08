import requests
import sys
sys.path.append('../')
from Keys.secrets import GEOCODE_API_KEY

response = requests.get('https://www.mapquestapi.com/geocoding/v1/address', 
             params={'key': GEOCODE_API_KEY, 'location': '123 Main St.'})