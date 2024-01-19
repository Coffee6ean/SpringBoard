# Requirements -

### Base Case
```js
function count(n=1) {
  if (n > 3) return;

  console.log(n);
  count(n + 1);
}
```
- Every recursive function needs a ***base case***
    - How do we know when we’re done?

Often a base case is a “degenerate case”.
- concat([1, 2, 3]) →
- “1” + concat([2, 3]) →
- “1” + “2” + concat([3]) →
- “1” + “2” + “3” + concat([]) ← **degenerate: empty array**

<aside>
💡 **Degenerate Cases**

A “degenerate case” is one that is so reduced that it’s fundamentally different from the others and would need to be treated differently.

Consider counting up to 3 recursively:
```js
function count(n=1) {
  if (n > 3) return;

  console.log(n);
  count(n + 1);
}
```

Here, our base case is “when we hit 3, don’t keep recursing”. This is a base case, but it’s not “degenerate” — we *could* keep counting up after 3; there’s nothing preventing us from doing so besides our goal to stop.

Compare this with finding the length of a list recursively:
```js
function lenlist(nums) {
  if (nums[0] === undefined) return 0

  return 1 + lenlist(nums.slice(1));
}
```

Here, our base case is “the length of an empty list is 0, so return that and don’t recurse”. This base is “degenerate” — there’s no possible way for us to find the length of a list with -1 items in it! It wouldn’t even be possible for us to keep recursing; this base case is a hard limit on what’s possible.

Not all recursive problems have a degenerate base case, but thinking about if one is possible is often helpful in figuring what your base case is and how the recursion should work.

</aside>

### No Base Case
```js
function count(n=1) {
  console.log(n);
  count(n + 1);
}

count();
```
**Stack Overflow!**

### Explicit vs. Hidden Base Cases
```js
function count(n=1) {
  if (n > 3) return;

  console.log(n);
  count(n + 1);
}
```

```js
function count(n=1) {
  if (n <= 3) {
    console.log(n);
    count(n + 1);
  }
}
```
​
Which do you prefer?

### Progress
```js
function count(n=1) {
  if (n > 3) return;

  console.log(n);
  count(n + 1);
}
```
