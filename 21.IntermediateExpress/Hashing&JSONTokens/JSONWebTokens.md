# JSON Web Tokens -

### Authentication in Flask
- Make request with username/password to login route
- Server authenticates & puts user info session
    - Session is encoded & signed with Flask-specific scheme
- Session info is sent back to browser in cookie
- Session info is automatically resent with every request via cookie
- This works well for traditional web apps & is straightforward to do
- What if
    - We didn’t want to send auth info with certain requests?
    - We wanted to share authentication info across multiple APIs / hostnames?
- We’ll use a more API-server friendly process!

### Authentication Via Tokens
For our Express API apps, we’ll handle authentication differently:
- Make request with username/password to AJAX login route
- Server authenticates & returns token in JSON
    - Token is encoded & signed with open standard, “JSON Web Token”
- Front-end JavaScript receives token & stores *(in var or localStorage)*
- For every future request, browser sends token in request
    - Server gets token from request & validates token

### JSON Web Tokens

[Homepage of JSON Web Tokens](https://jwt.io/)

JWTs are an open standard and are implemented across technology stacks, making it simple to share tokens across different services.

JWTs can store any arbitrary “payload” of info, which are “signed” using a secret key, so they can be validated later (similar to Flask’s session).

The JWT token itself is a string comprising three parts:

- **Header:** metadata about token *(signing algorithm used & type of token)*
- **Payload:** data to be stored in token *(typically an object)*
    - Often, this will store things like the user ID
    - This is *encoded*, not *encrypted* — don’t put secret info here!
- **Signature:** version of header & payload, signed with secret key
    - Uses algorithm specified in header *(we’ll use default, “HMAC-SHA256”)*

<aside>
💡 **Note:** JWTs do the same process as a Flask session: encode the payload and sign it using a secret key. Flask’s built-in session uses a Flask-specific encoding and signing algorithm, but there are add-on products for Flask to use JWTs as the encoding/signing scheme for sessions.

The bigger difference is in how this is transmitted: Flask’s standard sessions are transmitted via cookies, so they are passed automatically between the server and the browser. The JWT standard isn’t involved itself with when a how tokens are sent — this is up to the application developer. We’ll be doing so by sending these in the request manually, and retrieving them manually from the request in the server.

None of this is inherently specific to Flask or Express — there are cookie-based authentication add-ons for Express, and there are JWT libraries for Python, so Flask could emit JWTs for API-based server.

For more information, here’s a good [discussion of JWTs versus server-side sessions](https://stackoverflow.com/questions/43452896/authentication-jwt-usage-vs-session).

</aside>

### Creating Tokens
**jwt.sign(*payload*, *secret-key*, *jwt-options*)**
- ***payload***: object to store as payload of token
- ***secret-key***: secret string used to “sign” token
- ***jwt-options*** is optional object of settings for making the token

This returns the token (a string).

```js
const jwt = require("jsonwebtoken");

const SECRET_KEY = "oh-so-secret";
const JWT_OPTIONS = { expiresIn: 60 * 60 };  // 1 hour

let payload = {username: "jane"};
let token = jwt.sign(payload, SECRET_KEY, JWT_OPTIONS);
```

### Decoding / Verifying Tokens

| JWT method                    | Description                                                                                                    |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------- |
| jwt.decode(token)             | Return the payload from the token (works without secret key. Remember, the tokens are signed, not enciphered!) |
| jwt.verify(token, secret-key) | Verify token signature and return payload is valid. If not, raise error.                                       |

```js
jwt.decode(token);               // {username: "jane"}

jwt.verify(token, SECRET_KEY);   // {username: "jane"}

jwt.verify(token, "WRONG");      // error!
```
