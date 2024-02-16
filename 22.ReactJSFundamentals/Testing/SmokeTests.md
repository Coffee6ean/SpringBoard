# Smoke Tests

### Smoke Tests Working Example
_demo/testing-demo/src/App.js_
```jsx
import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      Hello, I'm an App!
      <Counter />
    </div>
  );
}

export default App;
```

_demo/testing-demo/src/App.test.js_
```jsx
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", function() {
  render(<App />);
});
```

```bash
$ npm test App.test.js

PASS src/App.test.js
  ✓ renders without crashing (4ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.283s
Ran all test suites matching /App.test.js/i.
```

### Render
React Testing Library’s ***render*** method…
- Creates a <div>
- Renders your JSX into the div
- Returns an object of methods (more on this later)

### Smoke Tests Broken Example
_demo/testing-demo/src/BrokenComponent.js_
```jsx
import React from "react";

function BrokenComponent(props) {
  return (
    <div>
      <p>Hello, I'm an BrokenComponent!</p>
      <p>Here are some numbers:</p>
      <p>{props.favNum}</p>
      <p>{props.favNum++}</p>
      <p>{props.favNum++}</p>
    </div>
  );
}

BrokenComponent.defaultProps = {
  favNum: 42
};

export default BrokenComponent;
```

_demo/testing-demo/src/BrokenComponent.test.js_
```jsx
import React from "react";
import { render } from "@testing-library/react";
import BrokenComponent from "./BrokenComponent";

it("renders without crashing", function() {
  render(<BrokenComponent />);
});
```

What’s the problem?
```bash
$ npm test BrokenComponent.test.js

FAIL  src/BrokenComponent.test.js
 ✕ renders without crashing (33ms)

 ● renders without crashing

  TypeError: Cannot assign to read only property 'favNum' of object
  '#<Object>'

     7 |       <p>Here are some numbers!</p>
     8 |       <p>{props.favNum}</p>
  >  9 |       <p>{props.favNum++}</p>
       |           ^
    10 |       <p>{props.favNum++}</p>
    11 |     </div>
    12 |   );

    at BrokenComponent.render (src/BrokenComponent.js:9:11)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        3.073s
Ran all test suites matching /BrokenComponent.test.js/i.
```
