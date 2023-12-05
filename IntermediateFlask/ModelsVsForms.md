# Models vs Forms -

- SQLAlchemy provides model: class for logical object
- WTForm provides form class
- A single model may have different forms
    - Not all fields on add form might appear on edit form
    - Different validation might apply on add/edit
    - Different kinds of users (public v admin) have different fields
You’ll often take the result of a form and create/edit an SQLAlchemy object.

## Field Types:
| Field Type                  | Description                            |   
| ----------------------------|:--------------------------------------:|    
| BooleanField                | Normally appears as a checkbox         |   
| DateField / DateTimeField   | Numeric types                          |   
| IntegerField / FloatField   | Marketing                              |   
| StringField / TextAreaField | Single line of text / larger text area | 

## Selection From Choices:
| Field Type           | Description                               |   
| ---------------------|:-----------------------------------------:|    
| RadioField           | Series of radio buttons from **choices**  |   
| SelectField          | Drop-down menu from **choices**           |   
| SelectMultipleField  | Multi-select box from **choices**         |   

```js
weather = SelectField('Weather',
  choices=[('rain', 'Rain'), ('nice', 'Nice Weather')]
)
```

To convert result to integer:
```js
priority = SelectField('Priority Code',
  choices=[(1, 'High'), (2, 'Low')],
  coerce=int
)
```

Can set dynamic choices:
_forms.py_
```python
class AddFriendForm(FlaskForm):
    """Form to pick a friend."""

    friend = SelectField("Friend", coerce=int)
```

_app.py_
```python
@app.route("/get-friend")
def handle_friend_form():
    """Handle the add-friend form."""

    form = AddFriendForm()

    # get current list of users
    users = [(u.id, u.name) for u in User.query.all()]

    # dynamically set friend choices
    form.friend.choices = users
```

# Validation - 
WTForm provides “validators”:
_demo/forms.py_
```python
from wtforms.validators import InputRequired, Optional, Email
```

_demo/forms.py_
```python
class UserForm(FlaskForm):
    """Form for adding/editing friend."""

    name = StringField("Name",
                       validators=[InputRequired()])
    email = StringField("Email Address",
                        validators=[Optional(), Email()])
```
See https://wtforms.readthedocs.io/en/2.3.x/validators/

# Update Forms -

_demo/app.py_
```python
@app.route("/users/<int:uid>/edit", methods=["GET", "POST"])
def edit_user(uid):
    """Show user edit form and handle edit."""

    user = User.query.get_or_404(uid)
    form = UserForm(obj=user)

    if form.validate_on_submit():
        user.name = form.name.data
        user.email = form.email.data
        db.session.commit()
        flash(f"User {uid} updated!")
        return redirect(f"/users/{uid}/edit")

    else:
        return render_template("user_form.html", form=form)
```

Passing `obj=data-obj` provides form with defaults from object

