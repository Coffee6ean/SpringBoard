# One to Many Relationships -

![pic1](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F453c94fc-101c-4380-b757-e2196df9ec00%2Fgraphviz-3467e6f8d2d6b809e1a8365077ab46df5e924273.svg?table=block&id=296713eb-7cf1-4558-8bd8-b41cd09f30cf&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&userId=&cache=v2)

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users,
    msg TEXT NOT NULL
);
```

We want our API to include:

### GET /users/1
Return detail of user *and* list of message:
```js
{
  name: "Juanita",
  type: "admin",
  messages: [
    {id: 1, msg: 'msg #1'},
    {id: 2, msg: 'msg #2'}
  ]
}
```

### GET */users/[id]* With Messages
_demo/routes/users.js_
```js
/** Get user: {name, type, messages: [{msg, msg}]} */

router.get("/:id", async function (req, res, next) {
  try {
    const userRes = await db.query(
          `SELECT name, type FROM users WHERE id=$1`,
        [req.params.id]);

    const messagesRes = await db.query(
          `SELECT id, msg FROM messages 
             WHERE user_id = $1`,
        [req.params.id]);

    const user = userRes.rows[0];
    user.messages = messagesRes.rows;
    return res.json(user);
  }

  catch (err) {
    return next(err);
  }
});
```

(results)
```js
{
  name: "Juanita",
  type: "admin",
  messages: [
    {id: 1, msg: 'msg #1'},
    {id: 2, msg: 'msg #2'}
  ]
}
```
We just add property on user and populate with messages!

<aside>
💡 **Note**: For ease of readability, we’ve awaited two database queries sequentially in the above code example. We could have just as easily run these queries in parallel by wrapping them in a `Promise.all`, since the message query doesn’t depend on the result of the user query.

You might also be wondering why we don’t use a join, and simply make one request to the database. What would be some advantages to using this approach? What might some disadvantages be?

</aside>
