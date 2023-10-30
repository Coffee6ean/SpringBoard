from flask import Flask, request, render_template

app = Flask(__name__)  #=> Creating a new server
print('Initialize')

#--- Routes ---#
@app.route('/welcome')
def welcome():
    """Return simple 'Home Page" route"""
    html = """
        <html>
            <body>
                <h1>Welcome</h1>
            </body>
        </html>
    """
    return html

@app.route('/welcome/home')
def welcome_home():
    """Return simple route"""
    html = """
        <html>
            <body>
                <h1>Welcome Home</h1>
            </body>
        </html>
    """
    return html

@app.route('/welcome/back')
def welcome_back():
    """Return simple route"""
    html = """
        <html>
            <body>
                <h1>Welcome Back</h1>
            </body>
        </html>
    """
    return html