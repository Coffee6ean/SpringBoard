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

```python
class Department(db.Model):   # ...    employees = db.relationship('Employee')
```
- Can get list of employee objects from dept with .employees

<aside>
💡 You can specify both “ends” of a database relationship as shown above: going from an employee to their department with `.dept` and from a department to their employees with `.employees`.

SQLAlchemy also allows a shortcut that some people prefer—that you can just declare one relationship, and note the “backreference” for it.

To do this, you wouldn’t need ***.employees*** attribute on the ***Department*** class and could just put this on the***Employee*** class:

```sql
dept = db.relationship( 'Department', backref='employees')
```

Both give the same results—you can navigate from an employee to their department and from a department to its employees, so which you use is a matter of aesthetic preference
</aside>

## Navigating:
```python
class Employee(db.Model):    # ...dept = db.relationship('Department')

class Department(db.Model):  # ...employees = db.relationship('Employee')
```

can navigate emp → dept with .dept
```sql
>>> leonard = Employee.query.filter_by(name='Leonard').one()

>>> leonard.dept_code
'legal'

>>> leonard.dept
<Department legal Legal>
```

can navigate dept → emp with .employees
```sql
>>> legal = Department.query.get('legal')

>>> legal.employees
[<Employee 1 Leonard CA>, <Employee 2 Liz CA>]
```

## Short-Hand Defining with Backref:
_longer way_
```python
class Employee(db.Model):    # ...dept = db.relationship('Department')

class Department(db.Model):  # ...employees = db.relationship('Employee')
```

_short-hand way using ***backref***_
```python
class Employee(db.Model):    # ...dept = db.relationship('Department', backref='employees')

class Department(db.Model):  # ...# don't need to specify here; will auto-magically get# .employees to navigate to employees because of backref

```

## Using Relationships:
Our Goal
“Show phone directory of employees and their dept.”
| Name       | Department  | Phone    |   
| ---------- |:-----------:| --------:|    
| Leonard    | Legal       | 555-2222 |   
| Liz        | Legal       | 555-2222 |   
| Maggie     | Marketing   | 555-9999 |   
| Nadine     | -           | -        |


### Navigating
_demo/models.py_
```python
def phone_dir_nav():
    """Show phone dir of emps & their depts."""emps = Employee.query.all()

    for emp in emps:  # [<Emp>, <Emp>]if emp.dept is not None:
            print(emp.name, emp.dept.dept_code, emp.dept.phone)
        else:
            print(emp.name, "-", "-")
```
- Not super efficient, but okay for now. (What’s the problem?)
    - This is inefficient because SQLAlchemy fires off several queues:
- one for the list of employees
- one for *each* department

## Querying: 
### Recap
_demo/models.py_
```python
class Employee(db.Model):
    """Employee."""__tablename__ = "employees"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.Text, nullable=False, unique=True)
    state = db.Column(db.Text, nullable=False, default='CA')
```
```sql
SELECT * FROM employees
WHERE name = 'Liz';
```

_shorter form, for simple cases_
```sql
Employee.query.filter_by(name='Liz')
```

_longer form, can use other operators_
```sql
Employee.query.filter(Employee.name == 'Liz')
Employee.query.filter(Employee.id > 1)
```

### Chaining
```sql
new_emps = Employee.query.filter(Employee.id > 1)

just_ca = new_emps.filter(Employee.state == 'CA')
```

Remember: nothing runs until we get results:
```sql
>>> just_ca
<flask_sqlalchemy.BaseQuery at 0x105234750>

>>> just_ca.all()
[<Employee 2 Liz CA>, <Employee 4 Nadine CA>]
```

### More Flexible SELECT

```sql
**SELECT** * **FROM** employees
**WHERE** name = 'Liz';
```

Simple version: `ClassName.query`
```sql
Employee.query.filter_by(name='Liz')
Employee.query.filter(Employee.name == 'Liz')
```

More flexible version: `db.session(thing, ...).query`
```sql
db.session.query(Employee).filter_by(name='Liz')
db.session.query(Employee).filter(Employee.name == 'Liz')
```

This doesn’t seem to gain us anything, but this general form of `db.session.query(...)` allows us to query more flexibly than a single model class.

### Returning Tuples

```sql
**SELECT** id, name **FROM** employees;
```

```sql
**>>>** db.session.query(Employee.id, Employee.name).all()
[(1, 'Leonard'), (2, 'Liz'), (3, 'Maggie'), (4, 'Nadine')]
```

Useful when:
- You’re don’t need full SQLA objects
    - Don’t need all fields in table
    - Don’t have object to update
    - Can’t call useful methods on objects
- A bit faster

**Fetching Records.all() :** Get all records
**first() :** Get first record, ok if there is none
**one() :** Get only record, error if 0 or more than 1
**one_or_none() :** Get only record, error if >1, None if 0
**count() :** Get number of records found without fetching all

### Get by PK
```sql
>>> Department.query.filter_by(dept_code='fin').one()
<Department fin Finance>
```
```sql
>>> Department.query.get('fin')
<Department fin Finance>

>>> Department.query.get_or_404('fin')
<Department fin Finance>
```
​
## Common Operators:
### Operators
```sql
Employee.query.filter(Employee.name == 'Jane')

Employee.query.filter(Employee.name != 'Jane')

Employee.query.filter(Employee.id > 65)

Employee.query.filter(Employee.name.like('%Jane%'))    # LIKEEmployee.query.filter(Employee.id.in_([22, 33, 44]))   # IN ()
```

```sql
Employee.query.filter(Employee.state == None)     
# IS NULLEmployee.query.filter(Employee.state.is_(None))   
# IS NULLEmployee.query.filter(Employee.state != None)     
# IS NOT NULLEmployee.query.filter(Employee.state.isnot(None)) 
# IS NOT NULL
```

```sql
q = Employee.query
```

AND:
```sql
q.filter(Employee.state == 'CA', Employee.id > 65)

q.filter( (Employee.state == 'CA') & (Employee.id > 65) )
```

OR:
```sql
q.filter( db.or_(Employee.state == 'CA', Employee.id > 65) )

q.filter( (Employee.state == 'CA') | (Employee.id > 65) )
```

NOT:
```sql
Employee.query.filter( db.not_(Employee.state.in_(['CA', 'OR'])) )

Employee.query.filter( ~ Employee.state.in_(['CA', 'OR']) )
```

## Learning More:
### Self-Learning
```sql
q = Employee.query

q.group_by('state')

q.group_by('state').having(db.func.count(Employee.id) > 2)

q.order_by('state')

q.offset(10)

q.limit(10)
```

[pic]: Images/image.png "Related Tables"
