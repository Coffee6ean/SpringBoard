# Snapshot Tests

Smoke tests are easy to write, but only test that component renders.

Snapshot tests are also easy, but go a bit further: did rendering change?

### Render Revisited
React Testing Library’s ***render*** method…
- Returns an object of methods
- One method is called ***asFragment***
- ***asFragment*** returns the underlying DOM structure of the component
    - very useful for snapshot tests!

### Snapshot Tests Example
_demo/testing-demo/src/FixedComponent.js_
```jsx
import React from "react";

function FixedComponent(props) {
  return (
    <div>
      <p>Hello, I'm a FixedComponent!</p>
      <p>Here are some numbers:</p>
      <p>{props.favNum}</p>
      <p>{props.favNum + 1}</p>
      <p>{props.favNum + 2}</p>
    </div>
  );
}

FixedComponent.defaultProps = {
  favNum: 42
};

export default FixedComponent;
```

_demo/testing-demo/src/FixedComponent.test.js_
```jsx
import React from "react";
import { render } from "@testing-library/react";
import FixedComponent from "./FixedComponent";

// smoke test
it("renders without crashing", function() {
  render(<FixedComponent />);
});

// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<FixedComponent />);
  expect(asFragment()).toMatchSnapshot();
});
```

```bash
$ npm test FixedComponent.test.js

PASS  src/FixedComponent.test.js
✓ renders without crashing (20ms)
✓ matches snapshot (16ms)

 › 1 snapshot written.
 Snapshot Summary
 › 1 snapshot written from 1 test suite.

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   1 written, 1 total
```

Jest compares the current snapshot with the saved snapshot, and throws a test error if they are different.

Jest stores these in ***__snapshots__***.

Let’s change ***FixedComponent*** rendering slightly…

```bash
$ npm test FixedComponent.test.js

FAIL  src/FixedComponent.test.js
✓ renders without crashing (19ms)
✕ matches snapshot (21ms)

 ● matches snapshot

  - Snapshot
  + Received

    <p>
  -   44
  +   62
    </p>

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 1 total
Snapshots:   1 failed, 1 total
```

If you intended change, press u to tell Jest to update snapshot.

### Snapshot Tests with Different Props
If your component can have different UI, you may want to create multiple snapshots.

Example:
_Dog.js_
```jsx
import React from "react";

function Dog(props) {
  return (
    <div className="Dog">
      <h1>{props.name}</h1>
      {props.isAdopted ? (
        <p>{props.name} has been adopted!</p>
      ) : (
        <button>Adopt me!</button>
      )}
    </div>
  );
}

export default Dog;
```

_Dog.test.js_
```jsx
import React from "react";
import { render } from "@testing-library/react";
import Dog from "./Dog";

it("matches snapshot", function() {
  const { asFragment } = render(<Dog name="Whiskey" isAdopted />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot", function() {
  const { asFragment } = render(<Dog name="Tubby" />);
  expect(asFragment()).toMatchSnapshot();
});
```

### Takeaway
Snapshot tests are almost as easy to write as smoke tests …

… while offering a great benefit: did you change the output?
