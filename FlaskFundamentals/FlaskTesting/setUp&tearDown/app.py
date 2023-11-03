# 'setUp' and 'tearDown' -
# 'setUp' and 'tearDown' methods are called before/after *each test*.
class FlaskTests(TestCase):

  def setUp(self):
      """Stuff to do before every test."""

  def tearDown(self):
      """Stuff to do after each test."""

  def test_1(self):
      ...

  def test_2(self):
      ...
# Runs, in order: 'setUp', 'test_1', 'tearDown' 'setUp', 'test_2', 'tearDown'
# Often useful to add/remove data in test database before/after each test

# Making Testing Easier:

#Add these before test case classes:
#*demo/test_app.py*
# Make Flask errors be real errors, not HTML pages with error info
app.config['TESTING'] = True

# This is a bit of hack, but don't use Flask DebugToolbar
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']