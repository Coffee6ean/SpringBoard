# Models -

## Our Model:
_demo/models.py_
```
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
```

​
- All models should subclass db.Model
- Specify the tablename with __tablename__
_demo/models.py_
```
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
```
- Have to specify the type of column
- Columns can contain ***NULL*** unless `nullable=False`
- Can specify ***default***, ***unique***, ***primary_key***,***autoincrement***

### Creating the Database
```
$ ipython3
In [1] %run app.py

In [2] db.create_all()
```

- Create all the tables using this database connection
- Only have to do once
    - No effect if tables already exist
- If you change table schema
    - drop table & re-run

## Using our Model:

```bash
>>> fluffy = Pet(name='Fluffy', species="Pet")
>>> fluffy.hunger
20

>>> db.session.add(fluffy)    # required to add to database!
>>> db.session.commit()       # commit the transaction
```

You only have to use `db.session.add()` to add a new object once – you don’t need to keep adding it to the session each time you change it.

<aside>
💡 **Note**: Database management systems (Postgres included) support the concept of **transactions**. The idea here is that you may want to update multiple parts of the database simultaneously, and if any piece of the update fails, the entire transaction fails.

The most common example is a bank transfer: imagine Abby is trying to send $20 to Barbara, and we want to record this fact in a database. So we deduct $20 from Abby’s account, but before we can increase Barbara’s balance by $20, there’s a power failure. In this case, the whole transaction should be cancelled. Otherwise, Abby would be out $20!

In PostgreSQL, we can begin a transaction with `BEGIN TRANSACTION`. Inside of our transaction, any SQL we write won’t make permanent changes to the database. If we make a change we don’t like, we can cancel the transaction with the `ROLLBACK` command.

But more importantly for our present purposes, if there’s a change we do like, we need to `COMMIT` the transaction.

Here’s a small example you can explore in the demo code:
_demo/colors.sql_
```sql
-- from the terminal run:
-- psql < colors.sql

DROP DATABASE IF EXISTS colors;

CREATE DATABASE colors;

\c colors

CREATE TABLE colors
(
  id SERIAL PRIMARY KEY,
  name TEXT
);

INSERT INTO colors (name) VALUES ('red'), ('blue'), ('green');

BEGIN TRANSACTION;
  DELETE FROM colors;
  SELECT * FROM colors; 
  -- no colors are left!
ROLLBACK;

SELECT * FROM colors;
-- all the colors are still here!
-- we only removed them in a rolled back transaction.

BEGIN TRANSACTION;
  DELETE FROM colors;
  SELECT * FROM colors; 
  -- no colors are left!
COMMIT;

SELECT * FROM colors;
-- Since we committed the transaction,
-- all of the colors are gone.
```
</aside>