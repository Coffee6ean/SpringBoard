# Error Handling in Express -

### How do we let Express know about an error?
There are quite a few ways, but the easiest is just to ***throw*** an error!

```js
app.get("/users/:username", function(req,res,next) {
  const user = USERS.find(u => u.username === req.params.username);

  if (!user) throw "Not found!";

  return res.send({user});
})
```

### A couple issues here
- We can’t easily see the stack trace
- What about attaching a status code like 404 or 401?
- If we want that kind of flexibility, we need to create it!

### Let’s make our own error class!
_demo/routing-app/expressError.js_
```js
/*
* ExpressError extends the normal JS error so we can easily 
* add a status when we make an instance of it. 
* The error-handling middleware will return this. 
*/
class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
    console.error(this.stack);
  }
}


module.exports = ExpressError;
```

### Throwing an error
Now that we have our own custom error class, let’s use it!
```js
const ExpressError = require("./expressError")

app.get("/users/:username", function(req, res) {
  const user = USERS.find(u => u.username === req.params.username);

  if (!user) throw new ExpressError("Not found!", 404);

  return res.send({user});
})
```

### Almost there…
- Now throwing errors, but server never responds with anything.
- We need to instruct Express how to respond when we throw errors.
- For that, we need to introduce two new concepts, error handling and ***next***

### Error Handling in express
In Express, error handlers are special types of handlers. Here are the rules for building an error handler:
- Error handlers should be at the bottom of the file, just above ***app.listen***. This is because *any* handlers defined above can potentially throw errors!
- They should match every HTTP verb and path: ***app.use(callback)***
- Callback signature to error handlers has **4** parameters instead of **3**
    - `function (error, req, res, next)`
    - (This is how Express knows it’s an error-handler)

### Global Error Handler Example
_demo/routing-app/app.js_
```js
app.use(function(err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.message;

  // set the status and alert the user
  return res.status(status).json({
    error: {message, status}
  });
});
```

### Getting From a Route to Global Error Handler
- We’ve set up our global error handler & are throwing errors in routes.
- Once we ***throw***, we need to tell Express to send error to global error handler.
- We need to move onto the ***next*** thing!
- Every route handler can accept **three** parameters, ***req***, ***res*** and ***next***!
- To move to error handler, invoke ***next*** function inside of our route handlers.

### Handling Errors Correctly
```js
const ExpressError = require("./expressError")

app.get("/users/:username", function(req, res, next){
  try {
    const user = USERS.find(u => u.username === req.params.username);
    if (!user) throw new ExpressError("Not found!", 404);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
})

// Global Error Handler goes down here
```
- All logic inside route handlers is wrapped in ***try/catch***
- If you want to respond with an error, ***throw*** a ***new ExpressError***
- In ***catch*** for route handler, **always** pass error to ***next()***
- In ***catch*** for route handler, **always** pass error to ***next()***
    ```js
    try {
      // logic here
    } catch (err) {
      return next(err);
    }
    ``` 
- In ***app.js*** ensure there is a global error handler at bottom

### Handling 404 Errors
If a route does not match, let’s make sure to handle that as well.
_demo/routing-app/app.js_
```js
// 404 handler
app.use(function (req, res, next) {
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError)
});
```

This goes *after* all routes, but *before* the global handler.


## Putting it all together:
_demo/routing-app/app.js_
```js
// 404 handler
app.use(function (req, res, next) {
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError)
});

// generic error handler
app.use(function(err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.message;

  // set the status and alert the user
  return res.status(status).json({
    error: {message, status}
  });
});
// end generic handler
app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
```
