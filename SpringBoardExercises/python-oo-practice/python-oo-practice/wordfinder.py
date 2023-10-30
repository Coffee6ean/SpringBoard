"""Word Finder: finds random words from a dictionary."""
import random

class WordFinder:
    def __init__(self, path) -> None:
        dict_file = open(path)
        self.words = self.read_file(dict_file)
        print(f'{len(self.words)} words read')
    
    def read_file(self, file):
        """Parse dict_file -> list of words."""
        return [word for word in file]
    
    def random(self):
        """Return random word."""
        return random.choice(self.words)


