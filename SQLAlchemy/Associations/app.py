from flask import Flask, request, render_template, redirect, flash, session
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
from models import db, connect_db, Department, Employee, get_directory

app = Flask(__name__)

# Pushing an application context to make sure the app is context-aware
# This is necessary for certain operations, such as database interactions.
app.app_context().push()

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///employees_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False
app.config['SECRET_KEY'] = 'thousandsunny17'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

connect_db(app)

# ROUTES
@app.route("/phones")
def list_phones():
    emps = Employee.query.all()
    return render_template('phones.html', emps=emps)