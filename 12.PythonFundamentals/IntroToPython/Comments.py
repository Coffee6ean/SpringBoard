# Comments and docstrings - 
# - '#' rest of line is comment (use to explain complex code)
# - String as very first thing in file/function is "docstring"
#     - Use to document what the function/file does
#     - Shown when you ask for 'help(some_function)'
# Example:
def add_limited_numbers(a, b):
   """Add two numbers, making sure sum caps at 100"""
   sum = a + b
   
   #If this required explenation, comment like this
   if sum > 100:
     sum = 100
   return sum

# Help Commands - 
# - dir(): Show me the methods and attributes of this object
#     -> dir([])
#     => ['__add__', 'append', 'count', 'extend', 'index', 'insert', 
#         'pop', 'remove', 'reverse', 'sort']
# - help(): Show me help about how to use this object
#     -> help([])