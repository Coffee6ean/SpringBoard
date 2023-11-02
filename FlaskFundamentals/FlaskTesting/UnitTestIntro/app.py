# Python unittest module -
# **unittest module**
# Unit testing via classes! In the Python standard library.

# demo/test_arithmetic.py
import arithmetic
from unittest import TestCase

class AdditionTestCase(TestCase):
    """Examples of unit tests."""

    def test_adder(self):
        assert arithmetic.adder(2, 3) == 5

# - Test cases are a bundle of tests
#     - In a class that subclasses `TestCase`
#     - Test methods **must** start with `test_`
# - `python -m unittest NAME_OF_FILE` runs all cases

# TestCase assertions:
# *demo/test_arithmetic.py*
class AdditionTestCase(TestCase):
    """Examples of unit tests."""

    def test_adder(self):
        assert arithmetic.adder(2, 3) == 5

    def test_adder_2(self):
        # instead of assert arithmetic.adder(2, 2) == 4
        self.assertEqual(arithmetic.adder(2, 2), 4)

# Provides better output, including expected value.

#   Method                   |    Checks that
# -------------------------------------------------
# assertEqual(a, b)          |   a == b
# assertNotEqual(a, b)       |   a != b
# assertTrue(x)              |   bool(x) is True
# assertFalse(x)             |   bool(x) is False
# assertIs(a, b)             |   a is b
# assertIsNot(a, b)          |   a is not b
# assertIsNone(x)            |   x is None
# assertIsNotNone(x)         |   x is not None
# assertIn(a, b)             |   a in b
# assertNotIn(a, b)          |   a not in b
# assertIsInstance(a, b)     |   isinstance(a, b)
# assertNotIsInstance(a, b)  |   not isinstance(a, b)

# DocTest or unittest Class?
# - DocTests keep tests close to code
#     - Too many tests can drown out code
# - 'unittest' classes good for when you have lots of tests
#     - Or interesting hierarchies of tests