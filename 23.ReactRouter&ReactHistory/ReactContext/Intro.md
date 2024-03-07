# React Context -

## Motivation:

### What is Context?
- Universal data across your application
- Data accessible across all components

### Why is it useful?
- Prop drilling / tunneling
- Less repetition
- Useful for global themes, shared data

## Creating context:

_demo/counter/src/countContext.js_
```jsx
import React from "react";

const CountContext = React.createContext();

export default CountContext;
```

This gives us a component:

<UserContext.Provider> - allows you to provide a value to the context

### Provider
_demo/counter/src/CounterReadOnly.js_
```jsx
import React, { useState } from "react";
import Child from "./Child";
import CountContext from "./countContext";

function CounterReadOnly() {
  const [num, setNum] = useState(0);
  function up(evt) {
    setNum(oldNum => oldNum + 1);
  }

  return (
    <CountContext.Provider value={num}>
      <button onClick={up}>+1 (from parent)</button>
      <Child />
    </CountContext.Provider>
  );
}
```

- Any component inside of a Provider can subscribe to context value.
- In order to subscribe to the value, we need the ***useContext*** hook.
- Without explicitly subscribing, the value isn’t available to components farther down in the hierarchy.

### useContext
_demo/counter/src/GreatGrandReadOnly.js_
```jsx
import React, { useContext } from "react";
import CountContext from "./countContext";

function GreatGrandReadOnly() {
  const num = useContext(CountContext);

  return (
    <div>
      <p>I'm a great-grandchild!</p>
      <p>Here's the count: {num}.</p>
    </div>
  );
}
```

- ***useContext*** looks for the nearest matching context, and reads its value.
- When the value inside of context changes, components subscribing to that context will re-render.
- Components that read from context with ***useContext*** are sometimes called *consumers* (as opposed to providers).
