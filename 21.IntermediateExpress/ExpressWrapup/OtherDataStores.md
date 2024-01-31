# Other Common Data Stores -

### MongoDB
- A non-relational database *(often called NoSQL)*
    - Stores data as objects, not in tables
- Useful for unstructured data or recursive data
- More difficult to enforce integrity and join data together
- Good for large-scaling data where there isn’t much interconnectedness

<aside>
💡 Note: Check out [Michael’s blog post](https://www.rithmschool.com/blog/mongodb-is-easy) to get up and running with MongoDB.

</aside>

### Redis
- “Key/Value” store
    - Like a simple 2-column table
- Can be extremely fast and easy to scale
- Doesn’t have much security, transactions, integrity… by design
    - This helps make it fast & scalable
- Often used for “server-side caching”
    - Sometimes in front of a more traditional database

### PostgreSQL
- Nice try — we already know PostgreSQL!
- Oh, but there’s so many awesome things left!

### Querying Relationships

![pic1](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5c1ff064-58b4-4e5a-8705-fff442b2e331%2Fgraphviz-f4945cd83a90468d2743fad86742f3c197b58f95.svg?table=block&id=a5aa9614-eaf5-4058-99d9-016f56bd1537&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&userId=&cache=v2)

```sql
CREATE TABLE users (name TEXT PRIMARY KEY);

CREATE TABLE hobbies (id SERIAL PRIMARY KEY,
                      user_name TEXT REFERENCES users,
                      hobby TEXT);

INSERT INTO users VALUES ('elie'), ('matt');

INSERT INTO hobbies (user_name, hobby) VALUES
    ('elie', 'dancing'),
    ('elie', 'javascript'),
    ('matt', 'math'),
    ('matt', 'cooking');
```

If we want `{name, hobbies: [hobby, ...]}` …

- You could write a query and make the nested JSON in JS
- Or you could tell PostgreSQL to do it!

```sql
SELECT name, json_agg(hobby) AS hobbies
FROM users AS u
  JOIN hobbies AS h ON (u.name = h.user_name)
GROUP BY name;
```

| name | hobbies                   |
| ---- | ------------------------- |
| elie | [“dancing”, “javascript”] |
| matt | [“math”, “cooking”]       |
