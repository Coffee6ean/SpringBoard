# HashTable Runtime

| set                   | O(1)        |
| --------------------- | ----------- |
| get, has              | mostly O(1) |
| delete                | mostly O(1) |
| keys, values, entries | O(n)        |

### WTF Does “Mostly” Mean???
- Fundamentally, hash tables can be ***O(1)***
    - If we don’t have collision & array is right size
- You can get close to ***O(1)*** by:
    - Choosing array size large enough to minimize collisions
    - Choosing hash function that spreads keys evenly in array
- If you have predictable number of collisions, it can be ***O(1)***
    - Remember: ***O(3)*** is the same as ***O(1)*** in runtime!

### Resizing
- To ensure efficiency, good implementation shrink/grow array
    - Often aiming to keep it ~75% occupied
- This means *some* ***.set()*** and ***.delete()*** calls will take longer
    - If shrink/grown by proportion *(eg, double/halve)*, will be “amortized ***O(1)***”

### Collisions
- Our first implementation made each bin (spot in array) an array
- This is a common implementation; it’s called “chaining”
- There’s another possibility

### Open Addressing
- We can make each bin just a single `[key, value]` pair
- If collision: look at the “next” place
    - This can be the next bin (this is “linear probing”)
    - Or there are smarter algorithms to reduce clumping
- We should keep array size large enough to minimize when this happens
- If we do and we have a good hash function, we can get amortized ***O(1)***

## Sets:

```js
fruits = new Set(['apple', 'berry', 'cherry', 'durian'])
```

![5.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0486a659-0ec5-44af-90fa-2930cfcc9dee%2F5.jpeg?table=block&id=54dcf841-01a1-4a51-9438-6ad952f7a1c1&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=670&userId=&cache=v2)

- A ***Set*** is just a ***Map*** without values
- Same runtime characteristics
