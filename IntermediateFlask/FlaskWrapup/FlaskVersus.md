# Flask Vs 'The World' -

### Flask v Node-Express
Pretty similar, actually.
Both work at same “level of concepts”, and share lots of ideas.
You can even use Jinja to make templates with Express!

### Flask v Django
Django is a popular, larger, more featureful Python Framework.
It’s a *higher level* and *more opinionated*

*Flask **model.py***
```python
class Pet(db.Model):
    id = ...
    name = ...
    color = ...
    owner_id = ...

    owner = db.relationship("Owner", backref="pets")
```

*Django **model.py***
```python
class Pet(models.Model):
    name = ...
    color = ...
    owner = models.ForeignKey("Owner")

    # assumes "id" of auto-incrementing int# defines relationship & make "owner_id" column
```

*Flask **app.py***
```py
@app.route("/pets/<int:id>/edit", methods=["GET", "POST"])
def edit_pet(id):
    """Show pet edit form / handle edit."""
    pet = Pet.query.get(id)

    form = PetEditForm(obj)   # need to make form!if form.validation_on_submit():
        pet.name = form.name.data
        pet.color = form.color.data
        db.session.commit()
        redirect(f"/pets/{id}")

    return render_template("pet_edit.html", form=form)
```

*Django **views.py***
```py
class PetEditView(generic.UpdateView):
    """Show pet edit form / handle edit."""
    model = Pet
​
```

**So, is Django “better”?**
Nope.
If you like Django’s patterns & they fit your use cases, you can build an app faster by following those patterns.
But:
- they take a longer amount of time to learn
- if things break, it can be harder to understand
- if you want to change how things work, it can be harder
Flask is like a really nice bicycle:
It’s great for easy trips, can scale up to long journeys, isn’t too opinionated about where you use it, and it’s relatively easy to understand and fix.