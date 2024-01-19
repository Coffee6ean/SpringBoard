# Error Handling - 
# In general, Python raises errors in places JS returns undefined:
# - provide too few/too many arguments to a function
# - index a list beyond length of list
# - retrieve item from dictionary that doesn’t exist
# - use missing attribute on an instance
# - conversion failures (eg, converting “hello” to an int)
# - division by zero
# - and more!
# 
# In general, in Python: **explicit is better than implicit**

#Look Before You Leap - LBYB Method for Error Handling
def get_days_alive1(person):
    if 'age' in person:
        days = person['age'] * 365
        print(f'{person["name"]} has been alive for {days} days')

get_days_alive1({'name': 'Alfredo M.'})

# Easier to Ask for Forgiveness rather than Permission - EAFP Method 
# for Error Handling
def get_days_alive2(person):
    try:
        days = person['age'] * 365
        print(f'{person["name"]} has been alive for {days} days')
    except KeyError as exc:
        #print('EXC => ', exc)
        print(f'Missing key: {exc}')
    except TypeError:
        print('Error. Invalid input, expected a dict')
    
get_days_alive2({'name': 'Alfredo M.', 'age': 24})
get_days_alive2({'name': 'Alfredo M.'})
get_days_alive2({'age': 24})

# Common Exception Types:
# - AttributeError: Couldn’t find attr: o.missing
# - KeyError: Couldn’t find key: d["missing"]
# - IndexError: Couldn’t find key: d["missing"]
# - NameError: Couldn’t find variable: not_spelled_right
# - OSError: Operating system error: can’t read/write file, etc
# - ValueError: Incorrect value (tried to convert “hello” to int, etc)
