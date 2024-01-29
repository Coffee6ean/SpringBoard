# API Validation -

## Data Validation with Schemas:

### Server-side Data Validation
A server lacking adequate validation can result in:

- corrupt or incomplete data _(can cause errors later)_
- crashing or locking up the server
- displaying unhelpful errors to the frontend/API users
- extra server or database operations due to unsuccessfully trying to process bad data

### Why JSON Schema?
There are three main reasons for using a schema validation system:

- So user data can fail fast, before bad data gets to your db.
- To reduce amount of code for processing and validating data.
- To get a validation system that is easy to setup and maintain.

### Rolling Your Own Validation Doesn’t Always Scale
Let’s assume you have a /books endpoint, and a JSON payload to add a new book looks like this:
```json
{
  "book": {
    "isbn": "0691161518",
    "amazon-url": "http://a.co/eobPtX2",
    "author": "Matthew Lane",
    "language": "english",
    "pages": 264,
    "publisher": "Princeton University Press",
    "title": "Power-Up: Unlocking Hidden Math in Video Games",
    "year": 2017
  }
}
```

### Your request
Your /books POST request handler might look like this:
_demo/routes/books.js_
```js
router.post("/", function(req, res, next) {
  const bookData = req.body.book;

  if (!bookData) {
    // pass a 400 error to the error-handler
    let error = new ExpressError("Book data is required", 400);
    return next(error);
  }

  // (not implemented) insert book into database here

  return res.json(bookData);
});
```

Light validation here —checking if ***req.body.book*** is null/undefined

### More validation
- What if you want title and author to be required fields?
- What if users send invalid Amazon URLs or ISBNs?

If we want to roll our own validation this way, every request handler is just going to have tons of conditional logic checking for edge cases.
