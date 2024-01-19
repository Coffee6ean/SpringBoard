# The async keyword -

### *async* Overview
- The ***async*** keyword is part of ES2017
- You can declare any function in JavaScript as ***async***
- ***async*** functions always return promises!
- Inside of an ***async*** function, you can write code that looks synchronous, even if it isn’t *(more on this later)*

### Our First *async* Example
_demo/async-examples.js_
```js
// not async, obvs
function friendlyFn() { 
  return "hello!!! omg so nice to meet you!"
}

friendlyFn();
// "hello!!! omg so nice to meet you!"
```

_demo/async-examples.js_
```js
// omg async
async function asyncFriendlyFn() {
  return "hello!!! omg so nice to meet you!"
}

asyncFriendlyFn();
// Promise {<resolved>: "hello!!! omg so nice to meet you!"}

asyncFriendlyFn().then(msg => console.log(msg));
// "hello!!! omg so nice to meet you!"
```

### Similar Behavior, Using Promises
_demo/async-examples.js_
```js
// omg async
async function asyncFriendlyFn() {
  return "hello!!! omg so nice to meet you!"
}

asyncFriendlyFn();
// Promise {<resolved>: "hello!!! omg so nice to meet you!"}

asyncFriendlyFn().then(msg => console.log(msg));
// "hello!!! omg so nice to meet you!"
```

_demo/async-examples.js_
```js
// similar behavior to async
function friendlyFnPromise() {
  return Promise.resolve("hello!!! omg so nice to meet you!")
}

friendlyFnPromise();
// Promise {<resolved>: "hello!!! omg so nice to meet you!"}

friendlyFnPromise().then(msg => console.log(msg));
// "hello!!! omg so nice to meet you!"
```

### What about Rejection?
- Inside of async functions, the return value is wrapped in a resolved promise.
- If you want to reject instead of resolve, simply throw an error inside of the async function!

**Rejection Example**
_demo/async-examples.js_
```js
async function oops() {
  throw "you shouldn't have invoked me!!"
}

oops();
// Promise {<rejected>: "you shouldn't have invoked me!!"}

oops().catch(err => console.log(err));
// "you shouldn't have invoked me!!"
```
