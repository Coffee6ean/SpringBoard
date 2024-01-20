# Testing our Database -

### Adding a test database
We’re going to need a different database for testing, so let’s configure that!
_demo/cats-api/db.js_
```js
/** Database setup for cats. */
const { Client } = require("pg");

const DB_URI = (process.env.NODE_ENV === "test")
  ? "postgresql:///cats_test"
  : "postgresql:///cats";

let db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;
```

### Running Tests
Make sure you create test database first, otherwise they will hang.

```bash
$ createdb cats_test
$ psql cats_test < data.sql
```

Once you have database, run your tests as usual with ***jest***

### Setting Up and Tearing Down the test suite
Make sure we’re using test DB for our tests:
_demo/cats-api/routes/cats.test.js_
```js
// connect to right DB --- set before loading db.js
process.env.NODE_ENV = "test";

// npm packages
const request = require("supertest");

// app imports
const app = require("../app");
const db = require("../db");
```

Setup at beginning:
_demo/cats-api/routes/cats.test.js_
```js
let testCat;

beforeEach(async function() {
  let result = await db.query(`
    INSERT INTO
      cats (name) VALUES ('TestCat')
      RETURNING id, name`);
  testCat = result.rows[0];
});
```

Teardown at end:
_demo/cats-api/routes/cats.test.js_
```js
afterEach(async function() {
  // delete any data created by test
  await db.query("DELETE FROM cats");
});

afterAll(async function() {
  // close db connection
  await db.end();
});
```

## Testing CRUD Actions:

### Our Restful JSON API
What routes do we need for a RESTful JSON API with full CRUD on cats? (ZOMG so many acryonyms.)

| HTTP Verb   | Route     | Response         |
| ------------| --------- | ---------------- |
| GET         | /cats     | Display all cats |
| GET         | /cats/:id | Display a cat    |
| POST        | /cats     | Create a cat     |
| PUT / PATCH | /cats/:id | Update a cat     |
| DELETE      | /cats/:id | Delete a cat     |

### Testing Read
_demo/cats-api/routes/cats.test.js_
```js
/** GET /cats - returns `{cats: [cat, ...]}` */

describe("GET /cats", function() {
  test("Gets a list of 1 cat", async function() {
    const response = await request(app).get(`/cats`);
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({
      cats: [testCat]
    });
  });
});
```

_demo/cats-api/routes/cats.test.js_
```js
/** GET /cats/[id] - return data about one cat: `{cat: cat}` */

describe("GET /cats/:id", function() {
  test("Gets a single cat", async function() {
    const response = await request(app).get(`/cats/${testCat.id}`);
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({cat: testCat});
  });

  test("Responds with 404 if can't find cat", async function() {
    const response = await request(app).get(`/cats/0`);
    expect(response.statusCode).toEqual(404);
  });
});
```

### Testing Create
_demo/cats-api/routes/cats.test.js_
```js
/** POST /cats - create cat from data; return `{cat: cat}` */

describe("POST /cats", function() {
  test("Creates a new cat", async function() {
    const response = await request(app)
      .post(`/cats`)
      .send({
        name: "Ezra"
      });
    expect(response.statusCode).toEqual(201);
    expect(response.body).toEqual({
      cat: {id: expect.any(Number), name: "Ezra"}
    });
  });
});
```

### Testing Update
_demo/cats-api/routes/cats.test.js_
```js
/** PATCH /cats/[id] - update cat; return `{cat: cat}` */

describe("PATCH /cats/:id", function() {
  test("Updates a single cat", async function() {
    const response = await request(app)
      .patch(`/cats/${testCat.id}`)
      .send({
        name: "Troll"
      });
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({
      cat: {id: testCat.id, name: "Troll"}
    });
  });

  test("Responds with 404 if can't find cat", async function() {
    const response = await request(app).patch(`/cats/0`);
    expect(response.statusCode).toEqual(404);
  });
});
```

### Testing Delete
_demo/cats-api/routes/cats.test.js_
```js
/** DELETE /cats/[id] - delete cat,
 *  return `{message: "Cat deleted"}` */

describe("DELETE /cats/:id", function() {
  test("Deletes a single a cat", async function() {
    const response = await request(app)
      .delete(`/cats/${testCat.id}`);
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({ message: "Cat deleted" });
  });
});
```

## Looking Ahead:

### Coming Up
- Associations with pg
- Building our own lightweight ORM!
