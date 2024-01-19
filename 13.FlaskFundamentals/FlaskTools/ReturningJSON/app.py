# Returning JSON -
# JSON is just a string — so you don’t *need t*o do anything special.
@app.route("/some/route")
def some_route():
    """Route that returns JSON."""

    return '{"name": "Whiskey", "cute": "hella"}'

# Two considerations:
# - It’s finicky to hand-write JSON and get it right
# - It’s sometimes helpful to send header to browser that “this is JSON”
#     - Some AJAX plugins are better than others in guessing in absence 
#       of this

# demo/app.py
@app.route("/example-json")
def example_json_route():
    """Return some JSON."""

    info = {"name": "Whiskey", "cute": "Hella"}
    return jsonify(info)

    # Alternate syntax
    # return jsonify(name="Whiskey", cute="Hella")