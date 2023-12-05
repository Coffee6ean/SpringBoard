# Flask Forms - 

You can make forms yourself
- Write the HTML (including labels, etc)
- Write server-side validating code for each field
- Add logic for form for showing validation messages
- Add protection against security attacks
This is tedious.

## WTForms:
WTForms is a Python library providing:
- Validation
- HTML production
- Security

## Flask-WTF:
Flask-WTF is built on top of that, and adds integration with Flask (get data from request, etc)
**Install**
```bash
(env) $ pip install flask-wtf
```

# Basic Example -

## Defining the Form Class:
_demo/forms.py_
```python
from flask_wtf import FlaskForm
from wtforms import StringField, FloatField

class AddSnackForm(FlaskForm):
    """Form for adding snacks."""

    name = StringField("Snack Name")
    price = FloatField("Price in USD")
```

## The Form Route Handler:
_demo/app.py_
```python
from forms import AddSnackForm
```

_demo/app.py_
```python
@app.route("/add", methods=["GET", "POST"])
def add_snack():
    """Snack add form; handle adding."""

    form = AddSnackForm()

    if form.validate_on_submit():
        name = form.name.data
        price = form.price.data
        flash(f"Added {name} at {price}")
        return redirect("/add")

    else:
        return render_template(
            "snack_add_form.html", form=form)
```
This validates submitted form *or* passes instance of form to template.

## Add-Form View:
*demo/templates/snack_add_form.html*
```html
<form id="snack-add-form" method="POST">
  {{ form.hidden_tag() }} <!--add type=hidden form fields -->

  {% for field in form
         if field.widget.input_type != 'hidden' %}

    <p>
      {{ field.label }}
      {{ field }}

      {% for error in field.errors %}
        {{ error }}
      {% endfor %}
    </p>

  {% endfor %}

  <button type="submit">Submit</button>
</form>
```
