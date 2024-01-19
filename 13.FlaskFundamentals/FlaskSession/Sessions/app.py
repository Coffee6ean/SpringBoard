# Sessions -

# Cookies Can Be Tricky:
# - Cookies are just strings
# - Cookies are limited by how much information you can store
# - Cookies are a bit low-level in how you use them

# Sessions:
# Flask sessions are a “magic dictionary”
# - Contain info for the current browser
# - Preserve type (lists stay lists, etc)
# - Are “signed”, so users can’t modify data

# Using Session in Flask:
# - Import 'session' from 'flask'
# - Set a 'secret_key'
from flask import Flask, session

app = Flask(__name__)
app.config["SECRET_KEY"] = "SHHHHHHHHHHH SEEKRIT"

# Now, in routes, you can treat session as a dictionary:
@app.route('/some-route')
def some_route():
    """Set fav_number in session."""

    session['fav_number'] = 42
    return "Ok, I put that in the session."

# To get things out, treat it like a dictionary:
from flask import session

@app.route('/my-route')
def my_route():
    """Return information using fav_number from session."""

    return f"Favorite number is {session['fav_number']}"

# It will stay the same kind of data (in this example, an integer)
# You also have direct access to 'session' automatically in Jinja templates:
# Your favorite number is {{ session['fav_number'] }}

# How Do Sessions Work?
# - Different web frameworks handle this differently
# - In Flask, the sessions are stored in the browser as a cookie
#    - `session = "eyJjYXJ0IjLDIsMiwyLDJdfQ.CP0ryA2EMSZdE"`
#    - They’re “serialized” and “signed”
#    - So users could see, but can’t change their actual session data—only Flask can

# 'Advanced details:' Flask by default uses the 'Werkzeug' provided 
# “secure cookie” as session system. It works by serializing the session 
# data, compressing it and base64 encoding it.

# Are “Sessions” Related to “Session Cookies”?
# Not directly, no. They both just use the term “session” but to mean 
# something different.
# By default: Flask sessions use browser-lifetime cookies 
# (“session cookies”). So a Flask session lasts as long as your browser
# window.
# Yes, you can change that (read the Flask docs!)
#
# This distinction isn’t too important right now, but the terminology 
# sometimes comes up in interviews, so be sure to review this material
#
# Server-Side Sessions:
# - Some web frameworks store session data on the server instead
#    - Often, in a relational database
#    - Send a cookie with “session key”, which tells server how to get the real data
#    - Useful when you have lots of session data, or for complex setups
#    - Flask can do this with the add-on [Flask-Session](https://pypi.org/project/Flask-Session/)


# Which Should I Use? Cookies or Sessions?
# Generally, sessions.
# It’s important to know how cookies work, but if your framework provides 
# sessions (as Flask does), they’re easier to work with.