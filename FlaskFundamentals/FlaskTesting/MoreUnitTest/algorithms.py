def reverse_str(s):
    """Returns reverse of input string (s)"""
    return s[::-1]

def isPalindrome(s):
    """Boolean method to check wheter a given string is a palindrome"""
    rev = reverse_str(s)
    return s == rev.lower()

def factorial(n):
    if not (isinstance(n, int) and n >= 0):
        raise ValueError("'n' must be a non-negative integer")
    if n == 0:
        return 1
    
    result = 1
    for i in range(2, n+1):
        result *= i
    
    return result