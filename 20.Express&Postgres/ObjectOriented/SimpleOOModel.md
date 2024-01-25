# Simple OO Model -

- We can make a single class for “all cat-related functions”
- It *won’t* hold data
- You won’t ever instantiate it!
- All the methods are static (called on ***Cat*** )
- Benefit: help organization, gets SQL out of routes

### Getting All Cats
_Cat model_
```js
/** get all cats: returns [{id, name, age}, ...] */

  static async getAll() {
    const result = await db.query(
        "SELECT id, name, age FROM cats");
    return result.rows;
  }
```
(that’s a method inside class ***Cat***)

_routes_
```js
/** (fixed) get all cats: [{id, name, age}] */

router.get("/", async function (req, res, next) {
  let cats = await Cat.getAll();
  return res.json(cats);
});
```

### Getting A Cat
_Cat model_
```js
/** get cat by id: returns {name, age} */

  static async getById(id) {
    const result = await db.query(
        `SELECT name, age FROM cats WHERE id = $1`,
        [id]);

    if (result.rows.length === 0) {
      throw new Error(`No such cat: ${id}`);
    }

    return result.rows[0];
  }
```

_routes_
```js
/** get cat by id: {id, name, age} */

router.get("/:id", async function (req, res, next) {
  let cat = await Cat.getById(req.params.id);
  return res.json(cat);
});
```

### Creating a Cat
_Cat model_
```js
/** create a cat: returns {name, age} */

  static async create(name, age) {
    const result = await db.query(
        `INSERT INTO cats (name, age)
        VALUES ($1, $2) RETURNING name, age`,
        [name, age]);

    return result.rows[0];
  }
```

_routes_
```js
/** create cat from {name, age}: return {name, age} */

router.post("/", async function (req, res, next) {
  let cat = await Cat.create(req.body.name, req.body.age);
  return res.json(cat);
});
```

### Deleting a Cat
_Cat model_
```js
/** delete cat with given id */

  static async remove(id) {
    const result = await db.query(
        `DELETE FROM cats WHERE id=$1 RETURNING id`,
        [id]);

    if (result.rows.length === 0) {
      throw new Error(`No such cat: ${id}`);
    }
  }
```

_routes_
```js
/** delete cat from {id}; returns "deleted" */

router.delete("/:id", async function (req, res, next) {
  await Cat.remove(req.params.id);
  return res.json("deleted");
});
```

### Aging a Cat
What if we want to do something special? Like, age a cat by one year?
_Cat model_
```js
/** age cat by 1 year, return new age */

  static async makeOlder(id) {
    const result = await db.query(
        `UPDATE cats SET age=age+1 WHERE id=$1 RETURNING age`,
        [id]);

    if (result.rows.length === 0) {
      throw new Error(`No such cat: ${id}`);
    }

    return result.rows[0].age;
  }
}
```

_routes_
```js
/** age cat: returns new age */

router.post("/:id/age", async function (req, res, next) {
  let newAge = await Cat.makeOlder(req.params.id);
  return res.json(newAge);
});
```

Meh. Annoying to have to make special function.
We could make a special “update-data” function.
