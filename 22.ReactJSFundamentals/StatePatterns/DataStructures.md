# Mutable Data Structures

So, we’ve just had primitive values (strings & numbers) in our state.
But state also stores things like objects & arrays.

```jsx
import React, { useState } from "react";
import NumberItem from "./NumberItem";

/** Renders & manages list of numbers.
 *
 * State:
 * - nums: array of numbers: [1, 2, 3, 4]
 */

function NumberList() {
  const [nums, setNums] = useState(
    [1, 2, 3, 4]
  );

  // Remove num. Passed to/called by child
  function removeNum(num) {
    setNums(nums.filter(n => n !== num));
  }

  const numsList = nums.map(n => (
    <NumberItem
      value={n}
      remove={removeNum}
    />)
  );

  return <ul>{numsList}</ul>;
}
// end

export default NumberList;
```

### Changing Mutable State
Just mutating a value in the state won’t work:

_demo/colorful-circles/src/BrokenColorfulCircles.js_
```jsx
function BrokenColorfulCircles() {
  const [circles, setCircles] = useState([]);

  function addCircle(newColor) {
    // FIXME: this doesn't work: without using setCircles,
    // component doesn't know that it needs to re-render
    circles.push(newColor);
  }

  return (
    <div>
      <ColorButtons addCircle={addCircle} />
      {circles.map((color, i) => (
        <Circle color={color} key={i} idx={i} />
      ))}
    </div>
  );
}
```

Pushing inside of the state setter also doesn’t work: React sees a reference to the same array in memory!

_demo/colorful-circles/src/StillBrokenColorfulCircles.js_
```jsx
function StillBrokenColorfulCircles() {
  const [circles, setCircles] = useState([]);

  function addCircle(newColor) {
    // FIXME still doesn't work: array reference is unchanged
    setCircles(circles => {
      circles.push(newColor);
      return circles;
    });
  }

  return (
    <div>
      <ColorButtons addCircle={addCircle} />
      {circles.map((color, i) => (
        <Circle color={color} key={i} idx={i} />
      ))}
    </div>
  );
}
```

You may find that sometimes your app works even though you are mutating the current state.

- However, We strongly recommend you don’t do this!
    - It makes it much harder to optimize your React app later
    - It can make debugging any state bugs harder

A better way is to make a new copy of the data structure:
_demo/colorful-circles/src/ColorfulCircles.js_
```jsx
function ColorfulCircles() {
  const [circles, setCircles] = useState([]);

  function addCircle(newColor) {
    // FIXED make a *new* array so reference changes
    setCircles(circles => [...circles, newColor]);
  }

  return (
    <div>
      <ColorButtons addCircle={addCircle} />
      {circles.map((circle, i) => (
        <Circle color={circle} key={i} idx={i} />
      ))}
    </div>
  );
}
```

This will let us later optimize our React apps/use advanced features.

<aside>
💡 **Affect Runtime!**

There is a slight efficiency cost due to the O(N) space/time required to make a copy, but it’s almost always worth it to ensure that your app doesn’t have extremely difficult to detect bugs due to side effects.

</aside>
