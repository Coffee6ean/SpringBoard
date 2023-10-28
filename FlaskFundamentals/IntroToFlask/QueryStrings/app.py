# GET and POST
# Requests - 
# Flask provides an object, 'request', to represent web requests.
from flask import Flask, request
app = Flask(__name__)

# Handling Query Arguments:
# For a url like '/search?term=fun'
@app.route("/search")
def search():
    """Handle GET requests like /search?term=fun"""

    term = request.args["term"]
    return f"<h1>Searching for {term}</h1>"
# request.args is a dict-like object of query parameters


# Handling POST Requests:
# By default, a route only responds to GET requests
# To accept POST requests, must specify that:
@app.route("/my/route", methods=["POST"])
def handle_post_to_my_route():
   ...

# Example POST Request:
@app.route("/add-comment")
def add_comment_form():
    """Show form for adding a comment."""

    return """
      <form method="POST">
        <input name="comment">
        <button>Submit</button>
      </form>
      """

@app.route("/add-comment", methods=["POST"])
def add_comment():
    """Handle adding comment."""

    comment = request.form["comment"]

    # TODO: save that into a database!

    return f'<h1>Received "{comment}".</h1>'