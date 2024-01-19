# Setup -

_demo/models.py_
```python
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    """Connect to database."""
    db.app = app
    db.init_app(app)
​
```

_demo/app.py_
```python
from flask import Flask, request, redirect, render_template
from models import db, connect_db, Pet

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///sqla_intro'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)
```
​
- **SQLALCHEMY_DATABASE_URI** - Where is your database?
- **SQLALCHEMY_TRACK_MODIFICATIONS** - Set this to false or SQLAlchemy will yell at you
- **SQLALCHEMY_ECHO** - Print all SQL statements to the terminal (helpful for debugging)
- Can talk to SQLite, PostgreSQL, MySQL, and more
- You (almost) never have to change code if you change databases