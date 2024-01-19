# Middleware -

### What is Middleware?
- It is code that runs in the **middle** of the request / response cycle!
- In Express, middleware are functions that get access to the ***req*** and ***res*** objects and can also call the ***next*** function.
- ***express.json()*** is an example of middleware
- Our 404 and global error handler are example of middleware

### When would you use it?
It opens up the door for separating our code into more logical groupings and providing more robust / abstracted error handling.

- Logging useful information on every request
- Adding a **current_user** for every request (like ***g*** in Flask!)
- Ensuring that users are authenticated
- Ensuring that a user is authorized to access an endpoint

### What does it look like?
- In another file called ***middleware.js***

_demo/routing-demo/middleware.js_
```js
function logger(req, res, next) {
  console.log(`Sending ${req.method} request to ${req.path}.`);
  return next();
}
```

### Why do we need *next*?
- If we do not include it, we will not make it to the *next* route!
- Notice here we are **not** passing anything to ***next***
- If argument are passed to ***next*** , Express **always** treats this as an error.

### Using our middleware
_demo/routing-demo/app.js_
```js
const middleware = require("./middleware");

app.use(express.json());

// this applies to all requests at all paths
app.use(middleware.logger);
```

### Writing middleware to authorize
_demo/routing-demo/middleware.js_
```js
const ExpressError = require("./expressError");

function onlyAllowElie(req, res, next) {
  try {
    if (req.params.name === "Elie") {
      return next();
    } else {
      throw new ExpressError("Unauthorized", 401);
    }
  } catch (err) {
    return next(err);
  }
}

module.exports = { logger, onlyAllowElie };
```

### Using our middleware
_demo/routing-demo/app.js_
```js
// route handler with middleware
app.get("/hello/:name", middleware.onlyAllowElie, function(req, res, next) {
    return res.send("Hello " + req.params.name);
}
);
```

### Using external middleware
- Instead of writing our own logger, we will use a more robust one called ***morgan***   
- When using external middleware, we follow a simple process:
    - install it -***npm install morgan***
    - require it -***const morgan = require(“morgan”);***
    - use it -***app.use(morgan(‘dev’));***
- Once you have set up morgan, take a look at your terminal on each request and you will see the route requested, HTTP verb, and much more.

### Summarizing Middleware
- We’ve already been using built in middleware like ***express.json()***
- Middleware are functions that can intercept the request/response cycle
- When using external middleware, make sure to first install, require, and then use.
