# Sets - 
# Unordered, unique collection of items, like JS 'Set'
# 'O(1)' runtime for adding, retrieving, deleting
# Any immutable thing can be put in a set.

# Making Sets:
# Use '{}', but with only keys, not 'key: value'
colors = {"red", "blue", "green"}
type(colors)  #=> set

colors = {"red", "blue", "green", "blue"}
colors  #=> {'blue', 'green', 'red'}

# Can use constructor function to make set from iterable:
voted_languages = ['ruby', 'python', 'javascript', 
                   'scala', 'ruby', 'python', 'python', 'scala']
set(voted_languages)   #=> {'javascript', 'python', 'ruby', 'scala'}
set("apple")  #=> {"a", "p", "l", "e"}
#------------------
things = {2, 'snake', 'mario', True, [1,2,3]}
set(things)  #=> TypeError

other_things = {2, 'snake', 'mario', True}
set(other_things)  #=> {2, True, 'mario', 'snake'}