# Smarter OO Model -

- We can make a more traditional OO class
- You *will* instantiate it — once per dog!
- It will hold data specific to each dog
- It has static methods
    - To get all dogs, get a particular dog
- It has regular methods
- It’s like a mini-ORM

### Dogs
We’ll make a “smarter model” for dogs.
_Dog model_
```js
constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
```

### Getting All Dogs
_Dog model_
```js
/** get all dogs: returns [dog, ...] */

  static async getAll() {
    const result = await db.query(
        `SELECT id, name, age FROM dogs`);
    return result.rows.map(d => new Dog(d.id, d.name, d.age));
  }
```

_routes_
```js
/** get all dogs: [{id, name, age}, ...] */

router.get("/", async function (req, res, next) {
  let dogs = await Dog.getAll();
  return res.json(dogs);
});
```
We get Dog instances, but Express can turn them into JSON

### Getting A Dog
_Dog model_
```js
/** get dog by id: returns dog */

  static async getById(id) {
    const result = await db.query(
        `SELECT name, age FROM dogs WHERE id = $1`,
        [id]);

    if (result.rows.length === 0) {
      throw new Error(`No such dog: ${id}`);
    }

    let d = result.rows[0];
    return new Dog(id, d.name, d.age);
  }
```

_routes_
```js
/** get dog by id: {id, name, age} */

router.get("/:id", async function (req, res, next) {
  let dog = await Dog.getById(req.params.id);
  return res.json(dog);
});
```

### Creating a Dog
_Dog model_
```js
/** create a dog: returns dog */

  static async create(name, age) {
    const result = await db.query(
        `INSERT INTO dogs (name, age)
        VALUES ($1, $2) RETURNING id`,
        [name, age]);

    let { id } = result.rows[0];
    return new Dog(id, name, age);
  }
```

_routes_
```js
/** create dog from {name, age}: return id */

router.post("/", async function (req, res, next) {
  let id = await Dog.create(req.body.name, req.body.age);
  return res.json(id);
});
```

### Deleting a Dog
_Dog model_
```js
/** delete dog */

  async remove() {
    await db.query(
        `DELETE FROM dogs WHERE id = $1`,
        [this.id]);
  }
```

_routes_
```js
/** delete dog from {id}; returns "deleted" */

router.delete("/:id", async function (req, res, next) {
  let dog = await Dog.getById(req.params.id);
  await dog.remove();
  return res.json("deleted");
});
```
Notice: it’s just a method that acts on current dog!

### Aging a Dog
Now, we don’t need special functionality to age a dog.
We can just age on instance and ***.save()*** it!
_Dog model_
```js
async save() {
    await db.query(
        `UPDATE dogs SET name=$1, age=$2 WHERE id = $3`,
        [this.name, this.age, this.id]);
  }
```

_routes_
```js
/** age dog: returns new age */

router.post("/:id/age", async function (req, res, next) {
  let dog = await Dog.getById(req.params.id);
  dog.age += 1;
  await dog.save();
  return res.json(dog.age);
});
```

## Which Is Better?
- “Simple class” *(no data, only static methods)*
    - Can be easier to write class
    - Fewer SQL queries may fire (compare delete between ***Cat*** and ***Dog**)*
    - Doing more interesting things can be trickier
- “Smarter class” *(data, real methods)*
    - Real attributes can be handy!
    - Easier to do validation
    - Can do things like `cat.speak()` rather than `Cat.speak(id)`

### Are There ORMs For JavaScript?
Yes! There’s a nice one called [Sequelize](http://docs.sequelizejs.com/)
Not as popular as ORMs in other languages, though.
