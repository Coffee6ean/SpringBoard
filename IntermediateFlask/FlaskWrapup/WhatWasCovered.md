# Flask Wrap-Up -

## Flask Features:
A scalable, powerful, general-purpose web application framework.

### What We Covered
- Routes
- Jinja templates
- Flask-SQLAlchemy
- Flask Testing
- Cookies & Sessions
- JSON and flask
- Flask-WTForms

### What We Didn’t Cover
**url_for**
*you did this once…*
```py
@app.route("/users/<int:id>")
def user_profile(id): ...
```

*you did this a dozen places…*
```html
<**a** href="/users/{{ user.id }}">See user</**a**>
```

*and this in lots of places*
```py
**def** some_other_view():
    ...
    **return** redirect(f"/users/{user.id}")
```

What if you wanted to change that URL?
- Perhaps to ***/profiles/[user-id]*** ?
- Perhaps to ***/warbler/users/[user-ud]***?

*you still do this once…*
```py
**@app.route**("/users/<int:id>")
**def** user_profile(id): ...
```

*but now you don’t need to hardcode URL*
```html
<a href="{{ url_for('user_profile', id=user.id) }}">go</a>
```

​
*and this in lots of places*
```py
from flask import url_for

def some_other_view():
    ...
    redirect_url = url_for('user_profile', id=user.id)
    return redirect(redirect_url)
​
```

### Blueprints
Build “applications” in Flask:
- Each app can have own models, forms, tests, views
- Can re-use an app in many sites
    - Many sites could use “blogly” app
- Useful for larger/more complex sites

### Signals
“When [this thing] happens, do [this other] thing.”
(eg send an email when a user registers, no matter how they register)

### Lots of Jinja Stuff
Lots of additional features in Jinja:
- sharing parts of templates/repeated code
- formatting of numbers, dates, lists in the template
- caching parts of templates (“this part only changes every 5 mins”)
- and more!