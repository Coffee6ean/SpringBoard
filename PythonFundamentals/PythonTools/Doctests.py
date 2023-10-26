# Docstrings & Doctests
# Doctests are snippets of interactive demonstration in a docstring
# Command to run tests: 'python3 -m doctest -v your-file.py'
# (use the 'doctest' module, verbosely showing tests found & run)
def bounded_avg(nums):
    """Return avg of nums (makes sure nums are 1-100)

        >>> bounded_avg([2,4,6])
        4.0
        >>> bounded_avg([10,20,30,40,50])
        30.0
        >>> bounded_avg([1, 2, 101])
        Traceback (most recent call last):
           ...
        ValueError: Outside bounds of 1-100
    """
    for n in nums:
        if n < 1 or n > 100:
            raise ValueError("Outside bounds of 1-100")

    return sum(nums) / len(nums)

# Why? Great way of documenting how your code works and easy to run 
# test-suite
# Command to see doc: help(bounded_avg)  //example