# Lists -
# Like JS arrays:
#   - Mutable, ordered sequence
#   - 'O(n)' to search, add, delete
#       - Except when at end: O(1)
#
# Making Lists:
#   -> alpha = ['a', 'b', 'c']
#
# Or, we can use cunstructor function, 'list()'
# This will make list from iterating over argument:
#   -> letters = list("apple") 
#   => ['a', 'p', 'p', 'l', 'e']   
 
scores = [45,89,87,23,100]  #=> [45, 89, 87, 23, 100]
list('hello')  #=> ['h', 'e', 'l', 'l', 'o']
list(range(10,20,2))  #=> [10, 12, 14, 16, 18]
#------------------
vegan_no_nos = ['eggs', 'meat', 'milk', 'fish', 'figs']
pie_ingredients = ['flour', 'apples', 'sugar', 'eggs', 'salt']
for food in pie_ingredients:
    if food in vegan_no_nos:
        print(f"Cannot eat {food}, it's not vegan")
    else:
        print(f"yum, I love {food}")

# Retrieving By Index:
# Can retrieve/mutate item with '[n]'
fav_foods = ['taco', 'pasta', 'pizza', 'burger']
print(fav_foods[0])  #=> 'taco'
print(fav_foods[5])  #=> IndexError
print(fav_foods[-1])  #=> 'burger'
fav_foods[2] = "soup"  #=> ['taco', 'pasta', 'soup', 'burger']
copy = fav_foods
copy[0] = "EGSSSS"  #=> ['EGSSSS', 'pasta', 'soup', 'burger']