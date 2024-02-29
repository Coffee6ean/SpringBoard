# Hash Tables

```js
let fruits = {"apple": "red",
              "berry": "blue",
              "cherry": "red"}
```

- It’d be awesome to keep this in some sort of magic array
    - Get ***O(1)*** time for many operations

![2.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F942b6ad4-dc5e-4cc1-9c24-2c4a2c971210%2F2.jpeg?table=block&id=a3f8d6a2-4a2e-42b1-961f-28ab1bd89df9&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1650&userId=&cache=v2)

But how could we know that “apple” is index #7?

### Hashing
We can hash a string to a number using ***charCode***

```txt
str: a    p    p    l    e
cC : 97  112  112  108  101 = 530
```

We could store “apple” in index #530!
```js
function hash(key) {
  return Array.from(key).reduce(
    (accum, char) => accum + char.charCodeAt(),
    0
  );
}
```

- We might get huge index #s, though
- For “supercalifragiliciousexpialadocious”, we’d get #3,747
- If we only needed to map 10 different words, we’d waste space
- Solution: Use modulo (`%`) to truncate: `hash % array.length`

```js
function hash(key, arrayLen) {
  hash = Array.from(key).reduce(
    (accum, char) => accum + char.charCodeAt(),
    0
  );

  return hash % arrayLen;
};
```

- This would hash “act” and “cat” to the same number
- We’ll use “Horner’s Method” to make order meaningful:
    - For each letter, we add `H * currHash + currLetter`

```js
function hash(key) {
  // Prime number to use with Horner's method
  const H_PRIME = 31;

  let numKey = Array.from(key).reduce(
    (accum, char) => accum * H_PRIME + char.charCodeAt(),
    0
  );

  return numKey % array_len;
};
```

<aside>
💡 **Why 31?**

Prime numbers tend to be used to make hashes — and particular prime numbers are better than others. The explanation is interesting, but delves deeply into math theory, and is not something most developers will ever learn. If you’re interested, though: [Why Do Hash Functions Use Prime Numbers?](https://computinglife.wordpress.com/2008/11/20/why-do-hash-functions-use-prime-numbers/)

</aside>
