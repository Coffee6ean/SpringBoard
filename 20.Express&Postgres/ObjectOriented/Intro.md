# Database OO Design Patterns -

## Current Design:
_routes_
```js
/** get all cats: [{id, name, age}, ...] */

router.get("/", async function (req, res, next) {
  let result = await db.query("SELECT * FROM cats");
  let cats = result.rows;
  return res.json(cats)
});
```
It’s *ok*, but it’s better to get SQL out of routes

### Why No SQL In Routes?
- You tend to have lots of routes
    - So lots of copy-and-paste of similar SQL
- It’s nice to centralize validation, schema, etc
- Separation of concerns: routes should be about web-stuff

## Object Orientation:
Why do we use Object Orientation? To help organize our code.

### Abstraction
OO can offer **abstraction**, the ability to hide implementation details when they aren’t needed.
- Not everyone should have to understand everything
    - Only one person has to worry about SQL, validation, etc

### Encapsulation
OO can offer **encapsulation**, the ability to group functionality into larger logical pieces.
- To get in a “capsule”
    - Everything related to cat data/functionality lives in ***Cat***

### Polymorphism
OO can offer **polymorphism**, the ability to implement similar functionality in different classes.
- The ability to make similar things work similarly
    - We could have other kinds of animals with same API
    - For example, dogs and cats could both have a ***speak*** method, even though it behaves differently for different animals (“Meow” vs “Woof”)
