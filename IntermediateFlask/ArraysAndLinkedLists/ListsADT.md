# Lists -

A _list_ is an _abstract data type_
It describes a set of requirements, not an exact implementation.
- Keep multiple items
- Can insert or delete items at any position
- Can contain duplicates
- Preserves order of items

# Arrays -
Arrangement of items at equally-spaced addresses in memory
```js
[3, 7, 2, 4, 1, 2]
```

In memory:
![alt text][pic]

Therefore, inserting or deleting an item requires moving everything after it.

## Array Runtimes:
| Action               | Big-O Notation  |
|----------------------|:---------------:|
| Retrieving by index  |  O(1)           |   
| Finding              |  O(n)           |  
| General insertion    |  O(n)           |    
| General deletion     |  O(n)           |    
 
## Direct Arrays / Vectors:
This kind of array is often called a _direct array_ or _vector_
Direct arrays only work if items are same size:
- all numbers
- all same-length strings
Don’t work well when items are varied sizes:
- different length strings
- subarrays or objects
They’re not commonly used, but JavaScript provides these as [Typed Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)

## Indirect Arrays:
In any indirect array, the array doesn’t directly hold the value.
It holds the memory address of the real value.
This lets an array store different types of data, or different length data.
```js
["ant", "bee", "caterpillar"]
```
![alt text][pic2]

### What Does JavaScript Use?
Indirect arrays — since you can store different-length things in them

It’s complicated, though: some implementations have specialized or adaptive structures to handle edge cases like sparse arrays

[pic]: https://s3-us-west-2.amazonaws.com/secure.notion-static.com/26a38e9f-f1bb-447b-8aeb-b10e2e57dfba/graphviz-8f3f59f3ccd45423109f59e0f500b8659f59cb0d.svg "In-memory Array"

[pic2]: https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4832407b-fa38-4fcd-8d62-d30da4009396%2Fgraphviz-acc423eab7a71eed4f2350c0fce916adeab2c212.svg?table=block&id=2a4e4b12-e327-455e-be7e-b4399a505c56&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&userId=&cache=v2 "Indirect Array"
