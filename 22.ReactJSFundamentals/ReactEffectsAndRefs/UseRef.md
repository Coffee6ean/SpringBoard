# useRef

- ***useRef*** is another built-in hook in React.
- It returns a mutable object with a key of ***current***, whose value is equal to the initial value passed into the hook.
- The object persists across renders (so it’s like a local variable, but independent of state).
- Mutating the object does not trigger a re-render.

### Common Applications of useRef
1. Accessing an underlying DOM element
2. Setting up / clearing timers

### Accessing the DOM
Sometimes, you need to access an HTMLElement to make use of a Web API or to integrate some other JavaScript library.

This is a great time to use a ref!

### Accessing the DOM Example
_demo/refs-app/src/Video.js_
```jsx
import React, { useState, useRef, useEffect } from "react";

function Video({
  src = "https://media.giphy.com/media/KctGIT2JHvVRC7ESeR/giphy.mp4"
}) {
  const video = useRef();
  const [speed, setSpeed] = useState(1);

  useEffect(function adjustPlaybackRateOnVideo() {
    // video.current is the video HTML Element
    // video elements have a .playbackRate
    // that allow you to speed up / slow down a video
    video.current.playbackRate = speed;
  }, [video, speed]);

  return (
    <div>
      <video muted autoPlay loop ref={video}>
        <source src={src} />
      </video>
      <div>
        <button onClick={evt => setSpeed(s => s / 2)}>slow</button>
        <button onClick={evt => setSpeed(s => s * 2)}>fast</button>
        <p>Current speed: {speed}x</p>
      </div>
    </div>
  );
}
```

- ***.playbackRate*** can only be changed if you have access to the underlying HTML element.
- A ref can get us access to the DOM element!
- To assign a ref to a DOM element, use the ***ref*** attribute on the desired element.

### Timers
Another great time to use a ref is with timers like ***setInterval***.

***setInterval*** returns a timer ID, which we need to stop the ***setInterval*** from running.

We can store that ID in a ref, and then stop the timer when the component is removed from the DOM.

### Timer Example
_demo/refs-app/src/TimerWithRef.js_
```jsx
import React, { useState, useEffect, useRef } from "react";

function TimerWithRef() {
  const timerId = useRef();
  let [count, setCount] = useState(0);

  useEffect(function setCounter() {
    console.log("EFFECT RAN!");
    timerId.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return function cleanUpClearTimer() {
      console.log("Unmount ID", timerId.current);
      clearInterval(timerId.current);
    };
  }, [timerId]);

  return (
    <div>
      <h1>{count}</h1>
      <p>(Timer id is {timerId.current}.)</p>
    </div>
  );
}
```

### Antipattern for useRef
Since refs can expose DOM elements for us, it can be tempting to use them to access the DOM and make changes (toggle classes, set text, etc).

This is **not** how refs should be used. React should control the state of the DOM!

[From the docs:](https://reactjs.org/docs/refs-and-the-dom.html#dont-overuse-refs)

> *Your first inclination may be to use refs to “make things happen” in your app. If this is the case, take a moment and think more critically about where state should be owned in the component hierarchy.*
>
