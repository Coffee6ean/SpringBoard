# Multiple pointers -

- Creating *pointers* or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

### An example

Write a function called ***sumZero*** which accepts a sorted array of integers. The function should find the first pair where the sum is 0.

Return an array that includes both values that sum to zero or ***undefined*** if a pair does not exist.

```js
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
```

### A naive solution

```js
function sumZero(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === 0) {
        return [nums[i], nums[j]];
      }
    }
  }
}
```

- Time Complexity - O(n$^2$)

### Using multiple pointers

```js
function sumZeroMultiplePointers(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
```

- Time Complexity - O(n)

### Your turn!
Implement a function, ***countUniqueValues***, which accepts a sorted array, and counts unique values in array.

There can be negative numbers in the array, but it will always be sorted.

```js
countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
```

### Recap
- Developing a problem solving approach is incredibly important
- Thinking about code before writing code will always make you solve problems faster
- Be mindful about problem solving patterns
- Frequency counters and multiple pointers are just the start
- Do not overfit!
