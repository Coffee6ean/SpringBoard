# Strings -
# Immutable sequence of characters (like JS)

price = 3.5
qty = 7
print(f"Your total is: {price * qty}")  #=> Your total is: 24.5
#------------------
str(5.6)  #=> '5.6'

nums = [5,6,7]
str(nums)  #=> '[5, 6, 7]'
#------------------
price_str = '$56.99'
'$' in price_str  #=> True

price_str[0] = '#'  #=> TypeError
'#' + 'ubs'  #=> '#ubs'
#------------------
msg = "abcdefghi"
msg[0]  #=> 'a'

len(msg)  #=> 9
msg[8]  #=> 'i'

msg[5:]  #=> 'fghi'
msg[0:5]  #=> 'abcde'
msg[::2]  #=> 'acegi'

msg[5:] = "hello"  #=> TypeError

for char in msg:
    print(char)
"""
a
b
c
d
e
f
g
h
i
"""
#------------------
# Membership/Substrings:
# - Can use in for memebership ("e" in "apple")
# - Can slice to retrieve substrings ("apple"[1:3] == "pp")
#   - Cannot splice; strings are immutable
# - Can iterate over, get letter-by-letter:
#   -> for letter in word:
#          print(letter)