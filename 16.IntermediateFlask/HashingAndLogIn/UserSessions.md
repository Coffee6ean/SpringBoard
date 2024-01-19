# User Sessions -

### How Do We Remember a Logged In User?
When they sign up or authenticate, store their user_id in the session:
_demo/goodpassword/app.py_
```py
@app.route("/login", methods=["GET", "POST"])
def login():
    """Produce login form or handle login."""

    form = LoginForm()

    if form.validate_on_submit():
        name = form.username.data
        pwd = form.password.data

        # authenticate will return a user or False
        user = User.authenticate(name, pwd)

        if user:
            session["user_id"] = user.id  # keep logged in
            return redirect("/secret")

        else:
            form.username.errors = ["Bad name/password"]

    return render_template("login.html", form=form)
```

### Keeping a User Logged In
Anywhere: you can check if ***user_id*** is in session:
_demo/goodpassword/templates/index.html_
```python
{% if 'user_id' in session %}
    <li><a href="/logout">Logout</a></li>
    <li><a href="/secret">Secret</a></li>
  {% endif %}
```

### Ensuring That User Is Authenticated
On any “protected” or “secret” route…
_demo/goodpassword/app.py_
```python
@app.route("/secret")
def secret():
    """Example hidden page for logged-in users only."""

    if "user_id" not in session:
        flash("You must be logged in to view!")
        return redirect("/")

        # alternatively, can return HTTP Unauthorized status:
        #
        # from werkzeug.exceptions import Unauthorized
        # raise Unauthorized()

    else:
        return render_template("secret.html")
```

### Logging Out
Just remove user_id from the session!
_demo/goodpassword/app.py_
```py
@app.route("/logout")
def logout():
"""Logs user out and redirects to homepage."""session.pop("user_id")

return redirect("/")
```
