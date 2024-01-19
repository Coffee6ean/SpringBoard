# Splicing - 
# Can assign a list to a splice:
#   -> alpha = ['a', 'b', 'c', 'd', 'e']
#   -> alpha[2:] = ['y', 'z']
#   => print(alpha)  #['a', 'b', 'y', 'z']
#
#   -> alpha[1:3] = []
#   => print(alpha)  #['a', 'z']

colors = ['red', 'orange', 'yellow']
colors[0:1] = ['dark red', 'pink']  #=> ['dark red', 'pink', 'orange', 'yellow']
colors[3:] = ['dark yellow', 'green', 'blue', 'purple']  #=> ['dark red', 'pink', 'orange', 'dark yellow', 'green', 'blue', 'purple']
colors[5:] = []  #=> ['dark red', 'pink', 'orange', 'dark yellow', 'green']
#------------------
colors[::2] = ['LOL']  #=> ValueError
colors[::2] = ['LOL', 'LOL', 'LOL']  #=> ['LOL', 'pink', 'LOL', 'dark yellow', 'LOL']
#------------------
colors[0:2] = []  #=> ['LOL', 'dark yellow', 'LOL']
colors[::] = []  #=> []
