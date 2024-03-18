# Trees in JavaScript -

### Node Class

```jsx
class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}
```

```jsx
let amy = new Node("amy");

amy.children.push(new Node("bob"));
amy.children.push(new Node("barb"));
amy.children.push(new Node("barry"));
```

```jsx
let amy = new Node("amy",
  [new Node("bob"),
   new Node("barb"),
   new Node("barry")])
```

![4.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa71ecc34-b186-4af0-847b-f6093a4c7337%2F4.jpeg?table=block&id=ffeb2240-80df-4ee6-892d-f5a9303ad508&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1770&userId=&cache=v2)

### Finding a Node
Starting at Amy, find Connie:

![5.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F29d29015-8d13-4264-830f-2d8eb980412e%2F5.jpeg?table=block&id=d36f94f4-a74f-4a79-80c0-5e3acae8160f&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=770&userId=&cache=v2)

_demo/trees.js_
```jsx
find(val) {
    let toVisitStack = [this];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current.val === val) 
        return current;

      for (let child of current.children) 
        toVisitStack.push(child)
    }
  }
```

“Depth First Search” (uses stack)

![6.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F69bce92b-3c07-446f-ada2-ab87b4b9a34a%2F6.jpeg?table=block&id=8f70af4b-a96f-4c6e-8804-3c3e36bfc304&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1970&userId=&cache=v2)

### Highest-Ranking Consuela
Say we hire another Consuela, a VP, & we want to find her

![1.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1d74dbf3-8f39-4e05-9f4f-9e3ff0e95060%2F1.jpeg?table=block&id=de4cd75b-3060-439e-8d68-97c56404ddba&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=960&userId=&cache=v2)

_demo/trees.js_
```jsx
findBFS(val) {
    let toVisitQueue = [this];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current.val === val) 
        return current;

      for (let child of current.children) 
        toVisitQueue.push(child)
    }
  }
```

“Breadth First Search” (uses queue)

### Tree Class

```jsx
class Tree {

  constructor(root) {
    this.root = root;
  }
}
```

```jsx
let org = new Tree(
  new Node("amy",
    [new Node("bob"),
     new Node("barb"),
     new Node("barry")]))
```

```mermaid
graph TD
	amy --> bob;
	amy --> barb;
	amy --> barry;
```

### Do You Really Need a Tree Class?
Each node is, itself, a tree!

It’s useful to have a Tree class, though, so you can keep track of the head node!

Can delegate to the head node for many operations:

```jsx
class Tree {
  constructor(root) {
    this.root = root;
  }

  /** findInTree: return node in tree w/this val */

  findInTree(val) {
    return this.root.find(val)
  }

  /** findInTreeBFS: return node in tree w/this val */

  findInTreeBFS(val) {
    return this.root.findBFS(val)
  }
}
```

### Also

Every linked list is a tree

But not every tree is a linked list.
