# Where Other Project Files Go -

# Do I Need Routes for CSS (or JS, etc)?
"""
@app.route("my-css.css")
def my_css():
    return "
       b { color: red }
       ...
     "
"""
# No! That would be tedious — plus, everyone gets the same CSS.

# Static Files: CSS and JS
# In 'static/' directory:
"""
my-project-directory/
  venv/
  app.py
  templates/
    hello.html
  static/
    my-css.css
    my-script.js
"""
# Find files like:
"<link rel='stylesheet' href='/static/my-css.css'>"

# The static directory is where you put files that don’t change, unlike 
# templates, which are parsed. The static directory can be divided in to
# the types of files that it contains: js for javascript, css for css 
# files, img for images, etc., but that isn’t necessary.
