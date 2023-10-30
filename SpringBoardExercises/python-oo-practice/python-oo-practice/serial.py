"""Python serial number generator."""
class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self, start = 100) -> None: 
        self.origin = start
        self.start = start
        
    def get_val(self):
        return self.start
    
    def generate(self):
        self.start += 1
        return self.start
    
    def reset(self):
        self.start = self.origin


