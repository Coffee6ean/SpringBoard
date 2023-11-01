### **Reading Cookies in Flask**
# *demo/app.py*
@app.route("/later-cookie")
def later():
    """An example page that can use that cookie."""

    fav_color = request.cookies.get("fav_color", "<unset>")

    return render_template("later-cookie.html", fav_color=fav_color)

### **Cookie Options**
#
#- **Expiration**: how long should the browser remember this?
#    - Can be set to a time; default is “as long as web browser is running” *(session cookie)*
#- **Domain**: which domains should this cookie be sent to?
#    - Send only to ***books.site.com*** or everything at ***site.com***?
#- **HttpOnly** - HTTP-only cookies aren’t accessible via any kind of JavaScript
#    - Useful for cookies that contain server-side information and don’t need to be available to JavaScript.