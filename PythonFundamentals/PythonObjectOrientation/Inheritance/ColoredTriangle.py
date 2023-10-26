# Like in JS, classes can subclass other objects:
from Triangle import Triangle

class ColoredTriangle(Triangle):
    def __init__(self, a, b, color):
        super().__init__(a, b)
        self.color = color
    
    def describe(self):
        msg = super().describe()
        return msg + f"My color is: {self.color}"

# Super -
# Like in JS, 'super' finds parent class:
# - JS: `super` is parent, `super(...)` calls parent constructor function
# - Python: `super()` is parent, `super().__init__(...)` is parent initializer

# Multi-Level Inheritance: 
# Like in JS, you can have multiple levels of inheritance.
