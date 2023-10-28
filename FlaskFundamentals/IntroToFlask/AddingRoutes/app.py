# Adding Routes
from flask import Flask
app = Flask(__name__)

# Making Responses:
# - A function that returns web response is called a 'view'
#     - Response is a 'string'
#     - Usually, a 'string' of HTML
# - So, our function returns an HTML string:
@app.route('/hello')  # Decorator
def say_hello():
    """Return simple "Hello" Greeting."""

    html = "<html><body><h1>Hello</h1></body></html>"
    return html

# - Flask lets you “route” a URL to a function
# - `@app.route('/hello')` is a Python “decorator”
#     - “/hello” in the decorator maps directly to the URL the user requested
# 
# Now we can get to this at http://localhost:5000/hello

# Serving at the Root: 
@app.route('/')
def index():
    """Show homepage"""

    return """
      <html>
        <body>
          <h1>I am the landing page</h1>
        </body>
      </html>
      """
# This function will get called if the user requests 
# 'http://localhost:5000/'.
# Now we can reach this page at [http://localhost:5000]
# (http://localhost:5000/)