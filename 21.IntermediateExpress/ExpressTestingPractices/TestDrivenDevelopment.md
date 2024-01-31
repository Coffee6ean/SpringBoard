# Test Driven Development -

- Write tests **first** - they will fail!
- Only write the code necessary to get the tests to pass
- Focus on completing the task/user story at hand
- As you write more code, keep running tests and make sure they are passing

**Red, Green, Refactor**

- Your tests fail (**red**)
- You write the code to get the tests to pass (**green**)
- You refactor!

## Mocking:

When testing, you will commonly hear the term “mocking.”
- Mocking is primarily used in unit testing
- An object under test may have dependencies on other (complex) objects
- To isolate the behavior, you replace other objects by mocks that simulate their behavior
- This is useful if the real objects are impractical to incorporate into the unit test.

### Advantages of mocking
- It can be faster.
    - You don’t have to wait for an API response
    - You don’t have to deal with rate limits.
- It makes your tests ‘pure’. Whether they fail or pass depends only on your code, not on anything externally built.

### Challenges with mocking
- It sometimes requires a convoluted setup
- It is not always necessary and can be an over-optimization

### Mocking with Jest
- There are quite a few libraries used for mocking, including ***sinon***
- Jest comes in the with ability to mock functions
- https://jestjs.io/docs/en/mock-functions.html

### An example
_demo/mocking-demo/dice.js_
```js
function rollDice(numSides) {
  return Math.floor(Math.random() * numSides);
}

module.exports = rollDice;
```

### Our tests
_demo/mocking-demo/dice.test.js_
```js
const rollDice = require("./dice");

describe("#rollDice", function() {
  Math.random = jest.fn(() => 0.5);

  test("it rolls the correct amount of dice", function() {
    expect(rollDice(6)).toEqual(3);
    expect(Math.random).toHaveBeenCalled();

    expect(rollDice(2)).toEqual(1);
    expect(Math.random).toHaveBeenCalled();
  });
});
```

### What kinds of things can you mock?
- AJAX requests
- Reading/Writing to files
- Impure functions like Math.random
