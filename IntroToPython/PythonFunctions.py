# Functions -
#   -> def add_numbers(a, b):
#         sum = a + b
#         print("math")
#         return sum
# Functions that don't explicitly 'return' return 'None'
def greet(person):
    return f"Hello there, {person}"

def divide(a, b):
    if type(a) is int and type(b) is int:
        return a/b
    return "a and b must be integers"