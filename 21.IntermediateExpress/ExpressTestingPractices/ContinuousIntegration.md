# Continuous Integration (CI) -

Continuous Integration is the practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle.

- The goal is to build better software by developing and testing in smaller increments.

### What can CI do for you?
- Automate running your tests when pushing your code
- Reject deployments if your tests do not pass
- Easily notify you when changes to your test suite occur

### How does it work?
- It integrates with tools like GitHub and carries out a series of tasks to build and test your code
- If one or more of those tasks fails, the build is considered broken
- If none of the tasks fail, the build is considered passed, and Travis CI can deploy your code

### Common CI Tools
- Travis CI
- Jenkins
- Circle CI
- Buddy

### Using Travis CI
Imagine we have the following code:
_demo/travis-ci-demo/operations.js_
```js
function add(a = 0, b = 0) {
  return a + b;
}

function average(...numbers) {
  let total = 0;
  if (numbers.length === 0) return 0;
  for (let num of numbers) {
    total += num;
  }
  return total / numbers.length;
}

module.exports = { add, average };
```

### And the following tests
_demo/travis-ci-demo/operations.test.js_
```js
const { add, average } = require("./operations");

describe("#add", function() {
  it("adds numbers", function() {
    expect(add(2, 2)).toEqual(4);
  });
  it("handles empty inputs", function() {
    expect(add()).toEqual(0);
  });
});

describe("#average", function() {
  it("calculates the average", function() {
    expect(average(2, 2)).toEqual(2);
    expect(average(2, -2)).toEqual(0);
  });
  it("handles empty inputs", function() {
    expect(average()).toEqual(0);
  });
});
```

### **Here’s what a simple Travis config looks like**
_demo/travis-ci-demo/.travis.yml_
```yml
language: node_js
node_js:
  - '10'
script:
  - jest operations.test.js
```

### Seeing it in action
https://app.travis-ci.com/github/rithmschool/travis-ci-demo/builds
