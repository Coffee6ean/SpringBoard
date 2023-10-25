#Variables-
# - Python variable name style is 'like_this' (lower-snake-case)
# - There is no keyword for declaring variables; i.e, no 'let' or 'var'
# - No specific way to make un-re-bindable like 'const'
#   - It's good style to write constants 'LIKE-THIS'
# - Lexical function scoped:
#   -> x = 42
#      def my_function(): 
#         x = 12
#         print(x)  => 12
#      print(x)     => 42
chickens = 13; # => chickens 
               #    13
chickens = 20; # => chickens
               #    20
num_chickens = 511151  # => num_chickens
                       #    511151

