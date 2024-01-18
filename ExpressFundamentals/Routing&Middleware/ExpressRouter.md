## Express Router -

- Placing all routes in ***app.js*** gets messy quickly!
- Express provides feature to place routes elsewhere and use them in ***app.js*** !

### A Router Outside of *app.js*
_demo/routing-demo/routes.js_
```js
const express = require("express");
const router = new express.Router();

const users = [];

/** GET /users: get list of users */
router.get("/", function(req, res) {
  return res.json(users);
});

/** DELETE /users/[id]: delete user, return status */
router.delete("/:id", function(req, res) {
  const idx = users.findIndex(u => u.id === +req.params.id);
  users.splice(idx, 1);
  return res.json({ message: "Deleted" });
});


module.exports = router;
```

### Using Our Router in app.js
We apply the router to all */users* routes with ***app.use***:
_demo/routing-demo/app.js_
```js
//  apply a prefix to every route in userRoutes
app.use("/users", userRoutes);
```

### Benefits of the Express Router
- We can make our app.js file smaller and more readable.
- We can separate different RESTful resources into their own files:
    - /users has its own router inside userRoutes.js
    - /pets has its own router inside petRoutes.js
