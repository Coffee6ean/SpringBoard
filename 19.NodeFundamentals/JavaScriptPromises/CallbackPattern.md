# The Callback Pattern: A Review -

## Asynchronous JavaScript: 
JavaScript runs synchronously, but there’s a way to handle async code: asynchronous callbacks.

```js
console.log("this prints first");

setTimeout(**function**() {
  console.log("this prints third, one second later");
}, 1000);

console.log("this prints second");
```

This code does not run “out of order.” However, the callback to ***setTimeout*** is not executed right away — it runs after the timer expires.

### Async + AJAX
When working with timers, you’ll need to manage asynchronous code.
A common scenario for managing asynchronous code is dealing with AJAX.
Let’s try to pull some data with jQuery, which utilizes callbacks (we’re just using this as an example since axios doesn’t support callbacks):

```js
let planet;

$.getJSON("https://swapi.dev/api/planets/1/", response => {
  planet = response;
});

console.log(planet);
```
- What is the value of planet?
- Why is it ***undefined***?!
- The ***console.log*** was synchronous; it ran before the asynchronous callback.

Let’s fix it!

```js
let planet;

$.getJSON.get("https://swapi.dev/api/planets/1/", response => {
  planet = response;
  console.log("done", planet);
});

console.log("waiting");
```
- Asynchronous callbacks run *after* the rest of the code
- Once you are inside the callback, the code executes predictably as per usual, (unless there are more async callbacks in there)

### Takeaways
- JS code is executed synchronously (in-order).
- JS can use special asynchronous callbacks to delay execution of code.
- Not all callbacks are async; you’ll have to consult their docs to tell.

**More on callbacks**
If you’d like to read more about JS callbacks: [MDN Callback Function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
