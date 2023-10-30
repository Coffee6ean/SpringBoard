# Put your app in here.
from flask import Flask, request, render_template
import operations as op

app = Flask(__name__)
print('Initialize')

#--- Routes ---#
@app.route('/')
def home_page():
    return render_template('home_page.html')

@app.route('/add')
def math_add_page():
    a = request.args.get('a')
    b = request.args.get('b')
    result = op.add(int(a or 0), int(b or 0))
    return render_template('add.html', display_res = result)

@app.route('/sub')
def math_sub_page():
    a = request.args.get('a')
    b = request.args.get('b')
    result = op.sub(int(a or 0), int(b or 0))
    return render_template('sub.html', display_res = result)

@app.route('/mult')
def math_mult_page():
    a = request.args.get('a')
    b = request.args.get('b')
    result = op.mult(int(a or 0), int(b or 0))
    return render_template('mult.html', display_res = result)

@app.route('/div')
def math_div_page():
    a = request.args.get('a')
    b = request.args.get('b')
    result = op.div(int(a or 0), int(b or 1))
    return render_template('div.html', display_res = result)

"""
### PART TWO
operators = {
        "add": add,
        "sub": sub,
        "mult": mult,
        "div": div,
        }

@app.route("/math/<oper>")
def do_math(oper):
    "Do math on a and b."

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = operators[oper](a, b)

    return str(result)
"""