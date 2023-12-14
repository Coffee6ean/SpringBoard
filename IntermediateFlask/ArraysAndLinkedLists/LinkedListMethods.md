# Linked List, Common Methods -

## Traversing:
Assumption: we’ve already built list, leaving the actual construction for later.
We’re just going to traverse the list and print it.

_demo/linkedlist.js_
```js
/** print(): traverse & console.log each item. */
  print() {
    let current = this.head;

    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }
```

## Searching:
Like printing—but stop searching once we find what we’re looking for.
_demo/linkedlist.js_
```js
/** find(val): is val in list? */
  find(val) {
    let current = this.head;

    while (current !== null) {
      if (current.val === val) return true;

      current = current.next;
    }

    return false;
  }
```

## Appending/Removing Nodes:
### Append a Node
**Q:** How do we append a node to the end of a linked list?

![alt text][pic]

**A:** Walk to the end and add it there.
(But wouldn’t it be faster to append if we “know” the end?)

![alt text][pic2]

This way, appending is always ***O(1)***

This becomes easier if we add a ***tail*** attribute onto our list. This way, we don’t have to traverse the list every time we add a node.
We can do this with just ***head***, but why if we can add a ***tail***?
```js
class LinkedList {
 constructor() {
   this.head = null;
   this.tail = null;
 }
 ...
}
```

![alt text][pic3]

What do we need to do to add “dragonfly”?
- make new node ***dragonfly***
- make ***caterpillar.next*** a reference to ***dragonfly***
- make ***list.tail*** a reference to ***dragonfly***

Success!

![alt text][pic4]

Don’t forget to handle case of an empty list!

![alt text][pic5]

What do we need to do to add “ant”?
- make new node ***ant***
- make ***list.head*** a reference to ***ant***
- make ***list.tail*** a reference to ***ant***

Success!

![alt text][pic6]

_demo/linkedlist.js_
```js
/** push(val): add node w/val to end of list. */
  ...
  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
  }
​
let insects = new LinkedList();

insects.push("ant");
insects.push("bee");
insects.push("caterpillar");
```

### Remove a Node (by value)
What would you need to change to remove:
- “ant”
- “bee”
- “caterpillar”

![alt text][pic7]

All we are doing to “remove” a node from the list is redirecting the reference (or ***next***) of a node to the one after the node we’re looking for.
There are many tricky ways of doing this.
We’re going to rely on a “daisy-chaining” effect and the fact that any given node’s ***next*** is just a node, which has its own ***val*** and ***next***.

The code is a bit complex, since we need to handle:
- removing only item in linked list
    - Don’t forget to update head *and* tail to ***null***
- removing first item
    - Don’t forget to update the head
- removing the last item
    - Don’t forget to update the tail
- removing an item in the middle

### Runtime of Linked Lists
| Going to “next” item             | O(1)                             |
| ---------------------------------|:--------------------------------:|
| Going to item by arbitrary index | O(n)                             |
| Searching for value              | O(n)                             |
| General insertion or deletion    | O(n)                             |
| Adding to start                  | O(1)                             |
| Appending to end                 | O(1) if know tail; O(n) if don’t |
| Deleting at start                | O(1)                             |

How do these compare to arrays?
**Array Runtimes**
| Action               | Big-O Notation  |
|----------------------|:---------------:|
| Retrieving by index  |  O(1)           |   
| Finding              |  O(n)           |  
| General insertion    |  O(n)           |    
| General deletion     |  O(n)           |   

### Code Implementation
Can write with classic OO:
```js
class Node { /* ... */ }

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(val) { /* ... */ }
}


let antNode = new Node("ant");
let insects = new LinkedList();

insects.find("ant");
```

Can write using plain JS objects:
```js
function find(insects, val) { /* ... */ }

antNode = {val: "ant", next: null};
insects = {head: antNode, tail: antNode};

find(insects, "ant");
```

## Doubly-Linked Lists:
Sometimes, linked lists have ***next*** and a ***prev*** (the “previous node”)
![alt text][pic8]

While doubly-linked lists are relatively common and useful in actual programming, most interview questions are asking about a singly-linked list.

## Resources:
[What’s a Linked List, Anyway? [Base CS]](https://medium.com/basecs/whats-a-linked-list-anyway-part-1-d8b7e6508b9d)

[pic]: https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa0f8012e-b610-4331-8fa7-ca5807ce812d%2Fgraphviz-dcbe8a2eb9b7a9d00bbb68a7d33cebccf9b524fb.svg?table=block&id=3f800aee-f87d-4b7e-9265-3a85eabe8e48&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&userId=&cache=v2 "Linked List - Append(Undefined End)"

[pic2]: https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F859414ce-8d4a-47f8-8b5a-7bb03089294d%2Fgraphviz-590103281274b21ddd4b06544ed2cdaeadeb7d38.svg?table=block&id=acfe8be9-be88-4963-abbd-78ce34e86ca3&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&userId=&cache=v2 "Linked List - Append(Defined End)"

[pic3]: https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb9ec5733-3cae-442b-b55d-2bcc2e798b83%2Fgraphviz-dd448c604aef49e8f2578225d76ec912c1f73827.svg?table=block&id=d00e2fa1-81d8-4a58-82ac-a0137ed5359c&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&userId=&cache=v2 "Linked List - Tail(Defined End)"

[pic4]: https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb1080f27-10bf-41b4-a606-ecf7046b7d85%2Fgraphviz-316e2f190737ac6028ea6b3d4a8ef4ed775e1d79.svg?table=block&id=1b0701f9-66ee-4384-8c18-6fca20783e76&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&userId=&cache=v2 "Linked List - Append to Tail"

[pic5]: https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc8ab4c25-fb1d-4dde-a0c3-0f86642d2a01%2Fgraphviz-12dbf0070a7eb01bfe84e5ddd6ae6116f5f846e8.svg?table=block&id=b4065d1d-bbda-413e-87ac-56133cde8699&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&userId=&cache=v2 "Linked List - Empty List"

[pic6]: https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdd7ef729-785c-43f6-a0ee-b498124f8c71%2Fgraphviz-befa926b09f4a70baadb8346d81ebd475f124afc.svg?table=block&id=f1e3407e-4bb0-4b41-9a56-f9995e894b28&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&userId=&cache=v2 "Linked List - Single Node"

[pic7]: https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbb59f46b-59cb-426c-83b6-a9ddfaecb515%2Fgraphviz-282a06741a687b4b9a0baa3c3beac59fbe49cd94.svg?table=block&id=926c99ef-b7ae-41ed-aca7-3b6579c79593&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&userId=&cache=v2 "Linked List - Remove Node"

[pic8]: https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff9b597fd-1c23-4c9f-ab00-72d239146b6d%2Fgraphviz-f1a45372bb1c8981c345a49c383adfa7c86b1afc.svg?table=block&id=9eb20ff7-0f91-4b96-bc79-2aeb8ed204b0&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&userId=&cache=v2 "Linked List - Doubly Linked List"