# Python Standard Library and Importing -
# Python includes a “standard library” of dozens of useful modules.
# These are not in the namespace of your script automatically.
# You have to 'import' them.
# 
# 'choice(seq)' is a useful function: given a sequence, it returns a 
# random item.
import math
math.ceil(10.7)  #=> 11
#------------------
from random import choice
choice([4,6,8,10])
choice('abcdefg')

from random import randint
randint(10,20)
#------------------
from statistics import mean, median

mean([2,3,4,5,6,7])
median([2,3,4,5,6,7])