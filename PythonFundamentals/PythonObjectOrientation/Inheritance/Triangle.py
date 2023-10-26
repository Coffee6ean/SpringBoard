import math 
from random import randint

class Triangle:
    "Right triangle."
    def __init__(self, a, b):
        "Create triangle from a and b sides."
        self.a = a
        self.b = b
    
    @classmethod
    def random(cls):
        #print(cls)
        return cls(randint(1,20), randint(1,20))

    def get_hypotenuse(self):
        "Get hypotenuse (length of 3rd side)."
        return math.sqrt(self.a ** 2 + self.b ** 2)

    def get_area(self):
        "Get area of triangle."
        return (self.a * self.b) / 2

    def describe(self):
        return f"My area is {self.get_area()}"

