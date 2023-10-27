# Variables in a URL - 
# Motivation: 
# - Want user info pages for each user:
#     - http://localhost:5000/user/whiskey
#     - http://localhost:5000/user/spike
#     - We don’t want every possible username as a separate route
# - Want to show blog posts (read from database) by id:
#     - http://localhost:5000/post/1
#     - http://localhost:5000/post/2

from flask import Flask, request
app = Flask(__name__)

# Variables in a URL:
# Argument capture in Flask:
USERS = {
  "whiskey": "Whiskey The Dog",
  "spike": "Spike The Porcupine",
}  

@app.route('/user/<username>')
def show_user_profile(username):
    """Show user profile for user."""

    name = USERS[username]
    return f"<h1>Profile for {name}</h1>"
# - '<variable_name>' in '@app.route'
# - View function must have same  as parameter 'var_name'

# Can also specify int variable:
POSTS = {
  1: "Flask is pretty cool",
  2: "Python is neat-o"
}

@app.route('/post/<int:post_id>')
def show_post(post_id):
    """Show post with given integer id."""

    print("post_id is a ", type(post_id))

    post = POSTS[post_id]

    return f"<h1>Post #{post_id}</h1><p>{post}</p>"
# - '<int:variable_name>' in '@app.route'
# - Converts to integer when calling function

# Can have more than one:
@app.route("/products/<category>/<int:product_id>")
def product_detail(category, product_id):
   """Show detail page for product."""

   ...

# Which Should I Use?
# URL Parameter:
# '/shop/<toy>' - Feels more like “subject of page”
# 
# Query Parameter:
# '/shop?toy=elmo' - Feels more like “extra info about page”
#                  - Often used when coming from form