# Specialized Testing

Snapshot testing can be helpful.

But often you’ll need to test what happens as people interact with your app.

How do we test that events (button clicks, form submits, etc.) produce the desired change?

### Render Revisited (Again)
Here are some other methods that ***render*** returns to you:
- **.getByText()**: Find first matching element by its text (throws error if nothing found)
- **.queryByText()**: Find first matching element by its text (returns null if nothing found)
- **.getAllByText()**: Like ***getByText*** but finds all matches
- **.queryAllByText()**: Like ***queryByText*** but finds all matches
- **.getByPlaceholderText() / queryByPlaceholderText()**: Find first matching element by placeholder text
- **.getAllByPlaceholderText() / queryAllByPlaceholderText()**: Like above but finds all matches
- **.getByTestId() / queryByTestId()**: Find matching element by a ***data-testid*** attribute (helpful if there’s no other convenient way to grab an element)
- **.getAllByTestId() / queryAllByTestId()**: Like above but finds all matches

[Full list](https://testing-library.com/docs/react-testing-library/api#render-result)

### Extended Matchers
By default, projects with Create React App come with a setup file that extends the matching capability of jest.

_demo/testing-demo/src/setupTests.js_
```jsx
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
```

Some helpful matchers:
- **.toHaveClass()**: Check whether an element has a certain class
- **.toBeInTheDocument()**: Check whether an element is in the document
- **.toContainHTML()**: Check whether the element contains a certain HTML string
- **.toBeEmpty()**: Check whether the element has any content

[Full list](https://github.com/testing-library/jest-dom#custom-matchers)

### Testing Events

React Testing Library provides a ***fireEvent*** method that you can use to mimic user interaction with your app.

- **.fireEvent.click(HTMLElement)**: Fire a click event
- **.fireEvent.submit(HTMLElement)**: Fire a submit event
- **.fireEvent.input(HTMLElement)**: Fire an input event

[Documentation](https://testing-library.com/docs/dom-testing-library/api-events)

### Specialized Testing Example
_demo/testing-demo/src/Counter.js_
```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <div>
      <h1>Let's count!</h1>
      <h2>Current count: {count}</h2>
      <button onClick={increment}>Add</button>
    </div>
  );
}

export default Counter;
```

Let’s test that the clicking functionality works!

_demo/testing-demo/src/Counter.test.js_
```jsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

it("handles button clicks", function() {
  const { getByText } = render(<Counter />);
  const h2 = getByText("Current count: 0");

  // click on the button
  fireEvent.click(getByText("Add"));

  // is the count different?
  expect(h2).toHaveTextContent("1");
  expect(h2).not.toHaveTextContent("0");
});
```
