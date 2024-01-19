# Loops and Recursion -

### Loops versus Recursion
Any loop can be written instead with recursion
Any recursion can be written instead with a loop
… but often, one way is easier for a problem

### Count to 3
Using a ***while*** loop:
```js
function count() {
  let n = 1;

  while (n <= 3) {
    console.log(n);
    n += 1;
  }
}

count();
```

Using recursion:
```jsx
function count(n=1) {
  if (n > 3) return;

  console.log(n);
  count(n + 1);
}

count();
```

### Call Frames / Stack
```js
function count(n=1) {
  if (n > 3) return;

  console.log(n);
  count(n + 1);
}

count();
```

```txt
| → count(n=1)
| 1
|
| | → count(n=2)
| | 2
| |
| | | → count(n=3)
| | | 3
| | |
| | | | → count(n=4)
| | | | ← undefined from count(n=4)
| | |
| | | ← undefined from count(n=3)
| |
| | ← undefined from count(n=2)
|
| ← undefined from count(n=1)
```

### More Counting
```js
function count(n=1) {
  if (n > 3) return;

  console.log(n);
  count(n + 1);
  console.log(n);
}

count();
```

```txt
| → count(n=1)
| 1
|
| | → count(n=2)
| | 2
| |
| | | → count(n=3)
| | | 3
| | |
| | | | → count(n=4)
| | | | ← undefined from count(n=4)
| | |
| | | 3
| | | ← undefined from count(n=3)
| |
| | 2
| | ← undefined from count(n=2)
|
| 1
| ← undefined from count(n=1)
```

### Loops versus Recursion
Using a ***while*** loop:
```js
function count() {
  let n = 1;

  while (n <= 3) {
    console.log(n);
    n += 1;
  }
}

count();
```

Using recursion:
```js
function count(n=1) {
  if (n > 3) return;

  console.log(n);
  count(n + 1);
}

count();
```

Which do you prefer?
