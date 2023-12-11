# RESTful APIs With Flask - 

- Can still use Flask and Flask-SQLAlchemy
- Will respond with JSON, not HTML
    - Won’t typically use Jinja to make JSON, just ***jsonify*** in route
    - Can’t redirect — return JSON of answer

### Flask jsonify
**`jsonify(thing)`** Returns JSON of thing (usually dict, but could be list)
**`jsonify(name="Jane", age=21)`** Returns JSON like `{"name": "Jane", "age": 21}`

### Limitations of JSON / jsonify
- JSON can only represent dictionaries, lists, and primitive types
    - Cannot represent things like SQLAlchemy model instances
- Python can’t just “turn your objects into JSON”
    - Requires a process called *serialization*

### Serialization
You can turn your instances into dictionaries or lists:
_demo/app.py_
```python
def serialize_dessert(dessert):
    """Serialize a dessert SQLAlchemy obj to dictionary."""

    return {
        "id": dessert.id,
        "name": dessert.name,
        "calories": dessert.calories,
    }
```

Example: RESTful Routes Returning JSON
_demo/app.py_
```python
@app.route("/desserts")
def list_all_desserts():
    """Return JSON {'desserts': [{id, name, calories}, ...]}"""

    desserts = Dessert.query.all()
    serialized = [serialize_dessert(d) for d in desserts]

    return jsonify(desserts=serialized)
```

_demo/app.py_
```python
@app.route("/desserts/<dessert_id>")
def list_single_dessert(dessert_id):
    """Return JSON {'dessert': {id, name, calories}}"""

    dessert = Dessert.query.get(dessert_id)
    serialized = serialize_dessert(dessert)

    return jsonify(dessert=serialized)
```

### Sending Data to a Flask JSON API
- For Insomnia, choose JSON as the request type.
- For cURL, set the *Content-Type* header:

```bash
$ curl localhost:5000/api/desserts \
  -H "Content-Type: application/json" \
  -d '{"name":"chocolate bar","calories": 200}'
```

- *(Makes a POST to /api/desserts, passing in that JSON data)*
- For AJAX using Axios, sending JSON is the default

### Receiving Data in a Flask JSON API
If request is made with *Content-Type: application/json*
- it won’t be in ***request.args*** or ***request.form***
- will be inside of ***request.json*** !

### Example: RESTful Route Receiving and Returning JSON
_demo/app.py_
```python
@app.route("/desserts", methods=["POST"])
def create_dessert():
    """Create dessert from form data & return it.

    Returns JSON {'dessert': {id, name, calories}}
    """

    name = request.json["name"]
    calories = request.json["calories"]

    new_dessert = Dessert(name=name, calories=calories)

    db.session.add(new_dessert)
    db.session.commit()

    serialized = serialize_dessert(new_dessert)

    # Return w/status code 201 --- return tuple (json, status)
    return ( jsonify(dessert=serialized), 201 )
```

## Testing our API:
We will be testing the JSON response, not HTML. In particular, we’ll look at response.json, not response.data
We’ll also send data via a json named argument, not a data named argument. This makes things even easier since we’re just testing data, not presentation.

Can experiement before/while writing tests with Insomnia or curl

### Example Tests
_demo/tests.py_
```python
def test_all_desserts(self):
    with app.test_client() as client:
        resp = client.get("/desserts")
        self.assertEqual(resp.status_code, 200)

        self.assertEqual(
            resp.json,
            {'desserts': [{
                'id': self.dessert_id,
                'name': 'TestCake',
                'calories': 10
            }]})
```

_demo/tests.py_
```python
def test_create_dessert(self):
    with app.test_client() as client:
        resp = client.post(
            "/desserts", json={
                "name": "TestCake2",
                "calories": 20,
            })
        self.assertEqual(resp.status_code, 201)

        # don't know what ID it will be, so test then remove
        self.assertIsInstance(resp.json['dessert']['id'], int)
        del resp.json['dessert']['id']

        self.assertEqual(
            resp.json,
            {"dessert": {'name': 'TestCake2', 'calories': 20}})

        self.assertEqual(Dessert.query.count(), 2)
```

### Wrap Up
- RESTful APIs have standards around routes & methods
- These are used for *API* applications, not HTML-returning applications