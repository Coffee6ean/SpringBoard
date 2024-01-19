# Conditionals in Jinja -

# {% if CONDITION_EXPR %} ... {% endif %}
"""
{% if compliments %}
  You're so:
  ...
{% endif %}
"""

# Loops in Jinja: 
# {% for VAR in ITERABLE %} ... {% endfor %}
"""
<ul>
  {% for compliment in compliments %}
    <li>{{ compliment }}</li>
  {% endfor %}
</ul>
"""