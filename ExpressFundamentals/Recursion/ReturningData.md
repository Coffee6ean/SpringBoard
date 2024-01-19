# Returning Data -

### Finding Sum of List
“Return sum of list using recursion”
- What’s our base case?
    - An empty list has sum = 0!

```js
function sum(nums) {
  if (nums.length === 0) return 0;

  return nums[0] + sum(nums.slice(1));
}

sum([1, 2, 4, 5]);
```

## List Doubler:

### The Problem
“For every number in array, print the value, doubled”
```js
data = [ 1, 2, 3 ]  //  => 2 4 6
```

```js
function doubler(nums) {
  for (let n of nums) {
    console.log(n * 2);
  }
}
```

### The Challenge
- Some items can be lists themselves
- We want to “flatten” them and still print doubled

```js
data = [ 1, [2, 3], 4 ]  //   => 2 4 6 8
```

```js
function doubler(nums) {
  for (let n of nums) {
    if Array.isArray(n) {
      for (let o of n) console.log(o * 2);
    } else {
      console.log(n * 2);
    }
  }
}
```

### Oh No!
Some of *those* items can be lists!

```js
data = [ 1, [2, [3], 4], 5 ]  //   => 2 4 6 8 10
```
​
```js
function doubler(nums) {
  for (let n of nums) {
    if Array.isArray(n) {
      for (let o of nums) {
        if Array.isArray(o) {
          for (let p of o) console.log(p * 2);
        } else {
          console.log(o);
        }
      }
    } else {
      console.log(n * 2);
    }
  }
}
```

### Arbitrary Depth with Loop
```js
data = [ 1, [2, [3], 4], 5 ]  //   => 2 4 6 8 10

function doubler(nums) {
  stack = nums.reverse();

  while (stack.length > 0) {
    let n = stack.pop();
    if Array.isArray(n) {
      // If array, add it to stack, reversed
      for (let inner of n.reverse() {
        stack.append(inner);
      }
    } else {
      console.log(n * 2);
    }
  }
}
```

It works, but it’s pretty hairy!
This solution uses a data structure called a “stack”, adding new work to the end and popping them off the end.
This code may be worth study, even though this problem is more easily solved with recursion.

### Non-Recursively

![pic1](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2a2f3553-db51-40bc-913d-e06246ed903c%2Fgraphviz-d3cfbb02d7b188bf745b5e4009c287dd45f8ef41.jpeg?table=block&id=96d656cf-828e-4d99-8f96-7b7c895e9b85&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1920&userId=&cache=v2)

### Recursively

![pic2](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff577f1c1-2627-48d9-9baa-2393d1be8bf6%2F1.jpeg?table=block&id=3ca84abb-a8d7-4dc8-938e-afca1cc0a8c3&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1920&userId=&cache=v2)

```js
data = [ 1, [2, [3], 4], 5 ]

function doubler(nums) {
  for (let n of nums) {
    if Array.isArray(n) {
      doubler(n);
    } else {
      console.log(n * 2);
    }
  }
}
```

```txt
| → doubler(nums=[1, [2, [3], 4], 5])
| 2
|
| | → doubler(nums=[2, [3], 4])
| | 4
| |
| | | → doubler(nums=[3])
| | | 6
| | |
| | | ← undefined from doubler(nums=[3])
| |
| | 8
| | ← undefined from doubler(nums=[2, [3], 4])
|
| 10
| ← undefined from
|      doubler(nums=[1, [2, [3], 4], 5])
```
