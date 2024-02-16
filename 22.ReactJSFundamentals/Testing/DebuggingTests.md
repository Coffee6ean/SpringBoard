# Debugging Tests

### Debugging from render
***render*** provides a ***debug*** method that will console.log a component’s DOM structure.

```jsx
const { debug } = render(<Counter />)
debug(); // see the structure of the component

fireEvent.click(getByText("Add"));
debug(); // how has the structure changed?
```

### Debugging Tests
If you want to set break points, edit your package JSON to include:

_package.json_
```json
"scripts": {
  // ... keep other things and add this
  "test:debug": "react-scripts --inspect-brk test --runInBand"
}
```

Add ***debugger*** line in test or component you want to test

And now `npm run test:debug` will run tests where you can use Chrome debugger!

Visit ***chrome://inspect*** to debug in Chrome.

## Wrap Up:

- Smoke tests are incredibly simple — always make one!
- Snapshot tests are very easy if output is predictable
- Use specialized testing if you need more specific tests or to test interactions

### Will I Use React Testing Library?
Maybe. There are other testing libraries for React.

The most popular alternative is Enzyme, created by Airbnb.

Enzyme focuses more on testing React; React Testing Library focuses more on the end result in the DOM.
