# While Loops -
#   -> count = 10
#   -> while count > 0:
#         print(count)
#         count = count - 1  #or "count -= 1", but not "count--"
#   -> print("Liftoff")    
num = 0
while num <= 100:
    if num == 50:
        break
    print(num)
    num = num + 10
print("Done")

# while(num <= 100) {
#     console.log(num);
#     num += 10;
# }
#-----------------
guess = input("Enter a number: ")
#-----------------
target = 37
guess = None

while guess != target:
    guess = input("Enter your guess: ")
    if guess == "q" or guess == "quit":
        break
    guess = int(guess)
print("Done")
