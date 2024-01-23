# SQL Injection -

### What is SQL Injection?
A technique where an attacker tries to execute undesirable SQL statements on your database.
It’s a common attack, and it’s easy to be vulnerable if you aren’t careful!

### What’s the Problem?
If our search type is `"staff"`, everything works fine.
But what if our search type is `"bwah-hah'; DELETE FROM users; --"` ?
```js
SELECT id, type, name
FROM users
WHERE type='bwah-hah'; DELETE FROM users; --'
```

### Solution: Parameterized Queries
- To prevent against SQL injection, we need to sanitize our inputs
- ORMs typically do this for you automatically
- We can sanitize our inputs by using **parameterized queries**

<aside>
💡 **Note:** It’s not the most important part to understand, but if you’re curious how the ***pg*** module does this, it uses a feature called “prepared statements”.

Prepared statements are a database tool used to templatize and optimize queries you plan on running frequently. You’ve seen prepared statements already when we worked with SQLAlchemy in Flask, though we didn’t specifically call them out as such.

You don’t need to worry about the details, but because of the way that prepared statements work on the database level, they naturally protect against SQL injection. If you’re curious about the details, check out [this](https://en.wikipedia.org/wiki/Prepared_statement)article on Wikipedia.

</aside>

### API Example Continued: Create V2
Here’s the same approach, but safe from SQL injection.
_demo/simple/routes/users.js_
```js
// (Fixed) Search by user type. */

router.get("/good-search",
      async function (req, res, next) {
  try {
    const type = req.query.type;

    const results = await db.query(
      `SELECT id, name, type 
       FROM users
       WHERE type=$1`, [type]);

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

### Parameterized Queries Overview
- In your SQL statement, represent variables like ***$1***, ***$2***,***$3*** , etc.
    - You can have as many variables as you want
- For the second argument to ***db.query***, pass an array of values
    - ***$1*** will evaluate to the first array element, ***$2*** to the second, etc.
- **Note:** the variable naming is 1-indexed!
