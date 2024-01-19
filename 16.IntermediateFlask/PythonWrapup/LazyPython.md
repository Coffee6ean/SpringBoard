# Python Can Be Lazy -

*this works great…*
```py
def find_liked_num(nums):
    """Prompt user until they like a number."""
    for num in nums:
        if input(f"Do you like {num}? ") == 'y':
            return num
```

*works great for this…*
```py
find_liked_num([1, 3, 4, 8])
```

*If we wanted to do that for “all even numbers” …*
```py
find_liked_num([2, 4, 6, 8, ...])
```

### Laziness Through *yield*
*we can do this …*
```py
def evens(start):
    """Yield even numbers starting at start."""
    while True:
        yield start
        start = start + 2
```

*then we can do this…*
```py
find_liked_num(evens(start=8))
```
***yield*** is like “return this value now, and remember where it left off”

### Laziness Is Good
It’s nice to be able to loop over data …
- even if it’s infinite (like all even numbers)
- or it’s just too huge to hold in memory
- or it’s expensive to pre-calculate when you might only need some

A lot of big-data stuff relies on this
There are even lazy list comprehensions: *generator expressions*

## Operator Overloading:
In both JS and Python, some operators (like `+`) mean different things, depending on the types of objects being acted on:

*JavaScript*
```jsx
3 + 5  // 8
"hello " + "Whiskey"  // "hello Whiskey"*
```

*Python*
```python
3 + 5    # 8
"hello " + "Whiskey"  # "hello Whiskey"*
```
In Python, you can “overload” an operator in a custom class: that operator can mean something different, and you can control that

## Case-Insensitive Strings:
_demo/cistr.py_
```py
class CIString(str):
    """
    Subclass of string that is case-insensitive.        
    >>> CIString("apple") == CIString("Apple")        
    True        
    >>> CIString("apple") < CIString("Banana")        
    True    
    """
    
    def __eq__(self, other):
        "Is self == other?"
        return self.lower() == other.lower()

    def __lt__(self, other):
        "Is self < other?"
        return self.lower() < other.lower()

    def __le__(self, other):
        "Is self <= other?"
        return self.lower() <= other.lower()
```

