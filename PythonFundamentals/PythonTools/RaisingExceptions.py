# Raising Errors -
# In Python, it’s common for you to “raise” errors to signal problems:
"""
if color not in {"red", "green", "blue"}:
    raise ValueError("Not a valid color!")
"""

# In CLI, type something like:
# '$ raise ValueError' or '$ raise ValueError('I dont like this input')'

# Error Handling Pattern:
# Raise exception when you know it should be an error. Handle it at the 
# point you can give good feedback.
def bounded_avg(nums):
    "Return avg of nums (makes sure nums are 1-100)"
    for n in nums:
        if n < 1 or n > 100:
            raise ValueError("Outside bounds of 1-100")

    return sum(nums) / len(nums)

def handle_data():
    "Process data from database"
    #ages = get_ages(from_my_db)
    ages = [10,40,50,99,103,2,0]

    try:
        avg = bounded_avg(ages)
        print("Average was", avg)
    except ValueError as exc:
        # exc is exception object -- you can examine it!
        print("Invalid age in list of ages")