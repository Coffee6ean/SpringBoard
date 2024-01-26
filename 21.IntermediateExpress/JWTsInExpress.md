# Using JWTs in Express -

### Login
_demo/auth-api/routes/auth.js_
```js
/* (Fixed) Login: returns JWT on success. */
router.post("/login", async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const result = await db.query(
      "SELECT password FROM users WHERE username = $1",
      [username]);
    let user = result.rows[0];

    if (user) {
      if (await bcrypt.compare(password, user.password) === true) {
        let token = jwt.sign({ username }, SECRET_KEY);
        return res.json({ token });
      }
    }
    throw new ExpressError("Invalid user/password", 400);
  } catch (err) {
    return next(err);
  }
});
```

## Protected Routes:
After client receives token, they should send with every future request that needs authentication.

For our demo, we’ll look in ***req.body*** for a token called ***_token***

_Front End JS_
```js
// get token from login route
let resp = await axios.post(
    "/login", {username: "jane", password: "secret"});
let token = resp.data;

// use that taken for future requests
await axios.get("/secret", {params: {_token: token}});
await axios.post("/other", {_token: token});
```

### Verifying a token
_demo/auth-api/routes/auth.js_
```js
/* Secret-1 route than only users can access */
router.get("/secret-1", async function (req, res, next) {
  try {
    // try to get the token out of the body
    const tokenFromBody = req.body._token;

    // verify this was a token signed with OUR secret key
    // (jwt.verify raises error if not)
    jwt.verify(tokenFromBody, SECRET_KEY);

    return res.json({ message: "Made it!" });
  }

  catch (err) {
    return next({ status: 401, message: "Unauthorized" });
  }
});
```

That works, but can we refactor this?
- We don’t want to repeat this one every route
- How can we intercept the request and verify the token?
- **Middleware!**

## Middleware:

### Authentication Middleware
_demo/auth-api/middleware/auth.js_
```js
/* Auth JWT token, add auth'd user (if any) to req. */

function authenticateJWT(req, res, next) {
  try {
    const tokenFromBody = req.body._token;
    const payload = jwt.verify(tokenFromBody, SECRET_KEY);
    req.user = payload;
    return next();
  } catch (err) {
    // error in this middleware isn't error -- continue on
    return next();
  }
}
```

(Stores user data on ***req*** for later requests)

### Using Middleware on All Routes
_demo/auth-api/app.js_
```js
const express = require("express");
const app = express();
const routes = require("./routes/auth");
const ExpressError = require("./expressError");
const { authenticateJWT } = require("./middleware/auth");

app.use(express.json());
app.use(authenticateJWT);
```

Middleware runs on all routes defined after this line.

### Authorization Middleware
_demo/auth-api/middleware/auth.js_
```js
/* Require user or raise 401 */
function ensureLoggedIn(req, res, next) {
  if (!req.user) {
    const err = new ExpressError("Unauthorized", 401);
    return next(err);
  } else {
    return next();
  }
}
```

We can have more specific authorization requirements.

Here’s a version that requires the username be “admin”:
_demo/auth-api/middleware/auth.js_
```js
/* Require admin user or raise 401 */
function ensureAdmin(req, res, next) {
  if (!req.user || req.user.username != "admin") {
    const err = new ExpressError("Unauthorized", 401);
    return next(err);
  } else {
    return next();
  }
}
```

<aside>
💡 **Note:** This is a simple check, useful for just understanding the idea that you might have more specialized authorization middleware.

A more realistic implementation of “make they’re admins” might use an ***is_admin*** field in the user table, and the JWT would include that field along with the username. Then, this middleware would check whether that value is in the JWT.

</aside>

### Using Middleware on Specific Routes
You typically need flexibiity in route authorization; not just “all”.

Some routes, like */register* and */login*, need to be open.

_demo/auth-api/routes/auth.js_
```js
/* Secret route: only users can access */
router.get("/secret",
  ensureLoggedIn,
  async function (req, res, next) {
    try {
      return res.json({ message: "Made it!" });
    } catch (err) {
      return next(err);
    }
  });
```

_demo/auth-api/routes/auth.js_
```js
/* Secret-admin route: only admins can access */
router.get("/secret-admin",
  ensureAdmin,
  async function (req, res, next) {
    try {
      return res.json({ message: "Made it!" });
    } catch (err) {
      return next(err);
    }
  });
```

You can add as many middleware functions as you want

## Common Configuration:

- As application scales, variables like ***SECRET_KEY*** used all over.
    - Don’t redefine in every file — tedious and bug-prone!
- Create a file,***config.js***, at app route, and export vars from there

_demo/auth-api/config.js_
```js
/** Common settings for auth-api app. */

const DB_URI = (process.env.NODE_ENV === "test")
  ? "postgresql:///express_hashing_jwts_test"
  : "postgresql:///express_hashing_jwts";

const SECRET_KEY = process.env.SECRET_KEY || "secret";

const BCRYPT_WORK_FACTOR = 12;

module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR
};
```

## Testing Auth:

- Before each request, create test users and dervice tokens for them
- Store these tokens in global variables that can be used across tests

### Before hook
*demo/auth-api/routes/auth.test.js*

```js
let testUserToken;
let testAdminToken;

beforeEach(async function () {
  const hashedPassword = await bcrypt.hash(
    "secret", BCRYPT_WORK_FACTOR);
  await db.query(`INSERT INTO users VALUES ('test', $1)`,
    [hashedPassword]);
  await db.query(`INSERT INTO users VALUES ('admin', $1)`,
    [hashedPassword]);

  // we'll need tokens for future requests
  const testUser = { username: "test" };
  const testAdmin = { username: "admin" };
  testUserToken = jwt.sign(testUser, SECRET_KEY);
  testAdminToken = jwt.sign(testAdmin, SECRET_KEY);
});
```

### Protected Routes
_demo/auth-api/routes/auth.test.js_
```js
describe("GET /secret success", function () {
  test("returns 'Made it'", async function () {
    const response = await request(app)
      .get(`/secret`)
      .send({ _token: testUserToken });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "Made it!" });
  });
});
```

_demo/auth-api/routes/auth.test.js_
```js
describe("GET /secret failure", function () {
  test("returns 401 when logged out", async function () {
    const response = await request(app)
      .get(`/secret`); // no token being sent!
    expect(response.statusCode).toBe(401);
  });

  test("returns 401 with invalid token", async function () {
    const response = await request(app)
      .get(`/secret`)
      .send({ _token: "garbage" }); // invalid token!
    expect(response.statusCode).toBe(401);
  });
});
```
