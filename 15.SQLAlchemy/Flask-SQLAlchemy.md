# SQLAlchemy with Flask -

## Flask-SQLAlchemy:
- Add-on product to integrate Flask and SQLAlchemy
- Benefits:
    - Ties SQLAlchemy session to Flask response
    - Simplifies finding things in SQLAlchemy API
    - Simplifies querying by allowing on class
- Differences:
- With Flask-SQLAlchemy, all useful methods are on db.
    - With vanilla SQLAlchemy, stuff is spread all over
    - There are useful web-related methods, like Pet.objects.get_or_404(pk)

## Demo:
### **Demo: Listing**
_demo/app.py_
```python
@app.route("/")
def list_pets():
    """List pets and show add form."""

    pets = Pet.query.all()
    return render_template("list.html", pets=pets)
```

_demo/templates/list.html_
```html
<ul>
  {% for pet in pets %}
  <li><a href="/{{ pet.id }}">{{ pet.name }}</a></li>
  {% endfor %}
</ul>
```

```html
</ul>
```

### **Demo: Adding**
_demo/templates/list.html_
```html
<form method="POST">
  <p>Name:     <input name="name"></p>
  <p>Species:  <input name="species"></p>
  <p>Hunger:   <input name="hunger"></p>
  <button>Save</button>
</form>
```

_demo/app.py_
```python
@app.route("/", methods=["POST"])
def add_pet():
    """Add pet and redirect to list."""

    name = request.form['name']
    species = request.form['species']
    hunger = request.form['hunger']
    hunger = int(hunger) if hunger else None

    pet = Pet(name=name, species=species, hunger=hunger)
    db.session.add(pet)
    db.session.commit()

    return redirect(f"/{pet.id}")
```

### **Demo: Detail**
_demo/app.py_
```python
@app.route("/<int:pet_id>")
def show_pet(pet_id):
    """Show info on a single pet."""

    pet = Pet.query.get_or_404(pet_id)
    return render_template("detail.html", pet=pet)
​
```

_demo/templates/detail.html_
```html
<h1>{{ pet.name }}</h1>
<p>Species: {{ pet.species }}</p>
<p>Hunger: {{ pet.hunger }}</p>
<p>{{ pet.name }} says {{ pet.greet() }}!</p>
<a href="/">Go back</a>
```

### **Demo: Seeding**
_demo/seed.py_
```python
"""Seed file to make sample data for pets db."""

from models import Pet, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

# If table isn't empty, empty it
Pet.query.delete()

# Add pets
whiskey = Pet(name='Whiskey', species="dog")
bowser = Pet(name='Bowser', species="dog", hunger=10)
spike = Pet(name='Spike', species="porcupine")

# Add new objects to session, so they'll persist
db.session.add(whiskey)
db.session.add(bowser)
db.session.add(spike)

# Commit--otherwise, this never gets saved!
db.session.commit()
```

