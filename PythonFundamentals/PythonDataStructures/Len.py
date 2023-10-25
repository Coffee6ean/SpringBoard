# Length of Structure - 
# Generic 'len(x)' returns length of x:
#   - number of chars in string
#   - number of items in list
#   - number of items in dictionary
#   - number of items in a set
# 'len()' in Python is a function, unlike JS where '.lenght' is a property

# We can obtain the length of a structure using '__len__()', however this
# is not the convention
"hello world".__len__()  #=> 11
#------------------
len("Hello World")  #=> 11
len([])  #=> 9
len([1,2,3,4,4,4,4])  #=> 7
