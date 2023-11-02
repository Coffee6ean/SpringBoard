# Unit Tests -
# - Test one “unit” of functionality
#     - Typically, one function or method
# - Don’t test integration of components
#     - Don’t test framework itself *(eg, Flask)*
# - Promote modular code
#     - Write code with testing in mind

# You Can Do This By Hand
def adder(x, y):
    """Add two numbers together."""
    print("INSIDE ADDER!")
    return x + y


assert adder(2, 5) == 7
assert adder(2, 7) == 10, "expected 2+7 to be 10"
assert adder(2, 3) == 5

print("HELLO WORLD!")

# - 'assert' raises 'AssertionError' if expression is False
# - Can provide optional exception message
# - Code exits as soon as an exception is raised