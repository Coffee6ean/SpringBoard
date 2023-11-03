# Breaking Down Code -

# Intermixed Concerns:
# How do we test this?
@app.route('/taxes', methods=['POST'])
def taxes():
    """Calculate taxes from web form."""

    income = request.form.get('income')

    # Calculate the taxes owed
    owed = income / 45.3 * random.randint(100) / other_stuff

    return render_template("taxes.html", owed=owed)

# Breaking Down Code:
# Very often, you’ll want to separate web interface from logic
def calculate_taxes(income):
    """Calculate taxes owed for this income."""

    ...

@app.route('/taxes', methods=['POST'])
def taxes():
    """Calculate taxes from web form."""

    income = request.form.get('income')
    owed = calculate_taxes(income)

    return render_template("taxes.html", owed=owed)

# How Many Tests??
# - Ask yourself: is there too much logic in your view function?
# - When you test, you don’t need one assertion per test function
# - Remember to test failing things, like forms that don’t validate

# Organizing / Running Tests:
# Small Projects:
# For small projects, keep tests in one file, 'tests.py':
"""
├── app.py
├── requirements.txt
└── tests.py
"""

# Run them like this:
"(venv) $ python -m unittest"

# Larger Projects:
# For more complex projects, organize in files named 'test_something.py':
"""
├── app.py
├── requirements.txt
├── test_cats.py
└── test_dogs.py
"""

# Run all of them like this:
"(venv) $ python -m unittest"

# Can also run individual files / cases / test methods:
"""
(venv) $ python -m unittest test_cats
(venv) $ python -m unittest test_cats.CatViewTestCase
(venv) $ python -m unittest test_cats.CatViewTestCase.test_meow
"""