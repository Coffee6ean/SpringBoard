# Flask Debug Toolbar - 
# Ultra-useful add-on for Flask that shows, in browser, details about app.
# Install add-on product:
"""
(venv) $ pip3 install flask-debugtoolbar
"""

# Add the following to your Flask app.py:
from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = "oh-so-secret"

debug = DebugToolbarExtension(app)

... # rest of file continues
SECRET_KEY


# Using The Toolbar:
# Request Vars: Explore what Flask got in request from browser
# HTTP Headers: Can be useful to explore all headers your browser sent
# Templates: What templates were used, and what was passed to them?
# Route List: What are all routes your app defines?