# Python Ranges -
range(9)  #=> range(0,9)

for num in range(9):
    print(num) 
# 1
# 2
# 3
# ...
#Natural step of +1
list(range(10))  #=> [0,1,2,3,4,5,6,7,8,9]

list(range(5, 10))  #=> [5,6,7,8,9]

list(range(-100, 0))  #=> [-100, -99, ..., -1]

list(range(2,12,2))  #=> [2,4,6,8,10]

list(range(10,0))  #=> []