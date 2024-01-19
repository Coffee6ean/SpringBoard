from unittest import TestCase
from algorithms import reverse_str, isPalindrome, factorial

#-------------------#
class AlgorithmsTestCase(TestCase):
    def test_reverse(self):
        self.assertEqual(reverse_str('Cat'), 'taC')
        self.assertEqual(reverse_str('hello'), 'olleh')

    def test_is_palindrome(self):
        self.assertTrue(isPalindrome('racecar'))
        self.assertTrue(isPalindrome('kayak'))
        self.assertFalse(isPalindrome('taco'))
        #Should ignore casing
        self.assertTrue(isPalindrome('Racecar'))
        self.assertFalse(isPalindrome('Taco'))

    def test_factorial(self):
        self.assertEqual(factorial(5), 120)
        self.assertEqual(factorial(3), 6)
        self.assertRaises(ValueError, factorial, -5)
        self.assertRaises(ValueError, factorial, 4.3)
    
