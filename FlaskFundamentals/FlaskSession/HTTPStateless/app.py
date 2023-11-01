# Saving 'State' -
# HTTP is what’s called a “stateless” protocol. On its own, it remembers 
# nothing.
# It’s like a goldfish. Every time it circles around, what it sees is 
# brand new.

# Some Ways To Save State:
# - Passing info in a query param / POST form hidden field
#     - '/step-zero?fav-color=blue' →  → …
#         '/step-one?fav-color=blue'
#      
# - Keeping info in URL path
#     - '/fav-color/blue/step-zero' →  → …
#         
#         '/fav-color/blue/step-one'
#         
# - Using JS [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
#     - Nice, but only JS can access this — you can’t get data on server
#     - Useful for single-page applications or heavily AJAX-driven apps
# - Using cookies / sessions