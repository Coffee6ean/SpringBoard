# Popular Add-Ons -

### WTForms & SQLA
*you did this a lot*
```py
def edit_pet(pet_id):
    pet = Pet.query.get(pet_id)
    form = EditPetForm(obj=pet)

    if form.validate_on_submit():
        pet.name = form.name.data
        pet.species = form.species.data
        pet.color = form.color.data
        pet.age = form.age.data
        pet.weight = form.weight.data
        pet.num_legs = form.num_legs.data
        ...
```

*you can do this*
```py
def edit_pet(pet_id):
    pet = Pet.query.get(pet_id)
    form = EditPetForm(obj=pet)

    if form.validate_on_submit():
        form.populate_obj(pet)
```

### WTForms-Alchemy
Can generate WTForms from SQLAlchemy model:

*forms.py*

```python
from flask_wtf import FlaskForm
from wtforms_alchemy import model_form_factory
from models import db, Pet, Owner

BaseModelForm = model_form_factory(FlaskForm)

class ModelForm(BaseModelForm):
    @classmethoddef get_session(self):
        return db.session

class PetForm(ModelForm):
    class Meta:
        model = Pet

class OwnerForm(ModelForm):
    class Meta:
        model = Owner
```

### Flask-Login
Product that provides common parts of user/passwords/login/logout
Similar to what you built, but out-of-box.

### Flask-Mail
Can send email from Flask.

Can send email from Flask!

### Flask-Admin
Can get decent CRUD admin views from SQLAlchemy models:

![alt text][pic]

### Flask-Restless
Get CRUD API endpoints from SQLAlchemy models:
```py
from flask.restless import APIManager

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Unicode)
    birth_date = db.Column(db.Date)

class Computer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Unicode)
    vendor = db.Column(db.Unicode)
    purchase_time = db.Column(db.DateTime)
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    owner = db.relationship('Person')

# Create the Flask-Restless API manager.manager = APIManager(app, flask_sqlalchemy_db=db)

# API endpoints, available at /api/<tablename>manager.create_api(User, methods=['GET', 'POST', 'DELETE'])
manager.create_api(Computer, methods=['GET'])
```
​
### Will You Use Flask?
Maybe.
It’s popular and used by real companies, large and small.
It’s also a great choice for personal projects, code challenges, etc.

[pic]: https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F72e2761d-e6da-4a80-9aec-b497b20faa5e%2FScreen_Shot_2023-05-08_at_4.42.05_PM.png?table=block&id=f7329aac-d8a7-49ed-be05-e155939ea12a&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1610&userId=&cache=v2 "Flask Admin - Example"