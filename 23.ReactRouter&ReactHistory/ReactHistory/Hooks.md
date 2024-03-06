# Hooks to the rescue! -

### Function Components
Function and class components appeared in React at the same time. However, function components originally could not contain state or make use of lifecycle methods.

Even with this limitation, function became popular when they could be used.

Using certain tools, such as ***redux***, also made it easier to build applications without needing many class components.

With the advent of hooks, we can now use function components all the time!

### Hooks Review
- Hooks are a new addition in React 16.8.
- They let you use state and other React features without writing a class.
- Hooks are functions that let you “hook into” React state and lifecycle features from function components.
- Hooks don’t work inside classes — they let you use React without classes.

### Fixing our previous issue with hooks
_demo/react-history-app/src/CounterHooks.js_
```jsx
import React, { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return [count, onIncrease, onDecrease];
};

const CounterHooks = () => {
  const [count, onIncrease, onDecrease] = useCounter();

  return (
    <div>
      <div>Current count: {count}</div>
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
};

export default CounterHooks;
```

### **How does this solve our problem?**

- Notice here, we’ve made our own little hook for a counter
- We can use this hook in any of our components and test it easily in isolation!
- No need for fancy patterns like render props or HOCs and no wrapper hell!
- Best of all, less lines of code to worry and reason about!

## How do hooks work?:

### Hooks Under the Hood
- We’ve seen how we can use hooks like ***useState*** and ***useRef*** to persist information across function calls.
- But how do hooks actually work?
- The secret is *closure*
    - (We’ll talk more about this in outcomes; this is just a quick overview.)

### What is Closure?
- The ability for inner functions to remember variables defined in outer functions, long after the outer function has returned
- Related to, but different from how *scope* works

### Scope Example

_demo/closure-example/closure.js_
```jsx
function justScope() {
  const secret = 42;

  function shareSecret() {
    return secret;
  }

  return shareSecret();
}

justScope(); // 42
```

### Scope vs. Closure

```jsx
function justScope() {
  const secret = 42;

  function shareSecret() {
    return secret;
  }

  return shareSecret();
}

justScope(); // 42
```

```jsx
function closureExample() {
  const secret = 42;

  function shareSecret() {
    return secret;
  }

  return shareSecret;
}

let shareFn = closureExample();
shareFn(); // 42
```

The inner function has access to ***secret***, even after the outer function has completed!

### Closure Comparison

```jsx
function closureExample() {
  const secret = 42;

  function shareSecret() {
    return secret;
  }

  return shareSecret;
}

let shareFn = closureExample();
shareFn(); // 42

function shareSecret() {
  return secret;
}

shareSecret(); // ReferenceError: secret is not defined
```

Even though ***shareFn*** and ***shareSecret*** look like the same function, one has access to ***secret*** while the other doesn’t.

### Updating Private Variables

```jsx
function changeableSecret() {
  let secret = 42;

  function shareSecret() {
    return secret;
  }

  function changeSecret(newSecret) {
    secret = newSecret;
  }

  return { shareSecret, changeSecret };
}

let shh = changeableSecret();
shh.shareSecret(); // 42
shh.changeSecret(43);
shh.shareSecret(); 42
```

### Hooks Revisited
Hooks work by using closure to store state, refs, etc.

You can see this with Babel! [Try it out](https://babeljs.io/repl) with this component:

```jsx
function Counter() {
  const [ count, setCount ] = useState(0);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count+1)}>Add</button>
    </div>
  );
}
```
