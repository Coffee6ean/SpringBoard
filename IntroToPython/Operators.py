# Operators/Equality -
# JavaScript:
#   - '==' loose equality  #=> 7 == '7' // true
#   - '===' strict equality  #=> 7 === '7' // false
#   - Objects & arrays only equal when same identity
# Python:
#   - '==' equality (strict about types)  #=> 7 == '7' #False
#   - Structures with same items are equal  #=> [1,2,3] == [1,2,3]
#   - Use 'is' to check obj identity  #=> [1,2] is [1,2] #False
1 == 1  #=> True
'1' == 1  #=> False
[1,2,3] == [1,2,3]  #=> True
1 != 1  #=> False
1 != '1'  #=> True
#-----------------
[1,2,3] is [1,2,3]  #=> False

nums = [1,2,3]
copy = nums
nums is copy  #=> True

[1,2,3] is not [1,2,3]  #=> True