# Boolean Operations - 
# And/Or/Not:
#   -> JS: '&&', '||', '!'
#   -> Python: 'and', 'or', 'not'
True and False  #=> False 
True and True  #=> True
True or False  #=> True
False or False  #=> False
not True  #=> False 
not False  #=> True
#-----------------
x = 102
x == 103 or x > 100  #=> True

age = 68
if age < 10 or age >= 65:
    print("Your ticket is $5") 
else:
    print("Your ticket is $10")

age = 40
not age == 40  #=> False 
not (age == 40)  #=> False 
