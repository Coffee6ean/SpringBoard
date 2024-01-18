# Our First Express App -

### Getting started
```bash
$ mkdir first-express-app
$ cd first-express-app
$ npm init -y
$ npm install express
```

### Nodemon
- Nodemon restarts server when you edit files or if the server crashes.
- Install globally, so you can use in any project:
```bash
$ npm install --global nodemon
```

To start server:
```bash
$ nodemon app.js
```

### URL Parameters
Specify parameters in the route by prefixing them with a colon `:`.
_demo/app.js_
```js
/** Show info on instructor. */

app.get('/staff/:fname', function(req, res) {
  return res.send(`This instructor is ${req.params.fname}`);
});
```
- All of our parameters become keys in an object found at ***req.params*** 
- The values are *always* strings

### Other Useful Request Properties
- query string (***request.query)***
- headers (***request.headers)***
- what about the body of the request?

- what about the body of the request?

### Parsing the Body
Tell Express to parse request bodies for either form data or JSON:
_demo/app.js_
```js
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

To access the parsed request body: ***req.body***
_demo/app.js_
```js
/** Add a new instructor. */

app.post('/api/staff', function(req, res) {
  // Do some database operation here...
  return res.send({
    fname: req.body.fname
  });
});
```

**A recent update to Express added the method *express.json().*Previously you had to utilize a small library called [body-parser](https://expressjs.com/en/resources/middleware/body-parser.html) to do this, so if you see body-parser, it does the same thing.**

### Returning JSON
It’s dead simple
_demo/app.js_
```js
/** Show JSON on instructor */
app.get('/api/staff/:fname', function(req, res) {
  return res.json({ fname: req.params.fname });
});
```

### Status Codes
To issue status codes with our responses, we can call the ***res.status(code)*** method first, and then chain our ***.json()*** to finish the response.
_demo/app.js_
```js
/** Sample of returning status code */
app.get('/whoops', function(req, res) {
  return res.status(404).json('Whoops! Nothing here!');
});
```

### Validation and Errors
_demo/app.js_
```js
/** Sample of validating / error handling */app.get('/dogs/:name', function(req, res) {
  if(req.params.name !== 'Whiskey') {
    return res
            .status(403)
            .json('Only Whiskey is Allowed.');
  }

  return res.json('Hello Whiskey!');
});
```

This will work to start, but we can do better!
