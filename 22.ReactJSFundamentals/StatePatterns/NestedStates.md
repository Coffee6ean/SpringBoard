# Nested Mutable States

State can also be things like arrays-of-objects.

Imagine we want our circles to be positioned randomly on the page:

```jsx
[
  { color: "red",      x: 10.2, y: 50.1},
  { color: "honeydew", x: 30.7, y: 99.9 },
  // etc
]
```

_demo/colorful-circles/src/PositionedColorfulCircles.js_
```jsx
/** Get random int min..max (not incl max) */
function randRange(min = 0, max = 100) {
  return Math.random() * (max - min) + min;
}

/** Manage positioned & re-positionable circles.
 *
 * State:
 * - circles: array of circles: [ {x, y, color }, ... ]
 **/

function PositionedColorfulCircles() {
  const [circles, setCircles] = useState([]);
      // then change copy
      circlesCopy[i] = {
        ...circles[i],
        x: randRange(),
        y: randRange(),
      };
      // return circlesCopy;
      return circlesCopy;
    });
  // endcle

  return (
    <div>
      <ColorButtons addCircle={addCircle} />
```

What if we want to click on a circle to change its position?

To do this, we need to update state by modifying an object in an array.

One approach:
```jsx
const changePosition = i => {
  setColors(colors => {
    // create a copy of state array
    const colorsCopy = [...colors];

    // update the object at index i
    colorsCopy[i].x = getRandom();
    colorsCopy[i].y = getRandom();

    // return colorsCopy;
    return colorsCopy;
  });
};
```

New array, but mutated `colorsCopy[i]`

A better way:
```jsx
/** Add a circle w/newColor */
  function addCircle(newColor) {
    setCircles(circles => [
      ...circles,
      { color: newColor, x: randRange(), y: randRange() },
    ]);
  }

  /** Change position of circle at index i */
  function changePosition(i) {
    setCircles(circles => {
      // create copy of state array
      const circlesCopy = [...circles];
      // create copy of object at idx i,
```

New array *and* object at ***i*** is a new obj! Now we’re not mutating *anything*.

### Do I *Have* To Do This?

No, not for normal React

But some add-on features & debugging tools will require this.

It’s a very good idea to do this — never mutate *any part of state*

### A Common Pattern

Often, you can do this with JS “pure functions”, like ***map*** or ***filter***:

_remove specific colors w/id_
```jsx
setColors(colors => colors.filter(colorObj => colorObj.color !== color))
```

_another way to change position_
```jsx
setColors(colors => (
  colors.map((colorObj, idx) => (
    idx === i
      ? { ...colorObj, x: getRandom(), y: getRandom() }
      : colorObj
  ))
))
```

These are good intermediate idioms to practice
