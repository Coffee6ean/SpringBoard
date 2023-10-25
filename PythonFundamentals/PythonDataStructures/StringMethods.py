# Core API -
# - s.count(t): Returns # times t occurs in s
# - s.endswith(t): Does s end with string t?
# - s.find(t): Index of first occurence of t in s (-1 for failure)
# - s.isdigit(): Is s entirely made up of digits?
# - s.join(seq): Make new string of seq joined by s ("|".join(nums))
# - s.lower(): Return lowercased copy of s
# - s.replace(old,new,count): Replace count (default: all) occurrences of t in s
# - s.split(sep): Return list of items made from splitting s on sep
# - s.splitlines(): Split s at newlines
# - s.startswith(t): Does s start with t?
# - s.strip(): Remove whitespace at start/end of s

'92'.zfill(5)  #=> '00092'
'9452'.zfill(5)  #=> '09452'
#------------------
msg = 'nijwnqbqkpqlwdm'
msg.count('p')  #=> 1
msg.count('q')  #=> 3
msg.count('X')  #=> 0
#------------------
msg.endswith('!')  #=> Flase 

person = 'Mr. Jones'
person.startswith('Mr.')  #=> True
person.startswith('Mr. ')  #=> True
person.startswith('M')  #=> True
#------------------
person.find('.')  #=> 2
person.find('J')  #=> 4
person.find('Jon')  #=> 4
person.find('Mr.')  #=> 0
person.find('!')  #=> -1
#------------------
'hello4'.isdigit()  #=> False
'4'.isdigit()  #=> True
'515815'.isdigit()  #=> True
#------------------
chickens = ['roasted', 'fried', 'nuggets', 'baked', 'boiled']
'|'.join(chickens)  #=> 'roasted|fried|nuggets|baked|boiled'
''.join(chickens)  #=> 'roastedfriednuggetsbakedboiled'
'.'.join('LOL')  #=> 'L.O.L'
#------------------
'LOL'.lower()  #=> 'lol'
'lolSOOOSAd'.upper()  #=> 'LOLSOOOSAD'

'mrs Puff'.capitalize()  #=> 'Mrs puff' //only capitalizes the first letter
#------------------
things = 'apples-oranges-bananas'
things.replace('-','=')  #=> 'apples=oranges=bananas'
things.replace('-','=', 1)  #=> 'apples=oranges-bananas'

text = 'I hate you so much'
text.replace(' ', '...')  #=> 'I...hate...you...so...much'

tweet = 'YOLO hahahah omg #YOLO'
tweet.replace('YOLO', '')  #=> ' hahahah omg #'
tweet.replace('YOLO', '', 1)  #=> ' hahahah omg #YOLO'
tweet.replace('YOLO', '', -1)  #=> ' hahahah omg #'
#------------------
animals = 'goats,chickens,ducks,pigs,alpacas'
animals.split(',')  #=> ['goats', 'chickens', 'ducks', 'pigs', 'alpacas']

text.replace(' ', '...')
text.split('...')  #=> ['I hate you so much']
#------------------
list('YOLO')  #=> ['Y', 'O', 'L', 'O']
#------------------
"""
Hello
I 
Love
You
""".splitlines()  #=> ['', 'Hello', 'I ', 'Love', 'You']
#------------------
user_input = '   garffield  '
user_input.strip()  #=> 'garffield'

user_text = '    I love cheese   '
user_text.strip()  #=> 'I love cheese'