# SQLAlchemy - 

Learn to use object-oriented techniques with relational DB's, without writing any SQL
```bash
>>> whiskey = Pet(name='Whiskey', species='dog', hunger=50)
>>> whiskey.hunger
50
>>> whiskey.hunger = 20
```

## SQLAlchemy ORM:
- Popular, powerful, Python-based ORM (object-relational mapping)
- Translation service between OOP in our server language and relational data in our database
- Can use by itself, with Flask, or other web frameworks

***Object-relational mapping*** in computer science is a programming technique for converting data between incompatibale type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language.

The heart of the problem involves translating the logical representation of the objects into an atomized form that is capable of being stored in the database while preserving the properties of the objects an their relationships so that they can be reloaded as objects when needed. If this storage and retrieval functionality is implemented, the objects are said to be persistent.

## Installing SQLAlchemy:
Need the program that lets Python speak PostgreSQL: **psycopg2**
Need the program that provides SQLAlchemy: **flask-sqlalchemy**
```bash
$ pip install psycopg2-binary
$ pip install flask-sqlalchemy
```

## OO into SQL:
### Model
A model like this:
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
​
```

Would turn into this SQL:
```sql
CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    species VARCHAR(30),
    hunger INTEGER NOT NULL DEFAULT 20
)
```
