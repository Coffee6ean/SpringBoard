# Tuples -
# Immutable, ordered sequence (like a list, but immutable)
# What are these good for?
# Slightly smaller, faster than lists. Since they're immutable, they can be
# used as directory keys or put into sets

# Making Tuples:
t1 = (1, 2, 3)
t2 = ()  #=> empty tuple
t3 = (1,)  #=> one-item tuple: note trailing comma
#------------------
colors = ('red', 'blue', 'yellow')
type(colors)  #=> tuple
colors[0] = 'RED'  #=> TypeError
#------------------
ids = [1, 12, 44]
t_of_ids = tuple(ids)
#------------------
chicken = {
    'color': 'grey',
    'breed': 'Rooster'
}

chicken.items()  #=> dict_items([('color', 'grey'), ('breed', 'Rooster')])

for (k,v) in chicken.items():
    print(k,v)

#------------------
board = {
    (0,0): 'X',
    (0,1): None,
    (0,2): '0',
    (1,0): 'X',
    (1,1): '0',
}

board[(0,0)]  #=> 'X'
#------------------
(1,2,3,1,2,1).count(1)  #=> 3
(1,2,3,1,2,1).index(3)  #=> 2