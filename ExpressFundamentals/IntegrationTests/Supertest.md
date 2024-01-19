# Integration Tests in Express: Setup -

### Integration Tests
- Making sure the parts work together
- Essential to have along with unit tests!
- More involved than unit tests

### Integration Tests with Supertest
- A library for testing Express applications
- Our tool for integration testing
- Like Flask’s test client: can make requests against app in tests
- Docs: https://github.com/visionmedia/supertest

### Installing Supertest
`$ **npm i --save-dev supertest**`

### Creating a server.js
- To create a test client, we are going to need our ***app*** variable from ***app.js***
- Right now we are combining logic to create the ***app*** variable and start the server all in one file
- To ensure we don’t start the server when we import our ***app*** variable in our tests, we’re going to move out our ***app.listen*** code into a file called ***server.js***
- We’re also going to export our ***app*** variable in ***app.js***

### What our app.js looks like
_demo/supertest-demo/app.js_
```js
/** general error handler */

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

module.exports = app;
```

### What our server.js looks like
_demo/supertest-demo/server.js_
```js
const app = require("./app")

app.listen(3000, function(){
  console.log("Server starting on port 3000")
})
```

### The application we are going to be building
- A simple API for CRUD on cats!
- We’re going to be using an array for storage
- We’ll move that logic into a file called ***fakeDb.js***

_demo/supertest-demo/fakeDb.js_
```js
global.cats = [];

module.exports = cats;
```

### What our test setup looks like
_demo/supertest-demo/routes/cats-routes.test.js_
```js
process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("../app");
let cats = require("../fakeDb");

let pickles = { name: "Pickles" };

beforeEach(function() {
  cats.push(pickles);
});

afterEach(function() {
  // make sure this *mutates*, not redefines, `cats`
  cats.length = 0;
```

### What should I test?
- Getting all cats
- Getting a single cat
    - What finding successfully looks like
    - What happens when it is not found
- Deleting a cat
    - What deleting successfully looks like
    - What happens when it is not found
- Adding a cat
    - What creating successfully looks like
    - What happens when you create a duplicate cat
    - What happens when you are missing required data

### Testing Reading
_demo/supertest-demo/routes/cats-routes.test.js_
```js
/** GET /cats - returns `{cats: [cat, ...]}` */

describe("GET /cats", function() {
  test("Gets a list of cats", async function() {
    const resp = await request(app).get(`/cats`);
    expect(resp.statusCode).toBe(200);

    expect(resp.body).toEqual({cats: [pickles]});
  });
});
```

### Testing Creating
_demo/supertest-demo/routes/cats-routes.test.js_
```js
/** POST /cats - create cat from data; return `{cat: cat}` */

describe("POST /cats", function() {
  test("Creates a new cat", async function() {
    const resp = await request(app)
      .post(`/cats`)
      .send({
        name: "Ezra"
      });
    expect(resp.statusCode).toBe(201);
    expect(resp.body).toEqual({
      cat: { name: "Ezra" }
    });
  });
});
```

### Testing Updating
_demo/supertest-demo/routes/cats-routes.test.js_
```js
/** PATCH /cats/[name] - update cat; return `{cat: cat}` */

describe("PATCH /cats/:name", function() {
  test("Updates a single cat", async function() {
    const resp = await request(app)
      .patch(`/cats/${pickles.name}`)
      .send({
        name: "Troll"
      });
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      cat: { name: "Troll" }
    });
  });

  test("Responds with 404 if id invalid", async function() {
    const resp = await request(app).patch(`/cats/0`);
    expect(resp.statusCode).toBe(404);
  });
});
```

### Testing Deleting
_demo/supertest-demo/routes/cats-routes.test.js_
```js
/** DELETE /cats/[name] - delete cat,
 *  return `{message: "Cat deleted"}` */

describe("DELETE /cats/:name", function() {
  test("Deletes a single a cat", async function() {
    const resp = await request(app).delete(`/cats/${pickles.name}`);
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({ message: "Deleted" });
  });
});
```

### Debugging your tests
- You can always **console.log** inside of your test files
- If you’d like to use the chrome dev tools, write the following:
    - `node --inspect-brk $(which jest) --runInBand NAME_OF_FILE`

### Coming Up
- Adding PostgreSQL to Express
- Testing using a Database
