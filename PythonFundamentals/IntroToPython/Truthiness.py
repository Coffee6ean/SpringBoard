# Truthiness & Falseness -
#   - In JS, these things are falsy:
#       - 0, 0.0, "", undefined, null, NaN, false
#   - In JS these are (perhaps unexpectedly) truthy:
#       - [], {}
#   - In Python, these things are falsy:
#       - 0, 0.0, "", None, False 
#       - [] (empty list), {} (empty dictionary), set() (empty set)       
jobs = ["walk dog"]
if jobs:
    print("Cant go home yet, more work to do")

jobs = []
if jobs:
    print("Cant go home yet, more work to do")