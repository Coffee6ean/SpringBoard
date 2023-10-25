# List Methods - 
# Core API:
#   - l.append(x): Add 'x' to end of the list
#   - l.copy(): Return a shallow copy of list 'l'
#   - l.count(x): Return number of times 'x' appears in 'l'
#   - l.extend(l2): Add items of 'l2' to 'l' 
#   - l.index(x): Return (0-based) index of 'x' in'l'
#   - l.insert(i, x): Insert 'x' at position 'i'
#   - l.pop(i): Remove and return item at 'i' (default last)
#   - l.reverse(): Reverse list (change in place)
#   - l.sort(): Sort list in place

# Functions that mutate list return 'None', not data
chickens = ['roasted', 'fried', 'nuggets']
len(chickens)  #=> 3
chickens.append('seasoned')  #=> ['roasted', 'fried', 'nuggets', 'seasoned']
chickens.append('deep fried', 'boiled')  #=> TypeError
#------------------
copy_chickens = chickens
copy_chickens.append("seared") 
# 'copy_chickens' && 'chickens' => ['roasted', 'fried', 'nuggets', 'seasoned', 'seared']
copy_chickens_second = chickens.copy()
# 'copy_chickens' => ['roasted', 'fried', 'nuggets', 'seasoned', 'seared']
copy_chickens_second is chickens  #=> False
chickens.append('baked')
copy_chickens_second  #=> ['roasted', 'fried', 'nuggets', 'seasoned', 'seared']
#------------------
chickens.count('fried')  #=> 1
chickens.append('fried')  
chickens.count('fried')  #=> 2
chickens.count('rooster')  #=> 0
#------------------
chicks = ['shredded', 'stove top']
chickens.extend(chicks)
chickens  #=> ['roasted','fried','nuggets','seasoned','seared','baked','fried','shredded','stove top']
chickens.extend("HELLO")  
#=> 
"""
['roasted',
 'fried',
 'nuggets',
 'seasoned',
 'seared',
 'baked',
 'fried',
 'shredded',
 'stove top',
 'H',
 'E',
 'L',
 'L',
 'O']
"""
#------------------
'fried' in chickens  #=> True
chickens.index('fried')  #=> 1
chickens.index('L')  #=> 11, first appearance
chickens.index('rooster')  #=> ValueError
#------------------
chickens.insert(0, 'rooster')
"""
['rooster',
 'roasted',
 'fried',
 'nuggets',
 'seasoned',
 'seared',
 'baked',
 'fried',
 'shredded',
 'stove top',
 'H',
 'E',
 'L',
 'L',
 'O']
"""
chickens.insert(9, ['hen', 'chick'])
"""
['rooster',
 'roasted',
 'fried',
 'nuggets',
 'seasoned',
 'seared',
 'baked',
 'fried',
 'shredded',
 ['hen', 'chick'],
 'stove top',
 'H',
 'E',
 'L',
 'L',
 'O']
"""
#------------------
chickens.pop()
"""
['rooster',
 'roasted',
 'fried',
 'nuggets',
 'seasoned',
 'seared',
 'baked',
 'fried',
 'shredded',
 ['hen', 'chick'],
 'stove top',
 'H',
 'E',
 'L',
 'L']
"""
chickens.pop()
chickens.pop()
"""
['rooster',
 'roasted',
 'fried',
 'nuggets',
 'seasoned',
 'seared',
 'baked',
 'fried',
 'shredded',
 ['hen', 'chick'],
 'stove top',
 'H',
 'E']
"""
chickens.index(['hen', 'chick'])  #=> 9
chickens.pop(9)
"""
['rooster',
 'roasted',
 'fried',
 'nuggets',
 'seasoned',
 'seared',
 'baked',
 'fried',
 'shredded',
 'stove top',
 'H',
 'E']
"""
#------------------
chickens.reverse()
"""
['E',
 'H',
 'stove top',
 'shredded',
 'fried',
 'baked',
 'seared',
 'seasoned',
 'nuggets',
 'fried',
 'roasted',
 'rooster']
"""
#------------------
nums = [45,63, 99, 12, 25, -12, 0, 7, 87, 103]
nums.sort()  #=> [-12, 0, 7, 12, 25, 45, 63, 87, 99, 103]
nums.sort(reverse = True)  #=> [103, 99, 87, 63, 45, 25, 12, 7, 0, -12]
nums.append("Hello")
nums.sort()  #=> TypeError