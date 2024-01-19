# An Introduction to Jest -

### Jest
- Jest is an open-source testing platform written by Facebook
- It’s built on top of Jasmine!
- Easy to test in environments that aren’t browser-based
- Also very popular for testing React apps
- More information: [Jestjs.io](https://jestjs.io/)

### Installing Jest
```bash
$ npm i --global jest
```

This installs jest globally so you can use it anywhere

## Organizing Tests:
- Test files should be named ***NAME_OF_FILE.test.js***
    - You can place in the same directory as the JS file it tests
    - Or, you can organize all tests into a folder called ***__tests__***
- If you have a ***package.json*** , you don’t need additional configuration.
    - If not, create ***jest.config.js*** file. It can be empty, you just need one.
- Run all tests using the ***jest*** command
    - You can run an individual test using ***jest NAME_OF_FILE***

### Test
Write tests inside of test function callbacks:
_demo/add.js_
```js
function add(x, y) {
  return x + y;
}


module.exports = {add};
```

_demo/add.test.js_
```js
const { add } = require("./add");

test('add should return sum', function () {
  let sum = add(2, 3);
  expect(sum).toEqual(5);
});
```

### Describe
To group together related tests, wrap these in describe callback:
_demo/add.js_
```js
function add(x, y) {
  return x + y;
}


module.exports = {add};
```
​
_demo/add.test.js_
```js
describe("add function", function () {

  test('return sum', function () {
    let sum = add(2, 3);
    expect(sum).toEqual(5);
  });

  test('return sum with neg numbers', function () {
    let sum = add(-2, 3);
    expect(sum).toEqual(1);
  });

});
```

