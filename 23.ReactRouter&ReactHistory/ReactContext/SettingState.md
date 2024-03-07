# Setting State from a Consumer -

We can also pass state-setting functions into providers, so that any component using context can potentially set state on an ancestor.

### Example
_demo/counter/src/CounterReadWrite.js_
```jsx
import React, { useState } from "react";
import Child from "./Child";
import CountContext from "./countContext";

function CounterReadWrite() {
  const [num, setNum] = useState(0);
  function up(evt) {
    setNum(oldNum => oldNum + 1);
  }

  return (
    <CountContext.Provider value={{ num, up }}>
      <Child />
    </CountContext.Provider>
  );
}
```

_demo/counter/src/GreatGrandReadWrite.js_
```jsx
import React, { useContext } from "react";
import CountContext from "./countContext";

function GreatGrandReadWrite() {
  const { num, up } = useContext(CountContext);

  return (
    <div>
      <p>I'm a great-grandchild!</p>
      <p>Here's the count: {num}.</p>
      <button onClick={up}>
        +1 (from great-grandchild)
      </button>
    </div>
  );
}
```
