# Events in React

### DOM vs. React
- React events are *camelCase*, rather than *lowercase*.
- With JSX you pass a function as event handler, rather than a string.

### Example
```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

Is slightly different in React:

```html
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

### Event Attributes
Any event you can listen for in JS, you can listen for in React.

Examples:
- Mouse events: `onClick`, `onMouseOver`, etc
- Form events: `onSubmit`, etc
- Keyboard events: `onKeyDown`, `onKeyUp`, `onKeyPress`
- [Full list](https://reactjs.org/docs/events.html#supported-events)

### An example in a component
_demo/click-me/src/GoodClick.js_
```html
import React from "react";

function handleClick() {
  console.log("GoodClick clicked!");
}

function GoodClick() {
  return (
    <button onClick={handleClick}>
      GoodClick
    </button>
  );
}

export default GoodClick;
```

```html
export default GoodClick;
```

### Functions vs. Invocations
Remember: event listeners expect to receive *functions* as values.

Don’t invoke your function when you pass it! 

❌ _demo/click-me/src/BrokenClick.js_
```jsx
function handleClick() {
  console.log("BrokenClick clicked!");
}

function BrokenClick() {
  return (
    <button onClick={handleClick()}>
      BrokenClick
    </button>
  );
}
```

✅ _demo/click-me/src/GoodClick.js_
```jsx
function handleClick() {
  console.log("GoodClick clicked!");
}

function GoodClick() {
  return (
    <button onClick={handleClick}>
      GoodClick
    </button>
  );
}
```
