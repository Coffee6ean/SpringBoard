# Searching -

### Binary Search Tree Find

```mermaid
graph TD
	E --> B;
	E --> G;
	B --> A;
	B --> D;
	G --> F;
```

_demo/bst.js_
```jsx
find(sought) {
    let current = this;

    while (current) {
      if (current.val === sought) 
        return current;

      current = sought < current.val
                ? current.left
                : current.right;
    }
  }
```

Starting at ***E***, looking for ***C***:

1. ***C*** comes before ***E***, so go left to ***B***
2. ***C*** comes after ***B***, so go right to ***D***
3. ***C*** comes before ***D***, so go left to `None`
4. Drop out of `while` loop and return `None`

Every choice we make reduces # options by half!

For ***n*** nodes, we need to search, at most O(log n) nodes

We can search >1,000 nodes in only 10 steps!

We can search >1,000,000 nodes in only 20 steps!

## Balancing:

### **Valid But Badly Balanced**

```mermaid
graph TD
	B --> A;
	B --> D;
	D --> E;
	E --> F;
	F --> G;
```

- Can find ***A*** efficiently
- Can find missing ***C*** efficiently
- Can’t find ***G*** efficiently
- Tree needs to be “balanced”

### Balancing Trees
Easy ways to get reasonably balanced trees:

- shuffle values for tree randomly, and then insert
- or sort values, then insert from the middle working out

### Self-Balancing Trees
There are structure/algorithm pairs for BSTs that can balance themselves:

**AVL Trees**   Keeps balanced. Simpler algorithm but slightly less efficient.**Red/Black Trees** Keeps “reasonably” balanced. More complex algorithm but can be more efficient.

## Traversal:

Often, you don’t want to look at every node in a BST

That’s the point — you can search without looking at each!

But sometimes you will want to traverse entire tree

### In Order Traversal

```jsx
traverse(node) {
  if (node.left) traverse(node.left);
  console.log(node.val);
  if (node.right) traverse(node.right);
}
```

![6.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4300e18a-affe-459e-9505-1dcb6cf39255%2F6.jpeg?table=block&id=d44f1c56-86e4-4fdc-8dc3-3f022223e99d&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1500&userId=&cache=v2)

“traverse left, myself, traverse right” is “in-order”:

A → B → D → E → F → G

### Pre Order Traversal

```jsx
traverse(node) {
  console.log(node.val);
  if (node.left) traverse(node.left);
  if (node.right) traverse(node.right);
}
```

![6.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fea6d74d6-5d69-46ad-830e-10bc74b82ba1%2F6.jpeg?table=block&id=6ce80ba7-0474-4a20-b18f-d49ce239577f&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1500&userId=&cache=v2)

“myself, traverse left, traverse right” is “pre-order”:

E → B → A → D → G → F

### Post Order Traversal

```jsx
traverse(node) {
  if (node.left) traverse(node.left);
  if (node.right) traverse(node.right);
  console.log(node.val);
}
```

![6.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe903e52d-4783-4aca-b26f-285e83fffa34%2F6.jpeg?table=block&id=72683a8e-be5b-4931-84a5-09e412c712c0&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1500&userId=&cache=v2)

“traverse left, traverse right, myself” is “post-order”:

A → D → B → F → G → E
