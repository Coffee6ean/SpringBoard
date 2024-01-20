# More CRUD Actions -

### API Example Continued: Create
_demo/simple/routes/users.js_
```js
/** Create new user, return user */

router.post("/", async function (req, res, next) {
  try {
    const { name, type } = req.body;

    const result = await db.query(
          `INSERT INTO users (name, type) 
           VALUES ($1, $2)
           RETURNING id, name, type`,
        [name, type]
    );

    return res.status(201).json(result.rows[0]);
  }

  catch (err) {
    return next(err);
  }
});
```

<aside>
💡 **Note:** Note that we use HTTP status code 201 (“Created”) here, not 200 (“Ok”).

Some APIs do return 200 for object-was-created, but the REST standard suggests 201 is the proper code here.

</aside>

### RETURNING clause
In SQL, for INSERT/UPDATE/DELETE, you can have a ***RETURNING*** clause.
This is to *return data* that was inserted, updated, or deleted:

```sql
INSERT INTO users (name, type) VALUES (...) RETURNING id, name;

INSERT INTO users (name, type) VALUES (...) RETURNING *;
```

<aside>
⚠️ It’s typically a bad idea to use `SELECT *` or `RETURNING *` in the SQL used in applications. That returns all columns and, if new sensitive columns were added after the code was written, it would risk returning that sensitive data.

It’s far better to explicitly list the columns that should be selected or returned.

</aside>

### API Example Continued: Update
_demo/simple/routes/users.js_
```js
/** Update user, returning user */

router.patch("/:id", async function (req, res, next) {
  try {
    const { name, type } = req.body;

    const result = await db.query(
          `UPDATE users SET name=$1, type=$2
           WHERE id = $3
           RETURNING id, name, type`,
        [name, type, req.params.id]
    );

    return res.json(result.rows[0]);
  }

  catch (err) {
    return next(err);
  }
});
```

### API Example Continued: Delete
_demo/simple/routes/users.js_
```js
/** Delete user, returning {message: "Deleted"} */

router.delete("/:id", async function (req, res, next) {
  try {
    const result = await db.query(
        "DELETE FROM users WHERE id = $1",
        [req.params.id]
    );

    return res.json({message: "Deleted"});
  }

  catch (err) {
    return next(err);
  }
});
```

### Committing
With SQLAlchemy, you had to commit after all changes — because SQLAlchemy put all work into a db transaction.
That isn’t the case with ***pg*** — so you don’t need to explicitly commit (each INSERT/UPDATE/DELETE commits automatically)
