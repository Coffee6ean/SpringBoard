# DocTests -
# DocTests are awesome. “Testable documentation”/“Documented testing”
# 'doctest' module in Python standard library.

# Our Adder:
def adder(x, y):
    """Add two numbers together."""
    print("INSIDE ADDER!")
    return x + y

# Let’s try it out
"""
$ python
>>> from arithmetic import adder
>>> adder(1, 1)
2
>>> adder(-1, 1)
0
"""
def adder(x, y):
    """Adds two numbers together.

        >>> adder(1, 1)
        2

        >>> adder(-1, 1)
        0
    """

    return x + y

# Running DocTests:
"""
$ python -m doctest arithmetic.py
$ (nothing output for success)
"""

# Everything worked!
"""
$ python -m doctest -v arithmetic.py
Trying:
    adder(1, 1)
Expecting:
    2
ok
Trying:
    adder(-1, 1)
Expecting:
    0
ok
1 items had no tests:
    arithmetic
1 items passed all tests:
2 tests in arithmetic.adder
2 tests in 2 items.
2 passed and 0 failed.
Test passed.
"""

# Let’s Make it Fail
def adder(x, y):
    """Adds two numbers together.

        >>> adder(1, 1)
        2

        >>> adder(-1, 1)
        0
    """

    return x + y + 1  # this is wrong

# Running DocTests:
"""
$ python -m doctest arithmetic.py
  ***************************************************************
  File "arithmetic.py", line 10, in arithmetic.adder
  Failed example:
      adder(1, 1)
  Expected:
      2
  Got:
      3
  ***************************************************************
  File "arithmetic.py", line 15, in arithmetic.adder
  Failed example:
      adder(-1, 1)
  Expected:
      0
  Got:
      1
  ***************************************************************
  1 items had failures:
     2 of   2 in arithmetic.adder
  *Test Failed* 2 failures.
"""