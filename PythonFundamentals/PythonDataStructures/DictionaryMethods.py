# Core API
# - d.copy(): Return new copy of d
# - d.get(x, default): Retrieve value of x (return optional default if missing)
# - d.items(): Return iterable of (key, value) pairs
# - d.keys(): Return iterable of keys
# - d.values(): Return iterable of values
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
ages.get('Whiskey')  #=> 6
ages.get('Lisa')  #=> 
ages.get('Lisa', 'No one')  #=> 'No one'

ages['Lisa'] = 16
ages.get('Lisa', 'No one')  #=> 16
#------------------
ages.keys()  #=> dict_keys(['Whiskey', 'Fluffy', 'Ezra', 'chart', 'Lisa'])
keys = list(ages.keys())
keys.sort()  #=> ['Ezra', 'Fluffy', 'Lisa', 'Whiskey', 'chart']
#------------------
ages_copy = ages.copy()
#=>
"""
{'Whiskey': 6,
 'Fluffy': 3,
 'Ezra': 7,
 'chart': {'M': True,
  'T': False,
  'W': True,
  'TH': True,
  'F': True,
  'S': False,
  'SU': True},
 'Lisa': 16}
"""
ages_copy is ages  #=> False
ages_copy == ages  #=> True

ages_copy['chart'] is ages['chart']  #=> True
#------------------
ages.pop('Whiskey')  #=> 6
ages  
#=> 
"""
{'Fluffy': 3,
 'Ezra': 7,
 'chart': {'M': True,
  'T': False,
  'W': True,
  'TH': True,
  'F': True,
  'S': False,
  'SU': True},
 'Lisa': 16}
"""

ages.popitem()  #=> ('Lisa', 16)
ages.popitem()  
#=> 
"""
('chart',
 {'M': True,
  'T': False,
  'W': True,
  'TH': True,
  'F': True,
  'S': False,
  'SU': True})
"""
ages  #=>  {'Fluffy': 3, 'Ezra': 7}
#------------------
{}.fromkeys('MTWHF', True)  #=> {'M': True, 'T': True, 'W': True, 'H': True, 'F': True}
ages.fromkeys('MTWHF', True)  #=> {'M': True, 'T': True, 'W': True, 'H': True, 'F': True}
ages  #=> {'Fluffy': 3, 'Ezra': 7}
#------------------
ages.clear()
ages  #=> {}

ages['Dan'] = 8
ages  #=> {'Dan': 8}