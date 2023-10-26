def multiply_even_numbers(nums):
    """Multiply the even numbers.
    
        >>> multiply_even_numbers([2, 3, 4, 5, 6])
        48
        
        >>> multiply_even_numbers([3, 4, 5])
        4
        
    If there are no even numbers, return 1.
    
        >>> multiply_even_numbers([1, 3, 5])
        1
    """
    even_numbers_list = [even for even in nums if even % 2 == 0]
    result = 1
    if len(even_numbers_list) > 0:
        for num in even_numbers_list:
            result *= num
        return result
    else:
        return result
    
