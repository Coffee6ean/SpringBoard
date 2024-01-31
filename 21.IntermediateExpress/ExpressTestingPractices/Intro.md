# Express Testing Practices -

## Good Testing Practices:

- Make sure you write tests!
- Don’t get too attached to coverage percentages
- Make sure in your readme you specify how to run the tests!

### Seeing tests in action
```js
/** POST /cats - create cat from data; return `{cat: cat}` */

describe("POST /cats", function () {
  test("Creates a new cat", async function () {
    const response = await request(app)
      .post(`/cats`)
      .send({
        name: "Ezra"
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({
      cat: { name: "Ezra" }
    });
  });
});
```
- We’re not testing if we actually created anything!
- How should we test this? What do we test?

### One option
```js
/** POST /cats - create cat from data; return `{cat: cat}` */

describe("POST /cats", function () {
  test("Creates a new cat", async function () {
    const response = await request(app)
      .post(`/cats`)
      .send({
        name: "Ezra"
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({
      cat: { name: "Ezra" }
    });

    const catsQuery = await db.query("SELECT name FROM cats;")
    expect(catsQuery.rows[0]).toEqual({ name:"Ezra" });
    expect(catsQuery.rows).toHaveLength(1);
  });
});
```

### A better way to test
```js
/** POST /cats - create cat from data; return `{cat: cat}` */
describe("POST /cats",asyncfunction () {
  test("Creates a new cat",asyncfunction () {
    const response =await request(app)
      .post(`/cats`)
      .send({
        name: "Ezra"
    });
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({
      cat: { name: "Ezra" }
    });

    const getCatsResponse =await request(app).get(`/cats`)
    expect(response.body[0]).toEqual({ name:"Ezra" });
    expect(response.body).toHaveLength(1);
  });
});
```
- Instead of testing the database, test the API
- Stay consistent with what you are testing
