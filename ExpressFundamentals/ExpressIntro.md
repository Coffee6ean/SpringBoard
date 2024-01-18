## **Express.js**

# What is Express.js? -

- Minimalist framework
- Very similar to Flask
- Most popular in the Node ecosystem

### A Server In A Few Lines
_demo/tiny.js_
```js
const express = require('express');

const app = express();

app.listen(3000, function () {
  console.log('App on port 3000');
})
```

- App doesn’t do anything except respond 404s, but server is running!
- ***app.listen*** takes a port and a callback.
    - Binds the server to port & listens for requests there.
    - Calls callback once server has started up.
- ***app.listen*** should always be at the bottom of the file

## How Does Express Work?:

### Route Handlers
Route handlers are event listeners — they’re like Flask view functions
_demo/firstRoute.js_
```js
const express = require('express');

const app = express();

app.get('/dogs', function(request, response) {
  return response.send('Dogs go woof woof');
});

app.listen(3000, function(){
  console.log('App on port 3000');
})
```

_demo/first_route.py_
```js
from flask import Flask

app = Flask(__name__)

@app.route('/dogs')
def bark():
    return 'Dogs go woof woof'
```

`app.get('/dogs')` listens for a ***GET*** Request to the ***/dogs*** endpoint.
In the callback, ***response.send()*** issues a response of plain-text or HTML.

### Route Handler Callbacks
- Every handler should have a callback with two parameters:
    - ***request***: information about request (query string, url parameters, form data)
    - ***response***: useful methods for sending a **response** (html, text, json, etc.)
    - You will commonly see these parameters named ***req*** and ***res***

Express builds ***req*** and ***res*** objects for every request and passes them to callback.

### The Request-Response Cycle
When you start the server, Express runs through the file and registers all the event listeners before ***app.listen*** at the bottom.
Whenever a user makes a request, Express invokes the **first matching route handler it finds** until a response is issued via a method on the ***response*** object.

This is called the *request-response cycle* for Express.
_demo/secondRoute.js_
```js
const express = require('express');

const app = express();

app.get('/dogs', function(req, res) {
  return res.send('Dogs go woof woof');
});

// this will never get matched
app.get('/dogs', function(req, res) {
  return res.send('but what about these dogs???');
});

app.listen(3000, function () {
  console.log('App on port 3000');
})
```

First route handler gets matched because it was registered first.
Second handler never matched because a response is issued in the previous handler, thus concluding the request cycle.

### Route Methods
Here are the route methods you will likely use, one for each HTTP verb:
- ***app.get(path, callback)***
- ***app.post(path, callback)***
- ***app.put(path, callback)***
- ***app.patch(path, callback)***
- ***app.delete(path, callback)***
