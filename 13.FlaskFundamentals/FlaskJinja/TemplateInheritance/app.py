# Template Inheritance -
# - Motivation: Different pages on the same site are often 95% the same
# - Repetition is Boring: Your templates have many things in common
"""
<!DOCTYPE html>
<html>
<head>
  <title> TITLE GOES HERE </title>
  <link rel="stylesheet" href="/static/css/styles.css">
  <script src="http://unpkg.com/jquery"></script>
</head>
<body>
  <h1>Our Site</h1>
  BODY CONTENT GOES HERE
  <footer>Copyright by Whiskey.</footer>
</body>
</html>
"""
# If you want the same stylesheet everywhere, you have to remember to 
# include it in every template. If you forget in one template, that page 
# won’t have your custom css that you spent so much time getting right. 
# The same goes for scripts. If you want jquery everywhere, do you really
# want to have to remember to include it in the head in every template

# How to Use Template Inheritance: 
# - Make a  that will hold all the repetitive stuff 'base.html'
# - “Extend” that base template in your other pages
# - Substitute blocks in your extended pages

# Sample Base Template:
"{% block BLOCKNAME %} ... {% endblock %}"

# *templates/base.html*
"""
<!DOCTYPE html>
<html>
<head>
  <title>{% block title %}TITLE GOES HERE{% endblock %}</title>
  <link rel="stylesheet" href="/static/css/styles.css">
  <script src="http://unpkg.com/jquery"></script>
</head>
<body>
  <h1>Our Site</h1>
  {% block content %}BODY CONTENT GOES HERE{% endblock %}
  <footer>Copyright by Whiskey.</footer>
</body>
</html>
"""

# Page Using Template:
"{% block BLOCKNAME %} ... {% endblock %}"

# *templates/my-page.html*
"""
{% extends 'base.html' %}

{% block title %}My awesome page title{% endblock %}

{% block content %}

  <h2>I'm a header!</h2>
  <p>I'm a paragraph!</p>

{% endblock %}
"""