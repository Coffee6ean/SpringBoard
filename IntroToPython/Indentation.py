# Indentation -
# In many programming languages, you use '{}' to show blocks
#   -> if(age >= 18) {
#        console.log("Vote!");
#        registerToVote()
#      }
# In Python, you don't use '{}' for blocks; the indentation is what 
# matters:
#   -> if age >= 18:
#          print("Vote!");
#          register_to_vote();
#
# In JS, people often use 2 or 4 spaces for indentation (styles vary)
# In Python, everyone agrees: it should always be 4 spaces 
age = 17

#if(age < 18):
#print("Child")  #=> IndentationError

if(age < 18): 
    print("Child")  #=> 'Child'
#-----------------
color = "green"
if color == "green":
    print("Green")
