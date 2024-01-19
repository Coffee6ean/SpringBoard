# Comprehensions -
# Python has 'filter()' and 'map()', like JS. But *comprehensions* are 
# even more flexible
# Logic: '[what_to_append 'for' thing 'in' list]'

nums = [1,2,3,4,5,6,7,8,9,10,11,12,13]

def even_numbers(arr):
    evens = [num for num in arr if num % 2 == 0]
    return evens

even_numbers(nums)  #=> [2, 4, 6, 8, 10, 12]
#------------------
def double_numbers(arr):
    doubles = [num * 2 for num in arr]
    return doubles

double_numbers(nums)  #=> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26]
#------------------
[char for char in 'lmfao']  #=> ['l', 'm', 'f', 'a', 'o']
[char.upper() for char in 'lmfao']  #=> ['L', 'M', 'F', 'A', 'O']
#------------------
[num for num in range(10,20)]  #=> [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

# Mapping into List:
# Intead of this:
#   -> evens = []
#      
#      for num in nums:
#          if num % 2 == 0:
#              evens.append(num)
#
# You can say this:
#   -> evens = [num for num in nums if num % 2 == 0]
[[] for x in range(3)]  #=> [[], [], []]
[[0 for x in range(3)] for x in range(3)]  #=> [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

def gen_board(size, initial_val = None):
    return [[initial_val for x in range(size)] for y in range(size)]

gen_board(3)
gen_board(5, False)
#------------------
[x for x in range(10)]  # Equivalent to 'map' in JS
[x for x in range(10) if x % 2 == 0]  # Equivalent to 'filter' in JS
#------------------
chickens = [
    {"name": 'Henry', "sex": 'Rooster'},
    {"name": 'Lady Gray', "sex": 'Hen'},
    {"name": 'Junior', "sex": 'Rooster'},
    {"name": 'Stieve Chicks', "sex": 'Hen'},
    {"name": 'Rocket', "sex": 'Hen'},
    {"name": 'Butters', "sex": 'Rooster'},
]

hens = [bird['name'] for bird in chickens if bird['sex'] == 'Hen']
#=> ['Lady Gray', 'Stieve Chicks', 'Rocket']

scores = [55,89,99,87,60,70,74,76,90,82]
# Logic: '[do_this 'if' something 'else' do this 'for' thing 'in' things]'
grades = ['Pass' if score >= 70 else 'Fail' for score in scores]
#=> ['Fail','Pass','Pass','Pass','Fail','Pass','Pass','Pass','Pass','Pass']
#------------------
# Super Flexible:
# Can make lists via comprehensions from any kind of iterable:
vowels = {"a", "e", "i", "o", "u"}
word = "apple"

vowel_list = [ltr for ltr in word if ltr in vowels]
#Can make “dictionary comprehensions” and “set comprehensions”:
evens_to_doubled = {n: n * 2 for n in nums if n % 2 == 0}

words = ["alba", 'orchid', 'horchata', 'arco', 'reno']
a_words = {w for w in words if w.startswith("a")}