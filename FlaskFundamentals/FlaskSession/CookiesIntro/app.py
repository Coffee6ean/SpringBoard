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

# Seeing Cookies in Chrome:
# Dev Tools → Application → Storage → Cookies

# Settings Cookies in Flask:
# *demo/app.py*
@app.route("/handle-form-cookie")
def handle_form():
    """Return form response; include cookie for browser."""

    fav_color = request.args["fav_color"]

    # Get HTML to send back. Normally, we'd return this, but
    # we need to do in pieces, so we can add a cookie first
    html = render_template("response-cookie.html", fav_color=fav_color)

    # In order to set a cookie from Flask, we need to deal
    # with the response a bit more directly than usual.
    # First, let's make a response obj from that HTML
    resp = make_response(html)

    # Let's add a cookie to our response. (There are lots of
    # other options here--see the Flask docs for how to set
    # cookie expiration, domain it should apply to, or path)
    resp.set_cookie("fav_color", fav_color)

    return resp