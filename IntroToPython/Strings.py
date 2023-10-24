# Strings -
# - Like JS, can use " or ' as delimiters
# - Can be multi-line by using triple-quotes: """ or '''
'hello'  #=> hello
"hello"  #=> hello
'''abibsubdu'''  #=> abibsubdu
#-----------------
'''
    <div>
        <h1>H1</h1>
    <div>
'''
#=> '\n<div>\n    <h1>H1</h1>\n<div>\n'
#-----------------
f"2+2={2+2}"  #=> '2+2=4'

first = "Channing"
last = "Tatum"
full = f"{first} - {last}"  #=> full: 'Channing - Tatum'
#-----------------
print("\t Hello")
#=>         Hello
print("\n Hello")
#=>
#=> Hello