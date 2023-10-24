#Numbers - 
# Very much like JavaScript
# - Separate types for integers (can be any size) or floating-point
#   - In JS, there are only floating-point numbers
#   - Separate type for complex numbers 
# - +,-,*,/ (true division), // (integer division)
# - % (modulo: remainder after division)
# - Dividing by zero is an error (JS: is 'Infinity', except 0/0, which is 'NaN')

type(5)  #=> int
type(5.0)  #=> float
#-----------------
complex(3,32)  #=> (3+32j)
complex_num = complex(3, 32)
type(complex_num)  #=> complex
#-----------------
3*6-1+3*2  #=> 23
2/5  #=> 0.4
2//5  #=> 0
10%3  #=> 1
#-----------------
int(4.222223)  #=> 4
float(3)  #=> 3.0
#-----------------
pow(3, 2)  #=> 9
round(3.14159)  #=> 3
round(3.14159, 4)  #=> 3.1416
#-----------------
4.56.is_integer()  #=> False
4.000.is_integer()  #=> True