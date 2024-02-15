# React State

### Core React Concepts
- component
    - building block of React
    - combines logic and presentation
- prop
    - data passed to a component *(or found via defaults)*
    - immutable; component cannot change its own props
- state
    - data specific to a component
    - can change!

### What common things belong in state
- Hiding or showing some data (toggling)
- Fetching data from an API (starts empty and changes to be populated)
- Themes, colors or styles that change based on an event
- When working with some information, ask yourself - will this ever change?
    - If so, it should be somewhere in state!

### State
In React, state is created using ***useState***

useState returns an array with two values

- What the piece of state is
- A function to change it

```jsx
const [mood, setMood] = useState("happy");
```

We are using array destructuring to extract the values from the result of ***useState***.

## Initial State:

To set initial state, do so in the component:
```jsx
import React, { useState } from "react";

function Person() {
  const [mood, setMood] = useState("happy");

  return(
    <div> Your mood is {mood} </div>
  );
}
```

- We import ***useState*** from React
- ***useState*** takes one argument - whatever you’d like the initial state to be
- You must call ***useState*** in the component
- You cannot call ***useState*** in loops or conditionals
- Try to do state initialization early in your function component

### Naming conventions
- The name of the hook is called ***useState***.
- We can call the return values from useState whatever we want.
- However, it’s conventional to go with “x” and “setX”.

## Changing State

- We’ll do this using our ***setMood*** function!
- Whatever we pass to this function will be the new value of ***mood***

```jsx
import React, { useState } from "react";

function Person() {
  const [mood, setMood] = useState("happy");

  return (
    <div>
      <div> Your mood is {mood} </div>
      <button onClick={() => setMood('excited')}> Change! </button>
    </div>
  );
}
```

We wrap the ***setMood*** call in an arrow function so that ***onClick*** receives a function.

### Click Rando

Let’s see another example!

_demo/click-me/src/random.js_
```js
/* get a random integer between 0 and max. */
function getRandom(max) {
  return Math.floor(Math.random() * max);
}

export { getRandom };
```

_demo/click-me/src/ClickRando.js_
```js
import React, { useState } from "react";
import { getRandom } from "./random";

/* A random number that changes. */
function ClickRando(props) {
  const max = props.maxNum;
  const [num, setNum] = useState(getRandom(max));

  return (
    <i onClick={() => setNum(getRandom(max))}>
      Click Rando: {num}
    </i>
  );
}

export default ClickRando;
```

### Multiple Pieces of State

You can call ***useState*** multiple times if a component needs multiple pieces of state.

_demo/click-me/src/Complex.js_
```js
import React, { useState } from "react";
import { getRandom } from "./random";

/** An example of a component with state/props/children. */

function Complex(props) {
  const [pushed, setPushed] = useState(false);
  const [num, setNum] = useState(getRandom(props.maxNum));

  function handleClick() {
    setPushed(true);
    setNum(getRandom(props.maxNum));
  }

  return (
    <button className="btn" onClick={handleClick}>
      <b>{pushed ? `Number: ${num}` : props.text}</b>
    </button>
  );
}

export default Complex;
```
