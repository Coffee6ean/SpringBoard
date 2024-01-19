# Looping over Dictionaries 
# Ordered by insertion order
ages = {
    "Whiskey": 6, 
    "Fluffy": 3, 
    "Ezra": 7, 
    "chart" : {
        'M' : True,
        'T' : False,
        'W' : True,
        'TH' : True,
        'F' : True,
        'S' : False,
        'SU' : True
    }
}

for name in ages.keys():
    print(name)

for age in ages.values():
    print(age)

for name_and_age in ages.items():
    print(name_and_age)

for (name, age) in ages.items():
    print(name, "is", age)