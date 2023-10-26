# Packing and Unpacking -
# Similar to rest and spread (destructuring) in JS
names = ['charlie', 'lucy']
name1, name2 = names
name1  #=> 'carlie'
#-----------------
point = (100, 58)
x,y = point

# Can gather rest using * before variable:
sorted_scores = [2400, 2350, 2100, 1960]
top_score, *scores = sorted_scores
top_score  #=> 2400
scores  #=> [2350, 2100, 1960]
#-----------------
first_name = 'Xander'
initial, *rest = first_name
initial  #=> 'X'
rest  #=> ['a', 'n', 'd', 'e', 'r']
#-----------------
other_point = (40, 50, 20)
x,y,z = other_point
# What Python does behind the curtain, is assign values in a tuple to 
# another, like so: (x, y, z) = (40, 50, 20)
#-----------------
color_pairs = [['red', 'green'], ['purple', 'orange']]
pair1, pair2 = color_pairs
pair1  #=> ['red', 'green']

((primary1, secondary1), (primary2, secondary2)) = color_pairs
primary1  #=> 'red'
secondary2  #=> 'orange'
#-----------------
grades = {
    'A': 12,
    'B': 19,
    'C': 30
}

for pair in grades.items():
    print(pair)
#=> 
"""
('A', 12)
('B', 19)
('C', 30)
"""
for (k, v) in grades.items():
    print(k, v)
#=>
"""
A 12
B 19
C 30
"""