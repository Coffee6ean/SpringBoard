# List Slicing - 
# Can retreive list from list:
#   -> lst[start:stop:step]
# start: Index to begin retreival (default)
# stop: Index to end retreival before (default: end)
# step: Number to step (default: 1)

vegan_no_nos = ['eggs', 'meat', 'milk', 'fish', 'figs']
vegan_no_nos[2:4:1]  #=> ['milk', 'fish']
vegan_no_nos[0:5:1]  #=>  ['eggs', 'meat', 'milk', 'fish', 'figs']
#------------------
nums = list(range(0,100))
nums[50:60:1]  #=> [50, 51, 52, 53, 54, 55, 56, 57, 58, 59]
nums[90::2]  #=> [90, 92, 94, 96, 98]
nums[:10:5]  #=> [0, 5]
nums[20:10:-1]  #=> [20, 19, 18, 17, 16, 15, 14, 13, 12, 11]
#------------------
str = "Hello World"
reversed_str = str[::-1]  #=> 'dlroW olleH'