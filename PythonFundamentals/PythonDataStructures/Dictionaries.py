# Dictionaries -
# Mutable, ordered mapping of keys -> values
# 'O(1)' runtime for adding, retrieving, deleting items (like JS object 
# or Map)

# Making Dictionaries:
# - Values can be any type
# - Keys can be any immutable type
fruit_colors = {
    "apple": "red",
    "berry": "blue",
    "cherry": "red",
}
# Valid
stuff = {
    True: 34,
    'random': [1,2,3],
    100: 'Awesome'
}
# Invalid //TypeError
stuff = {
    True: 34,
    [1,2,3]: 'random',
    100: 'Awesome'
}

# Memebership and Retrieval:
# - 'in' checks for membership of key (`"apple" in fruit_colors`)
# - `[]` retrieves item by key (`fruit_colors['apple']`)
#     - Cannot use dot notation, though (no `fruit_colors.apple`)
#     - Failure to find is 'error' (can say `.get(x, default)`)

'apple' in fruit_colors  #=> True
fruit_colors["apple"]  #=> 'red'
stuff.get(True)  #=> 34
stuff.get('new_value', 17)  #=> 17
#------------------
dict()  #=> {}
dict([[True, 0], [False, 1]])  #=> {True: 0, False: 1}