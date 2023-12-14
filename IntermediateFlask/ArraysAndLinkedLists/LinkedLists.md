# Linked Lists -

Items aren’t stored in contiguous memory; instead, each item references the next item in the sequence.
Can rearrange without having to move other items in memory.

![alt text][pic]

![alt text][pic2]

This is a lot faster than having to move everything around in a big list.

## Node:
![alt text][pic]
***ant***, ***bee***, and ***caterpillar*** are nodes.
A basic Node has two attributes:
| Property       | Description                                                              |
|----------------|:------------------------------------------------------------------------:|
| val            | the information the node contains (could be string, int, instance, etc)  |
| next           | reference to next node (for last item, this is null)                     |

![alt text][pic3]

```js
antNode;
// {val: "ant", next: beeNode}

beeNode;
// {val: "bee", next: caterpillarNode}

caterpillarNode;
// {val: "caterpillar", next: null}
```

### The Node Class
_demo/linkedlist.js_
```js
/** Node class for item in linked list. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let antNode = new Node("ant");
let beeNode = new Node("bee");
let caterpillarNode = new Node("caterpillar");

antNode.next = beeNode;
beeNode.next = caterpillarNode;
```

### Smarter Node Class
Some people make a ***Node*** class which accepts optional ***next*** argument:
```js
class Node {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}
```
Then you can add a chain of nodes:
```js
let antNode = new Node("ant",
                new Node("bee",
                  new Node("caterpillar")));
```
This ends up exactly the same, but can be harder to read at first.

## LinkedList Class:
A Linked List is just a bunch of nodes linked sequentially.
The only attribute it must have is a reference to its first node, called the head.
Since the list starts empty, the head is initially null.
```js
class LinkedList {
  constructor() {
    this.head = null;
  }
}
​
let insects = new LinkedList();
```

### In Pictures…
An empty Linked List:
![alt text][pic4]

A Linked List with nodes in it:
![alt text][pic5]

### Things you might want to do
- Print each node
- Find a node by its data
- Append to end
- Insert at specific position
- Remove a node

[pic]: https://s3-us-west-2.amazonaws.com/secure.notion-static.com/401b7652-27b8-4938-81d1-311daa2b92e5/graphviz-9f6d3afd1fcffc954507216eef84cd1cd4caba7b.svg "Linked List - Single Linked"

[pic2]: https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0daf9c80-7bab-4d4f-ae3b-18314d4283d0/graphviz-8dc9c57ef981ae722ab78c348baeae871346906b.svg "Linked List - Remove Node"

[pic3]: https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8303053c-7180-41dd-af77-623e1d28180e%2Fgraphviz-47db8833b9babda521c0baf524ba3c53ce176bd0.svg?table=block&id=6f7ccf1f-b0d2-46b4-94c4-3eb9ee8c28cf&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&userId=&cache=v2 "Linked List - Nodes"

[pic4]: https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0f2a2e47-0fdd-4686-855f-ba6989ff0327/graphviz-b511f4ef91c1207372b8399fafa52940c94b3f9e.svg "Linked List - Empty List"

[pic 5]: https://s3-us-west-2.amazonaws.com/secure.notion-static.com/91638b74-dbe8-4cdd-b35b-f482b39a76d3/graphviz-f131717711a4cdf15aa53ff1825064fde5b2f1ef.svg "Linked List - List With Nodes"