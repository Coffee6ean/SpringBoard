# Promises -

### What’s a Promise?
A promise is **one-time guarantee of future value**.

## Working with Promises:

### Our First Promise
*demo/app-axios.js*

```jsx
let url = "https://swapi.dev/api/planets/1/"
let ourFirstPromise = axios.get(url);
console.log(ourFirstPromise);
// Promise {<pending>}*
```

- ***axios*** is a promise based library for making HTTP requests.
- syntactically, it’s similar to the ***jQuery*** AJAX methods, but doesn’t use the callback pattern.

### What exactly is a Promise?
- Promises in JavaScript are objects
- They are native to the language as of ES2015
- A promise can be in one of three states:
    - *Pending* - It doesn’t yet have a value
    - *Resolved* - It has successfully obtained a value
    - *Rejected* - It failed to obtain a value for some reason
- The only way to access the resolved or rejected value is to chain a method on the end of the promise.

### ***.then* and *.catch***
- Promises provide a ***.then*** and a ***.catch***, which both accept callbacks.
- The callback to ***.then*** will run if the promise is resolved, and has access to the promise’s resolved value.
- The callback to ***.catch*** will run if the promise is rejected, and typically has access to some reason behind the rejection.

### Thenables
When reading about promises, you’ll often see a related term, called a **thenable**. A thenable is simply any object or function that has a ***then*** method defined on it.

By this definition, all promises are thenables, but not all thenables are promises! There are many more specifications that a promise needs to satisfy.

Here’s a simple example of a thenable that isn’t a promise:

```jsx
let notAPromise = {
  fruit: "apple",
  veggie: "carrot",
  then: () => {
    console.log("I'm just a random object with a then method.");
  }
};

notAPromise.then();
// "I'm just a random object with a then method."
```

### More Promise Examples
_demo/app-axios.js_
```js
let validURL = "https://swapi.dev/api/people/1/";
let futureResolvedPromise = axios.get(validURL);

futureResolvedPromise
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

_demo/app-axios.js_
```js
let invalidURL = "https://swapi.dev/api/tacos/1/";
let futureRejectedPromise = axios.get(invalidURL);

futureRejectedPromise
  .then(data => console.log(data))
  .catch(err => console.log(err));
```


