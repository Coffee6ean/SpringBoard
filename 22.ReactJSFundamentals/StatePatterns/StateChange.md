# Changing State

### **Changing State Review**

**Always** change the state using the second destructured value to ***.useState()***.

```jsx
const [data, setData] = useState(initialState);
```

- During the initial render, the returned state (data) is the same as the value passed as the first argument (initialState).
- The setData function is used to update the state. It accepts a new state value and enqueues a re-render of the component.
- The convention is to always name the second value **setX** where X is the name of the first value.

Normally, variables “disappear” when the function exits but state variables are preserved by React.

### **Setting State Using State**

Sometimes your new state depends on the value of your previous state.

_demo/simple-counter/src/SimpleCounter.js_
```jsx
function SimpleCounter() {
  const [num, setNum] = useState(0);
  function clickUp() {
    setNum(num + 1);
  }

  function clickUpBy2() {
    setNum(num + 1);
    setNum(num + 1);
  }

  return (
    <div>
      <h3>Count: {num}</h3>
      <button onClick={clickUp}>Up</button>
      <button onClick={clickUpBy2}>Up By 2</button>
    </div>
  );
}
```

What’s the problem here?

- Click on “Up” button: requests changing state from 0 → 1 **(ok!)**
- Click on “Up By 2” button:
    - First state change isn’t complete, just does 1 → 2 twice **(grrr!)**

If your new state depends on the previous state, you should use the *callback pattern* for ***useState***

The function returned by ***useState*** can accept a callback function.

The callback is called when all *already requested* state changes have finished.

It is passed the state as an argument & should return new state.

A better approach:
_demo/simple-counter/src/BetterSimpleCounter.js_
```jsx
function BestSimpleCounter() {
  const [num, setNum] = useState(0);
  function clickUp() {
    setNum(n => n + 1);
  }

  function clickUpBy2() {
    setNum(n => n + 1);
    setNum(n => n + 1);
  }

  return (
    <div>
      <h3>Count: {num}</h3>
      <button onClick={clickUp}>Up</button>
      <button onClick={clickUpBy2}>Up By 2</button>
    </div>
  );
}
```

Even better:
_demo/simple-counter/src/BestSimpleCounter.js_
```jsx
function BestSimpleCounter() {
  const [num, setNum] = useState(0);
  function clickUp() {
    setNum(n => n + 1);
  }

  function clickUpBy2() {
    setNum(n => n + 2);
  }

  return (
    <div>
      <h3>Count: {num}</h3>
      <button onClick={clickUp}>Up</button>
      <button onClick={clickUpBy2}>Up By 2</button>
    </div>
  );
}
```
