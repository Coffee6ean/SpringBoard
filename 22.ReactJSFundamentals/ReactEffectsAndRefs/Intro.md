# React Effects and Refs

## useEffect:

- React comes with a built in hook for “side effects”
- Fetching data, starting a timer, and manually changing the DOM are all side effects
- Each render has its own effects
- Sometimes these effects require clean-up (clearing a timeout, closing a connection)
- ***useEffect*** will run after the first render
- ***useEffect*** will run after all rerenders by default
- ***useEffect*** accepts a callback function as its first argument
- ***useEffect*** returns undefined or a function
    - If you return a function, the function will be run before the component unmounts or before the effect runs again

_demo/counter-effects/src/EffectExample.js_
```jsx
import React, { useState, useEffect } from "react";

function EffectExample() {
  const [num, setNum] = useState(0);

  function increment(evt) {
    setNum(n => n + 1);
  };

  useEffect(function setTitleOnRerender() {
    document.title = `WOW${"!".repeat(num)}`;
  });

  return (
    <div>
      Let's get excited.
      <button onClick={increment}>Get more excited.</button>
    </div>
  );
}
```

## useEffect arguments:

### 2nd argument to useEffect
- You can tell React to skip applying an effect if certain values haven’t changed between re-renders.
- ***useEffect*** accepts an array as its second argument where you place these values (also called dependencies)
- What you pass to the array can help avoid performance issues (we’ll talk about this more later)

If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument.

This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.

Be careful about using this pattern when your effect *does* depend on props or state, as React will give you a warning.
