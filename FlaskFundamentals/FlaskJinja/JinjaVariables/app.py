# Dynamic Templates -
# Jinja will replace things like '{{ msg }}' with value of 'msg' passed 
# when rendering:
from flask import Flask
app = Flask(__name__)

# templates/lucky.html
"""
<h1>Hi!</h1>

<p>Lucky number: {{ lucky_num }}</p>
"""

# app.py
@app.route("/lucky")
def show_lucky_num():
    "Example of simple dynamic template"

    num = randint(1, 100)

    return render_template("lucky.html",
                          lucky_num=num)