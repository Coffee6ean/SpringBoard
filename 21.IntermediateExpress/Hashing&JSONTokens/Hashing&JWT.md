# Hashing and JWTs with Node -

## Password Hashing with Bcrypt:

Similar to Flask, but with asynchronous API.
To use, install library:
```bash
$ npm install bcrypt
```

Import bcrypt:
```json
const bcrypt = require("bcrypt");
```

**bcrypt.hash(*password-to-hash*, *work-factor*)**
Hash password, using work factor (12 is a good choice).
Returns *promise* — resolve to get hashed password.

**bcrypt.compare(*password*, *hashed-password*)**
Check if password is valid.
Returns *promise* — resolve to get boolean.

### Hashing Password
_demo/auth-api/routes/auth.js_
```js
/** Register user. {username, password} => {username} */
router.post("/register", async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(
      password, BCRYPT_WORK_FACTOR);
    const result = await db.query(
      `INSERT INTO users (username, password)
             VALUES ($1, $2)
             RETURNING username`,
      [username, hashedPassword]);

    return res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});
```

### Logging in
- Try to find user first
    - If exists, compare hashed password to hash of login password
- ***bcrypt.compare()*** resolves to boolean—if ***true*** , passwords match!

_demo/auth-api/routes/auth.js_
```js
/** Login: returns {message} on success. */
router.post("/login-1", async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const result = await db.query(
      `SELECT password FROM users WHERE username = $1`,
      [username]);
    const user = result.rows[0];

    if (user) {
      if (await bcrypt.compare(password, user.password) === true) {
        return res.json({ message: "Logged in!" });
      }
    }
    throw new ExpressError("Invalid user/password", 400);
  } catch (err) {
    return next(err);
  }
});
```
