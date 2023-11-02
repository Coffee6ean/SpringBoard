# Cookie Options -
# -'Expiration': how long should the browser remember this?
#    - Can be set to a time; default is “as long as web browser is running”
#      *(session cookie)*
# -'Domain': which domains should this cookie be sent to?
#    - Send only to '*books.site.com'* or everything at '*site.com'*?
# -'HttpOnly' - HTTP-only cookies aren’t accessible via any kind of JavaScript
#    - Useful for cookies that contain server-side information and don’t 
#      need to be available to JavaScript.

# Comparison of Types of Browser Storage:
# - LocalStorage
#     - Stores data with no expiration date, and gets cleared only through
#       JavaScript, or clearing the Browser cache
#     - Domain specific
#     - Storage limit is much larger than a cookie.
# - SessionStorage
#     - Stores data only for until the browser or tab is closed.
#     - Storage limit is much larger than a cookie.
# - Cookie
#     - Cookies can be made secure by setting the httpOnly flag as true 
#       for that cookie. This prevents client-side access to that cookie
#     - Sent from the browser to the server for every request to the same
#       domain
#     - Set usually from server-side. Can we read by a server