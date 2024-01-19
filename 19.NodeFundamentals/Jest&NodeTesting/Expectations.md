# Expectations - 

```jsx
expect(1 + 1).toEqual(2);
```

Expectations should go inside of ***test*** function callbacks
A function can have several expectations — but be thoughtful about keeping tests small and simple.

### Matchers
| Expectation | Description |
| --- | --- |
| .toEqual(obj) | Has the same value (eg, different objects with same values match) |
| .toBe(obj) | Is the same object (eg, different objects with same values do not) |
| .toContain(sought) | Does object/array contain this item? |
| .not. | Add before matcher to invert (eg expect("hi").not.toEqual("bye")) |

https://jestjs.io/docs/en/using-matchers

### Matchers in action
Let’s compare toBe and toEqual
_matchers.test.js_
```js
describe("matchers", function(){
  test("toBe and toEqual are different", function () {
    let nums = [1,2,3];
    let newNums = nums.slice();

    expect(nums).not.toBe(newNums);  // not the same reference!
    expect(nums).toEqual(newNums);   // same values so we use toEqual
  });
});
```

### Expecting Anything
Sometimes, you’re not sure what part of an object will be.
Use `expect.any(type)` and it will match any of that type.
_demo/any.js_
```js
const TOYS = ["doll", "top", "iPad"];

function getRandomToy() {
  let idx = Math.floor(
      Math.random() * TOYS.length + 1);
  return {
    toy: {
      name: TOYS[idx],
      price: 34.99
    }
  };
}


module.exports = {getRandomToy};
```

_demo/any.test.js_
```js
const { getRandomToy } = require("./any");

test("random toy", function () {
  let toy = getRandomToy();
  expect(toy).toEqual({
    toy: {
      name: expect.any(String),
      price: 34.99
    }
  });
});
```
