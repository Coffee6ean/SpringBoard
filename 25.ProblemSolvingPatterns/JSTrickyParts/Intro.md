# JS The Tricky Parts -

## Goals:

- Introduce and review some of the more complex concepts in JS
- Make sure you’re ready for interview questions!

## JS The Must-Know Parts:

- Array / String / Object / Number methods
- type checking / conversion
- JS operators (`==` vs `===`) etc.

### Asynchronous Code
- AJAX
- XHR / Fetch
- Callbacks / Promises / Async Await

## JS The Tricky Parts:

### Closures
- The ability for inner functions to remember variables defined in outer functions, long after the outer function has returned
- Useful for encapsulating logic and creating private variables

### An Example

```jsx
function idGenerator() {
  let start = 0;
  return function generate() {
    start++;
    return start;
  };
}
```

- Can you spot the closure?

### IIFE
Immediately Invoked Function Expression

```jsx
(function() {
  console.log('just ran!');
})();
```

- Useful for scoping something right away and protecting the global namespace

### IIFE + Closure

```jsx
const $ = (function() {
  const version = '3.1.4';
  return {
    displayVersion() {
      return version;
    },
    html(elem) {
      return document.querySelector(elem).innerHTML;
    }
  };
})();
```

- Can you spot the closure?
