# External APIs and Flask -

**How External APIs Get Used in Flask**
Sometimes Flask gets JSON data and it returns HTML:
![alt text][pic]

_app.py_
```python
@app.route("/book-info")
def show_book_info():
    """Return page about book."""

    isbn = request.args["isbn"]

    resp = requests.get("http://some-book-api.com/search",
        params={"isbn": isbn, "key": API_SECRET_KEY})

    book_data = resp.json()

    # using the APIs JSON data, render full HTML page
    return render_template("book_info.html", book=book_data)
```
Sometimes Flask gets JSON data and JSON data to front end:
![alt text][pic2]

*app.py*

```python
@app.route("/book-data")
def show_book_info():
    """Return info about book."""

    isbn = request.args["isbn"]

    resp = requests.get("http://some-book-api.com/search",
        params={"isbn": isbn, "key": API_SECRET_KEY})

    book_data = resp.json()

    # using the APIs JSON data, return that to browser

    return jsonify(book_data)
```
This is helpful if you can’t make request info directly from browser — because of Same-Origin-Policy or need to keep key/secret out of browser

## API Libraries:
Some popular APIs have specialized libraries *(sometimes known as SDKs)* written for a specific programming language that can help out.
For example, there is a Python library for calling the Twitter API:
[Python-Twitter](https://github.com/bear/python-twitter)


[pic]: https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa487ab77-6f89-4616-8889-8048179de58e%2Fgraphviz-a400de69506e1701f1947cf4a2755bf994704d78.svg?table=block&id=2b05f5cb-e845-40bf-9620-70999ae73059&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&userId=&cache=v2 "Server-Side Requests"

[pic2]: https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3ba5dac7-8d0e-4581-9288-e038af76c20b%2Fgraphviz-bae1cf4dd4bb0bc90a5de9338e8426e0ed4d625b.svg?table=block&id=41e75b91-06fd-468e-bff3-9015d9691039&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&userId=&cache=v2 "Server-Side Requests"