# Registering and Logging In -

## User Class:
_demo/badpassword/models.py_
```py
class BadUser(db.Model):
    "Site user."

    __tablename__ = "bad_users"

    id = db.Column(db.Integer, 
                   primary_key=True, 
                   autoincrement=True)

    username = db.Column(db.Text, 
                         nullable=False, 
                         unique=True)

    password = db.Column(db.Text, 
                         nullable=False)
```

### Registration
_demo/badpassword/app.py_
```py
@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user: produce form & handle form submission."""

    form = RegisterForm()

    if form.validate_on_submit():
        name = form.username.data
        pwd = form.password.data

        user = BadUser(username=name, password=pwd)
        db.session.add(user)
        db.session.commit()

        # on successful login, redirect to secret page
        return redirect("/secret")

    else:
        return render_template("register.html", form=form)
```

### Login
_demo/badpassword/app.py_
```py
@app.route("/login", methods=["GET", "POST"])
def login():
    """Produce login form or handle login."""

    form = LoginForm()

    if form.validate_on_submit():
        name = form.username.data
        pwd = form.password.data

        user = BadUser.query.filter_by(username=name).first()

        if user and user.password == pwd:
            # on successful login, redirect to secret page
            return redirect("/secret")

        else:
            # re-render the login page with an error
            form.username.errors = ["Bad name/password"]

    return render_template("login.html", form=form)
```

### Database
**`SELECT** * **FROM** bad_users;`

| username | password     |
| -------- |:------------:|
| rita     | squid-13     |
| roger    | meeples4ever |

### Plaintext Passwords
- Access to database allows access to all passwords!
- People use same passwords for multiple sites
- Don’t ever do this! [Useful discussion](https://stackoverflow.com/questions/2283937/how-should-i-ethically-approach-user-password-storage-for-later-plaintext-retrie) about this