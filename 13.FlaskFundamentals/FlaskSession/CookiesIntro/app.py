# Cookies -
# Flask’s 'session' is powered by cookies; let’s start there.

# Cookies Save “State”:
# Cookies are a way to store small bits of info on client (browser).

# What is a Cookie?
# Cookies are 'name/string-value pair' stored by the 'client'(browser).
# The server tells client to store these. The client sends cookies to 
# the server with each request.

# Cookies, A Conversation:
# - *Browser*: I’d like to get the resource '/upcoming-events'
# - *Server*: Here’s some HTML. Also, please remember this piece of 
#    information: 'favorite_food' is `"taco"`.
# - *Browser* (stores this somewhere on the computer)
# - *Browser*: I’d like to get the resource '/event-detail' . Also, you 
#   told me to remind you that 'favorite_food' is `"taco"`.
# - *Server*: Here’s the HTML for that.
# - *Browser*: I’d like to get the resource '/calendar.jpg'. Also, you 
#   told me to remind you that 'favorite_food' is `"taco"`.
# - …
