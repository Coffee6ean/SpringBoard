# Relationships -

![alt text][pic]

**Departments**                                 
| dept_code  | dept_name  | Phone    |   
| ---------- |:----------:| --------:|    
| fin        | Finance    | 555-1000 |   
| legal      | Legal      | 555-2222 |   
| mktg       | Marketing  | 555-9999 |   
                                         
**Employees**                           
| id  | name     | state |  dept_code  |
| --- |:--------:| -----:| -----------:|
| 1   | Leonard  | CA    |  legal      |
| 1   | Liz      | CA    |  legal      |
| 1   | Maggie   | DC    |  mktg       |
| 2   | Nadine   | CA    |  null       |


_demo/models.py_
```python
class Department(db.Model):
    """Department. A department has many employees."""__tablename__ = "departments"

    dept_code = db.Column(db.Text, primary_key=True)
    dept_name = db.Column(db.Text,
                          nullable=False,
                          unique=True)
    phone = db.Column(db.Text)
​
```

_demo/models.py_
```python
class Employee(db.Model):    
    dept_code = db.Column(
        db.Text,
        db.ForeignKey('departments.dept_code'))
```
- Add an actual field, ***dept_code***
- ***ForeignKey*** makes primary/foreign key relationship
    - Parameter is string “tablename.fieldname”
    - Database will handle referential integrity

_demo/models.py_
```python
class Employee(db.Model): 
    dept_code = db.Column(
        db.Text,
        db.ForeignKey('departments.dept_code'))

    dept = db.relationship('Department')
```
- ***relationship*** allows SQLAlchemy to “navigate” this relationship
    - Using the name ***dept*** on an ***Employee***


[pic]: SQLAlchemy/Images/image.png "Related Tables"
