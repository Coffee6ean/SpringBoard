# SQLAlchemy - 

Learn to use object-oriented techniques with relational DB's, without writing any SQL
```
>>> whiskey = Pet(name='Whiskey', species='dog', hunger=50)
>>> whiskey.hunger
50
>>> whiskey.hunger = 20
```
### SQLAlchemy ORM:
- Popular, powerful, Python-based ORM (object-relational mapping)
- Translation service between OOP in our server language and relational data in our database
- Can use by itself, with Flask, or other web frameworks

### Installing SQLAlchemy:
Need the program that lets Python speak PostgreSQL: **psycopg2**
Need the program that provides SQLAlchemy: **flask-sqlalchemy**
```
$ pip install psycopg2-binary
$ pip install flask-sqlalchemy
```
