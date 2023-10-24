# Functions -
# Providing too many/too few arguments is an error (in JS, this is ignored/
# becomes undefined)
#   -> def add_three_numbers(a,b,c):
#          return a + b + c
#   => add_three_numbers(10,20,30)  #=> 60
#   => add_three_numbers(10, 20)  #=> TypeError
#   => add_three_numbers(10,20,30,40)  #=> TypeError
def three_things(a,b,c):
    return("Hello World")

def send_email(to_email, from_email, subject, cc, bcc, body):
    email = f"""
        to: {to_email}
        cc: {cc}
        bcc: {bcc}
        from: {from_email}
        subject: {subject}
        --------------------
        body: {body}
    """
    return email

send_email("blue_whale@gmail.com","scaredy_cat@gmail.com", "MEOW", 
           "garffield@gmail.com", "black_cat@gmail.com", "I hate Dogs")
#send_email(subject="MEOW", to_email="blue_whale@gmail.com")
#help(send_email)

def power(num, power = 2):
    return num ** power