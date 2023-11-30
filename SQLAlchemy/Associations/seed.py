"""Seed file to make sample data for db."""

from models import Department, Employee, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

d1 = Department(dept_code="mktg", dept_name="Marketing", phone="897-9999")
d2 = Department(dept_code="acct", dept_name="Accounting", phone="111-5429")
d3 = Department(dept_code="r&d", dept_name="Research and Development", phone="908-7878")
d4 = Department(dept_code="it", dept_name="Information Technology", phone="888-4562")
d5 = Department(dept_code="sales", dept_name="Sales", phone="225-6912")

emp1 = Employee(name="River Bottom", state="NY", dept_code="mktg")
emp2 = Employee(name="Summer Winter", state="OR", dept_code="mktg")
emp3 = Employee(name="Joaquin Phoenix", dept_code="acct")
emp4 = Employee(name="Octavia Spencer", dept_code="r&d")
emp5 = Employee(name="Larry David", dept_code="r&d", state="NY")
emp6 = Employee(name="Kurt Cobain", dept_code="it", state="WA")
emp7 = Employee(name="Rain Phoenix", dept_code="it")

db.session.add_all([d1, d2, d3, d4, d5])
db.session.add_all([emp1, emp2, emp3, emp4, emp5, emp6, emp7])

db.session.commit()
