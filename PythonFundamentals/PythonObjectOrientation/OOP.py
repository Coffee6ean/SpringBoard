# Python Object Orientation -
# OO Review:
# - class: blueprint for new objects, defines attributes & methods
# - method: function defined on class, can see/change attributes on 
#   instance
# - class method: function defined on class, called on class, not 
#   individual instance
from  collections import Counter

help(Counter)
my_counter = Counter('OOMPA LOOMPA')
my_counter  #=> Counter({'O': 4, 'M': 2, 'P': 2, 'A': 2, ' ': 1, 'L': 1})
type(my_counter)  #=> collections.Counter
isinstance(my_counter, Counter)  #=> True
my_counter.most_common()  #=> [('O', 4), ('M', 2), ('P', 2), ('A', 2), (' ', 1), ('L', 1)]
#------------------
# Functions that are classes, so the result is an instance of the class
list('ansonan')  #=> ['a', 'n', 's', 'o', 'n', 'a', 'n']
#------------------
from datetime import date

my_date = date(2023, 2, 14)
my_date.day  #=> 14
my_date.year  #=> 2023
my_date.weekday()  #=> 1


# Instances: 
# Like in JS, you make an instance by calling the class:
from collections import Counter

# make instance of a counter
counts = Counter("hello world")
type(counts)  #=> 'collections.Counter'
isinstance(counts, Counter)  #=> True
isinstance('anso', str)  #=> True

# Get/set attributes or find methods with. (like JS):
# get most common letter
counts.most_common(1)

# JavaScript:
# - get/set attribute of object: `o.name` *or* `o['name']`
# - call method: `o.method()` *or* `o['method']()`
# 
# Python:
# - get/set attribute of object: `o.name`
# - call method: `o.method()`
# - retrieve value from dictionary: `o['my-key']`
#     - not the same thing!

# What Can I Do With This Object?
# - help(obj): Show help about object and methods
# - dir(obj): List methods/attributes of object