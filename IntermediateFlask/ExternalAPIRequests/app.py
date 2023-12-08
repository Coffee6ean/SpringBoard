from flask import Flask, render_template, request
import sys
sys.path.append('../')
from Keys.secrets import GEOCODE_API_KEY
import requests


API_BASE_URL = 'https://www.mapquestapi.com/geocoding/v1'

app = Flask(__name__)

# METHODS
def get_coords(address):
    res = requests.get(f"{API_BASE_URL}/address", 
                params={'key':GEOCODE_API_KEY, 'location':address})
    #import pdb
    #pdb.set_trace()

    data = res.json()
    lat = data['results'][0]['locations'][0]['latLng']['lat']
    lng = data['results'][0]['locations'][0]['latLng']['lng']
    coords = {'lat': lat, 'lng': lng}
    return coords

# ROUTES
@app.route('/')
def show_address_form():
    return render_template('address_form.html')

@app.route('/geocode')
def geo_location():
    address = request.args['address']
    coords = get_coords(address)
    return render_template('address_form.html', coords=coords)