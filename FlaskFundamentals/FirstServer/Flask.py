# Flask Apps -
# Installing Flask:
"""
$ python3 -m venv venv
$ source venv/bin/activate

(venv)$ pip3 install flask
... lots of stuff ...
Successfully installed flask Werkzeug Jinja2 ...
Cleaning up...
"""

# Making An App:
# Need to create a “flask application”:
from flask import Flask
app = Flask(__name__)

# When we create a Flask application, it needs to know what module to 
# scan for things like routes (covered later) – so the '__name__' is 
# required and should always be written like that.

# Running FLask: (Control-C to quit)
"(venv) $ flask run"

# If your Flask app file isn’t called app you can set an environment 
# variable:
"(venv) $ FLASK_APP=app.py flask run"