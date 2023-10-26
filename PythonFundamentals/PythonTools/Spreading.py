# Spreading - 
nums = [2,4,6,8]
[*nums]  # Similar to JS: [...nums]
#-----------------
[-2,0,*nums]  #=> [-2, 0, 2, 4, 6, 8]

odds = [1,3,5,7,9]
[*odds, *nums]  #=> [1, 3, 5, 7, 9, 2, 4, 6, 8]
#-----------------
[*'hello']  #List=> ['h', 'e', 'l', 'l', 'o']

{*'hello'}  #Set=> {'e', 'h', 'l', 'o'}
{*'hello', 45}  #=> {45, 'e', 'h', 'l', 'o'}
#-----------------
rainfall = {
    'Jan': 2.5,
    'Feb': 4.9
}

{*rainfall}  #Set=> {'Feb', 'Jan'}
[*rainfall]  #List=> ['Jan', 'Feb']

#{'Dec':0.5, *rainfall}  #=>SyntaxError
{'Dec':0.5, **rainfall}  #=> {'Dec': 0.5, 'Jan': 2.5, 'Feb': 4.9}
{'Dec':0.5, **rainfall, 'Aug':3.2}  #=> {'Dec': 0.5, 'Jan': 2.5, 'Feb': 4.9, 'Aug': 3.2}
{'Dec':0.5, **rainfall, 'Jan':4.0}  #=> {'Dec': 0.5, 'Jan': 4.0, 'Feb': 4.9}
#-----------------
print(2,3,4,5,6)  #=> 2 3 4 5 6

nums = [1,2,3,4,5,6]
print(nums)  #=> [1, 2, 3, 4, 5, 6]

print(*nums)  #=> 1 2 3 4 5 6