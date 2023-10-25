# Core API
# - s.add(x): Add item x to s
# - s.copy(): Add item x to s
# - s.pop(): Remove & return arbitrary item from s
# - s.remove(x): Remove x from s
languages = {'javascript', 'python', 'ruby'}

# Membership
'scala' in languages  #=> False 
'ruby' in languages #=> True
#------------------
languages.add('scala')
languages  #=> {'javascript', 'python', 'ruby', 'scala'}
#------------------
languages.pop()  #=> 'ruby'
languages  #=> {'javascript', 'python', 'scala'}
#------------------
languages.remove('python')  #=> {'javascript', 'scala'}
#------------------
len(languages)  #=> 2
#------------------
languages_copy = languages.copy()
languages_copy is languages  #=> False
languages_copy == languages  #=> True
#------------------
{1,2,3,{1,2,3}}  #=> TypeError
#------------------
languages.clear()  #=> set()