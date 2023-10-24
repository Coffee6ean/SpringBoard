# Conditional Logic -
# Parentheses around condition aren't required, unlike JS
# If:
#   -> if grade == "A":
#         print("Awesome job")
#      elif grade == "F":
#         print("uh oh")
#      else:
#         print("don't worry too much")
age = 19
isBirthday = True

if age >= 21:
    print("You can drink")
    if isBirthday:
        print("Happy birthday, here is a free")
elif age >= 18:
    print("You can come in, but not drink")
    if isBirthday:
        print("Happy birthday, here is a free apple juice")
else:
    print("Sorry, go home kid")