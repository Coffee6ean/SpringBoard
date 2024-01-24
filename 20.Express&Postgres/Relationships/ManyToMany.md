# Many to Many Relationships -

![pic1](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F029c4fcd-74ff-4186-beb6-82d6d5f96af3%2Fgraphviz-b6afe5142389750462cdbfefe1a467c590e080d1.svg?table=block&id=409735c8-2014-43f6-97ac-787f18c7f7cb&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&userId=&cache=v2)

```sql
CREATE TABLE tags (
    code TEXT PRIMARY KEY,
    tag TEXT UNIQUE
);

CREATE TABLE messages_tags (
    message_id INTEGER NOT NULL REFERENCES messages,
    tag_code TEXT NOT NULL REFERENCES tags,
    PRIMARY KEY(message_id, tag_code)
);
```

We want our API to include:

### GET /messages/1
Return info about message *and* associated tag names:
```js
{
  id: 1,
  msg: "msg #1",
  tags: ["Python", "JavaScript"]
}
```

### What about this query?
```sql
SELECT m.id, m.msg, t.tag
  FROM messages AS m
    LEFT JOIN
      messages_tags AS mt
    ON m.id = mt.message_id
    LEFT JOIN
      tags AS t
    ON mt.tag_code = t.code
  WHERE m.id = 1;
```

| id  | msg    | tag        |
| --- | ------ | ---------- |
| 1   | msg #1 | Python     |
| 1   | msg #1 | JavaScript |

### Restructuring This Data
we get from database
```sql
[
  {id: 1, msg: "msg #1", tag: "Python"},
  {id: 1, msg: "msg #1", tag: "JavaScript"},
]
​
```

we want to return:
```json
{
  id: 1,
  msg: "msg #1",
  tags: ["Python", "JavaScript"]
}
```

```jsx
]
```

*we want to return*

```jsx
{
  id: 1,
  msg: "msg #1",
  tags: ["Python", "JavaScript"]
}
```

_demo/routes/messages.js_
```js
/** Get message: {id, msg tags: [name, name]} */

router.get("/:id", async function (req, res, next) {
  try {
    const result = await db.query(
          `SELECT m.id, m.msg, t.tag
                FROM messages AS m
                    LEFT JOIN messages_tags AS mt 
                        ON m.id = mt.message_id
                    LEFT JOIN tags AS t ON mt.tag_code = t.code
                WHERE m.id = $1;`, [req.params.id]);

    let { id, msg } = result.rows[0];
    let tags = result.rows.map(r => r.tag);

    return res.json({ id, msg, tags });
  }

  catch (err) {
    return next(err);
  }
});
```

<aside>
💡 **Note**: Remember, if this code starts to become too hard to track, you can use the ***debugger*** to pause code execution and see what’s going on!

</aside>

<aside>
💡 **Note**: When it comes to handling these many-to-many relationships, you’ll find that you often need to manipulate arrays of objects in JavaScript. There are many helper libraries with utilities that can assist with this process (such as [lodash](https://lodash.com/) or [underscore](https://underscorejs.org/)), but for now, we’ll focus on writing all of the business logic ourselves.

</aside>

## Handling Missing Resources:
We want:

### PUT /messages/[id]
Given `{msg}`, updates DB & return `{id, user_id, msg}`
_demo/routes/messages.js_
```js
/** Update message: {msg} => {id, user_id, msg} */

router.put("/:id", async function (req, res, next) {
  try {
    const result = await db.query(
          `UPDATE messages SET msg=$1 WHERE id = $2
           RETURNING id, user_id, msg`,
        [req.body.msg, req.params.id]);

    return res.json(result.rows[0]);
  }

  catch (err) {
    return next(err);
  }
});
```

Just returns ***undefined*** if not found!

_(works, but requires two queries)_
```js
/** Update message #2: {msg} => {id, user_id, msg} */

router.put("/v2/:id", async function (req, res, next) {
  try {
    const checkRes = await db.query(
        `SELECT id FROM messages WHERE id = $1`,
        [req.params.id]);

    if (checkRes.rows.length === 0) {
      throw new ExpressError("No such message", 404);
    }

    const result = await db.query(
          `UPDATE messages SET msg=$1 WHERE id = $2,
           RETURNING id, user_id, msg`,
        [req.body.msg, req.params.id]);

    return res.json(result.rows[0]);
  }

  catch (err) {
    return next(err);
  }
});
```

_(same thing, but with one query)_
```js
/** Update message #3: {msg} => {id, user_id, msg} */

router.put("/v3/:id", async function (req, res, next) {
  try {
    const result = await db.query(
          `UPDATE messages SET msg=$1 WHERE id = $2
           RETURNING id, user_id, msg`,
        [req.body.msg, req.params.id]);

    if (result.rows.length === 0) {
      throw new ExpressError("No such message!", 404);
    }

    return res.json(result.rows[0]);
  }

  catch (err) {
    return next(err);
  }
});
```
