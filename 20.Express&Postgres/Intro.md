# Intro to Postgres with Node -

### The Node SQL Ecosystem
- ORMs
- Query builders
- SQL driver (what we will be using)
- You can [read more about](https://www.rithmschool.com/blog/different-approaches-express) it from the one and only Joel Burton!

## ***pg***:

### Scaffolding for Our Demo
_demo/simple/app.js_
```js
/** Express app for pg-intro-demo */

const express = require("express");
const app = express();
const ExpressError = require("./expressError");

// Parse request bodies for JSON
app.use(express.json());

const uRoutes = require("./routes/users");
app.use("/users", uRoutes);

// ... 404, global err handler, etc.
```

### ***pg***
- Similar to ***psycopg2*** with python
- Allows us to establish a connection to a database and execute SQL
```bash
$ npm install pg
```

### **Using *pg***
It’s common to abstract this logic to another file, so let’s create a file ***db.js***:
_demo/simple/db.js_
```js
/** Database setup for users. */

const { Client } = require("pg");

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql:///users_test";
} else {
  DB_URI = "postgresql:///users";
}

let db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;
```

### What did we just do?
- Specified a database to connect to
    - Depending on an environment variable we specify to use the test DB or not
    - We’re going to need this conditional logic later when we test!
- Established a connection
- Exported out the connection

## Queries:

### Making our first query

_demo/simple/routes/users.js_
```js
const db = require("../db");
```

_(results)_
```js
[nothing!]
```

_demo/simple/routes/users.js_
```js
/** Get users: [user, user, user] */

router.get("/all", function (req, res, next) {
  const results = db.query(
        `SELECT * FROM users`);

  return res.json(results.rows);
});
```

### What’s the bug here?
DB queries are asynchronous! We have to wait for the query to finish before.

### Fixing with async/await
_demo/simple/routes/users.js_
```js
/** (Fixed) Get users: [user, user, user] */

router.get("/", async function (req, res, next) {
  try {
    const results = await db.query(
          `SELECT id, name, type FROM users`);

    return res.json(results.rows);
  }

  catch (err) {
    return next(err);
  }
});
```

_(results)_
```js
[
  {
    "id": 1,
    "name": "Juanita",
    "type": "admin"
  },
  {
    "id": 2,
    "name": "Jenny",
    "type": "staff"
  },
  {
    "id": 3,
    "name": "Jeff",
    "type": "user"
  }
]
```

### API Example Continued: Search
_demo/simple/routes/users.js_
```js
/** Search by user type. */

router.get("/search", async function (req, res, next) {
  try {
    const type = req.query.type;
    
    const results = await db.query(
      `SELECT id, name, type 
       FROM users
       WHERE type='${type}'`);

    return res.json(results.rows);
  }

  catch (err) {
    return next(err);
  }
});
```

_(results for ‘staff’ type)_
```js
[{
  "id": 2,
  "name": "Jenny",
  "type": "staff"
}]
```

But there’s a problem…
