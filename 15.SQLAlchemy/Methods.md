# Methods -

_demo/models.py_
```python
class Pet(db.Model):
    """Pet."""

    __tablename__ = "pets"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.String(50),
                     nullable=False,
                     unique=True)
    species = db.Column(db.String(30), nullable=True)
    hunger = db.Column(db.Integer, nullable=False, default=20)

    def greet(self):
        """Greet using name."""

        return f"I'm {self.name} the {self.species or 'thing'}"

    def feed(self, units=10):
        """Nom nom nom."""

        self.hunger -= units
        self.hunger = max(self.hunger, 0)
```

## Using Our Methods:
```bash
>>> fluffy.greet()
'I am Fluffy the cat'

>>> fluffy.feed()
>>> fluffy.hunger
>>> db.session.commit()    # save new hunger
```

<aside>
**Note**:

- Most methods are “instance methods”
    - These are called on an instance of a class (ie, a single cat)
    - They can refer to/change attributes of that instance
- Some methods are “class methods”
    - They are called on the **class itself**
    - They can’t refer to instance attributes
    - Often used as “factories” to return instances
</aside>

```sql
class Pet(db.Model):

    @classmethod
    def get_by_species(cls, species):
        """Get all pets matching that color."""

        return cls.query.filter(Pet.species == species).all()
```

```sql
>>> Pet.get_by_species("dog")
[<Pet ...>, <Pet ...>]
```

## Better Representation:
```python
>>> Pet.get_by_species("dog")
[<Pet ...>, <Pet ...>]
​
```

Yeah, but which pet is that?
_demo/models.py_
```python
class Pet(db.Model):   # ...
    def __repr__(self):
        """Show info about pet."""

        p = self
        return f"<Pet {p.id} {p.name} {p.species} {p.hunger}>"
​
```

```python
>>> Pet.query.get(1)
<Pet 1 Whiskey dog 10>
```
