import requests

# GET METHOD
term = 'Eminem'
limNum = 15

res = requests.get('https://itunes.apple.com/search?term=jack+johnson&limit=25',
                   params={'term': term, 'limit': limNum})
data = res.json()

for result in data['results']:
    print(result.get('trackName'))
    print(result.get('collectionName', None))
    print('------------')

# POST METHOD
data = {
    'username': 'coffee6ean',
    'tweets': [
        'Hello World', 'Goodbye', 'Where the cheeze at', {
            'id': 1,
            'text': 'My first Tweet!'
        }
    ]
}

requests.post('https://enck1ch5wfe8.x.pipedream.net',json=data)