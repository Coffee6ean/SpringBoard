# Integration Tests -
# Test that components work together

# Integration Testing Flask App:
# What kinds of things do we want to test in our Flask applications?
# - “Does this URL path map to a route function?”
# - “Does this route return the right HTML?”
# - “Does this route return the correct status code?”
# - “After a POST to this route, are we redirected?”
# - “After this route, does the session contain expected info?”

# Writing Integration Tests:
# You write them with 'unittest' framework.

# test_client:
# demo/test_app.py
from app import app

# demo/test_app.py
class ColorViewsTestCase(TestCase):
    """Examples of integration tests: testing Flask app."""

    def test_color_form(self):
        with app.test_client() as client:
            # can now make requests to flask via `client`

# Technically, this comes from “Werkzeug”, a library that Flask uses.
# This doesn’t start a real web server — but we can make requests to 
# Flask via 'client'