# Common problem solving patterns -

- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- Many more!

### Frequency counters
- This pattern uses objects, maps, or sets to collect values/frequencies of values
- This can often avoid the need for nested loops or O(n$^2$) operations with arrays / strings

### An example
Write a function called ***squares***, which accepts two arrays. The function should return true if every value in the array has it’s corresponding value squared in the second array. The frequency of values must be the same.

```js
squares([1,2,3], [4,1,9]); // true
squares([1,2,3], [1,9]); // false
squares([1,2,1], [4,4,1]); // false (must be same frequency)
```

### A naive solution

```js
function squares(nums1, nums2) {
  if (nums1.length !== nums2.length) {
    return false;
  }

  for (let i = 0; i < nums1.length; i++) {
    let correctIndex = nums2.indexOf(nums1[i] ** 2);

    if (correctIndex === -1) {
      return false;
    }

    nums2.splice(correctIndex, 1);
  }

  return true;
}
```

Time Complexity - O(n$^2$)

### Using a frequency counter - first a helper function

```js
// a function to create a simple
// frequency counter using an object
function createFrequencyCounter(array) {
  let frequencies = {};

  for (let val of array) {
    let valCount = frequencies[val] || 0;
    frequencies[val] = valCount + 1;
  }

  return frequencies;
}
```

```js
// a function to create a simple
// frequency counter using a map
function createFrequencyCounter(array) {
  let frequencies = new Map();

  for (let val of array) {
    let valCount = frequencies.get(val) || 0;
    frequencies.set(val, valCount + 1);
  }

  return frequencies;
}
```

<aside>
💡 **Maps vs. objects**
Maps and objects are similar in JavaScript, as both can be used to store collections of key-value pairs. While objects have been around since the beginning of JavaScript, Maps came to the language as part of ES2015. You can read more about the difference between these to data structures at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

</aside>

### Using a frequency counter - solution

```jsx
function squaresWithFreqCounter(nums1, nums2) {
  if (nums1.length !== nums2.length) return false;

  let nums1Freqs = createFrequencyCounter(nums1);
  let nums2Freqs = createFrequencyCounter(nums2);

  for (let key of nums1Freqs.keys()) {
    if (nums2Freqs.has(key ** 2) === false) {
      return false;
    }

    if (nums2Freqs.get(key ** 2) !== nums1Freqs.get(key)) {
      return false;
    }
  }

  return true;
}
```

Time Complexity - O(n$^2$)

### Your turn!
Given two strings, write a function called ***validAnagram***, which determines if the second string is an anagram of the first.

An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

```js
validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false
validAnagram("awesome", "awesom"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
```
