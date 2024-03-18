# Binary Trees - 

General n-ary trees have nodes with 0+ children.

Binary tree nodes can have 0, 1, or 2 children.

![2.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F750a06b8-dbef-443b-96c0-16801668cde4%2F2.jpeg?table=block&id=1741e3c9-8512-472e-bd1a-1cb4f3b20944&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=860&userId=&cache=v2)

Binary tree nodes are usually structured with ***left*** and ***right*** properties, rather than an array of ***children***:

```jsx
class BinNode {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
```

### What Are They Good For?
Sometimes they’re used to store data in a normal hierarchy, like a tree.

Often times, they have a “rule” about the arrangement:

- binary search trees
- min/max heap

### Other Trees
Less commonly, there are other *n* trees

One example is “quad-trees”, often used for geographic programs, to keep track of N/S/E/W information from a node.

## Advanced Ideas:

### Moving Up

![3_1.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc78578e4-17ee-49c8-a07e-6f3d89890c06%2F3_1.jpeg?table=block&id=528001f9-a5fa-40e8-9522-2ca7ec175298&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1950&userId=&cache=v2)

```jsx
barb.children // carlos and connie nodes
```

It’s not possible to “move up”:

```jsx
barb.findParents()   // can't do easily
```

### Some Trees Point Up

![4.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F51188422-93f5-412a-a135-32cb880c3987%2F4.jpeg?table=block&id=536abbbb-c495-47a8-a05d-ffeadac008a6&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1950&userId=&cache=v2)

```jsx
class ReverseNode {
  constructor(parent) {
    this.parent = parent;
  }
}
```

Of course, then you can’t move down!

So you’d need to keep a list of all leaf nodes

### Some Point Both Ways

![5.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F52c9aaad-a902-461b-be24-9a824894c9b9%2F5.jpeg?table=block&id=97462ccc-91ba-4fa1-9035-a9d224925e50&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1950&userId=&cache=v2)

```jsx
class BidirectionalNode {
  constructor(parent, children = []) {
    this.parent = parent;
    this.children = children;
  }
}
```

## Resources:

[How to Not Be Stumped By Trees](https://medium.com/basecs/how-to-not-be-stumped-by-trees-5f36208f68a7)
