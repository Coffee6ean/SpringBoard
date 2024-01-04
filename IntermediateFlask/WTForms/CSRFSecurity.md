# CSRF Security -

**Cross-Site Request Forgery**
A form on any site can submit to any other site!
```html
<form action="http://yourbank.com/transfer" method="POST">
  <input type="hidden" name="from" value="your-acct">
  <input type="hidden" name="to" value="my-acct">
  <input type="hidden" name="amt" value="$1,000,000">
  <button type=submit">I Love Kittens!</button>
</form>
```

Therefore, most sites use a “CSRF Token”:
- This is generated by the server when a form is shown
- It is included in the HTML of the form
- It is checked by the server on form submission
Flask-WTF uses CSRF out-of-the-box:
- All forms include a hidden CSRF field
- The **validate_on_submit** method checks for this

# Testing -

For tests to work, need to disable CSRF checking in tests:
_demo/tests.py_
```python
app.config['WTF_CSRF_ENABLED'] = False
```
_demo/tests.py_
```python
class SnackViewsTestCase(TestCase):
    """Tests for views for Snacks."""

    def test_snack_add_form(self):
        with app.test_client() as client:
            resp = client.get("/add")
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('<form id="snack-add-form"', html)

    def test_snack_add(self):
        with app.test_client() as client:
            d = {"name": "Test2", "price": 2}
            resp = client.post("/add", data=d, follow_redirects=True)
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn("Added Test2 at 2", html)
```

### Best Practices
- Make distinct add/edit forms, if sensible.
- Add lots of form validation, if appropriate.
- All non-GET routes return ***redirect*** (not ***render_template*** ) on success.