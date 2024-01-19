### ****Flask Debug Toolbar & Redirects****
# The Debug Toolbar makes redirects explicit. This is very useful for 
# debugging
# If you don’t want this, you can turn it off:
"app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False"

# Common Pattern: Redirect POST to GET:
# - POST requests are often from a form
#     - And change data on the server
# - If you return HTML from a POST request, the browser shows it fine
#     - But if the user hits “Refresh”, they get weird “ok to resubmit” dialog
# - Better strategy:
#     - Do the work you want inside your POST route
#     - Then *redirect to* a page that shows the confirmation

# demo/app.py
@app.route("/post-example", methods=["POST"])
def post_example():
    """An example of good POST handling."""

    isbn = request.form["isbn"]

    print(f"\n\nBuying Book: {isbn}\n\n")

    # flash message: we'll talk about this soon
    # flash(f"Book {isbn} bought!")

    return redirect("/thanks")


@app.route("/thanks")
def say_thanks():
    """Thank user for buying a book."""

    return render_template("thanks.html")