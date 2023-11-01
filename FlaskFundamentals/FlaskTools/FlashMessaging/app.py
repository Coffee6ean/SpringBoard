# Message Flashing - 
# Often you want to provide feedback at “the next page user sees”
# This is most common when you will redirect.
from flask import flash

@app.route("/your/route")
def your_route():
  """Some route that redirects."""

  flash("Message for user!")
  return redirect("/somewhere/else")

# template used by /somewhere/else
"""
{% for msg in get_flashed_messages() %}
  <p>{{ msg }}</p>
{% endfor %}
"""