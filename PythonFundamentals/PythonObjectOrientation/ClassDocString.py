# Documenting Classes - 
# As always, good style to have comment explaining purpose of class & 
# methods:
import math 
from random import randint

class Triangle:
    """
    A class used to represent a right triangle

    Attributes
    -----------------
    a: int - length of side a
    b: int - length of side b
    """

    def __init__(self, a, b):
        "Create triangle from a and b sides"
        self.a = a
        self.b = b

    def __repr__(self):
         return f"<Triangle(a = {self.a}, b = {self.b})>"
    
    def __str__(self):
         return self.describe()

    def __eq__(self, other):
         return self.a == other.a and self.b == other.b
    
    @classmethod
    def random(cls):
        "Class method which returns triangle with random sides"
        #print(cls)
        return cls(randint(1,20), randint(1,20))

    def get_hypotenuse(self):
        "Get hypotenuse (length of 3rd side)"
        return math.sqrt(self.a ** 2 + self.b ** 2)

    def get_area(self):
        "Get area of triangle"
        return (self.a * self.b) / 2

    def describe(self):
        "Returns string representing triangle"
        return f"My area is {self.get_area()}"

# Dunder Methods:
# When you print an instance/examine in Python shell, often not helpful:
"""
>>> tri = Triangle(3, 4)

>>> tri
<__main__.Triangle object at 0x1012a6358>
"""
# Would be nicer to see values for 'a' and 'b'
# We can do this by making a '__repr__' *(representation)* method:
def __repr__(self):
        return f"<Triangle a={self.a} b={self.b}>"

#=>
"""
>>> tri = Triangle(3, 4)

>>> tri
<Triangle a=3 b=4>
"""