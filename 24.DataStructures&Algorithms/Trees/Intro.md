# Trees -

### Terminology
- **node**: basic unit
- **children**: nodes directly below a node
- **descendants**: nodes below a node
- **parent**: node that is directly above a node
- **ancestor**: node that is above a node
- **root node**: node at the top of tree
- **leaf node**: node without any children

### An Org Chart is a Tree

```mermaid
graph TD
	amy --> bob;
	amy --> barb;
	amy --> barry;
	bob --> carol;
	barb --> carlos;
	barb --> connie;
	carol --> daniel;
	carol --> derrick;
	daniel --> edward;
	daniel --> eric;
	connie --> darlene;
	connie --> david;
	david --> ellen;
	david --> erica;
	barry --> consuela;
```

### A Filesystem is a Tree

```mermaid
graph LR
	/ --> Users/;
	Users/ --> jane/;
	Users/ --> jessica/;
	jane/ --> docs/;
	jane/ --> todo.txt;
	jessica/ --> docs2/;
	jessica/ --> src/;
	docs/ --> resume.txt;
	docs/ --> plan.xls;
	docs/ --> games.txt;
	docs2/ --> recipes.txt;
	src/ --> server.py
```

### HTML DOM is a Tree

![1.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F49a1f1f9-5b0d-414c-9ebe-63308f765a10%2F1.jpeg?table=block&id=72a98c83-5539-4e47-bd4f-7e14aeb9ccaf&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=2000&userId=&cache=v2)

### A Taxonomy is a Tree

![2.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6d2c16b4-b2f0-494c-8e9c-52903388829c%2F2.jpeg?table=block&id=b8a77c7b-8e5e-48d0-bc86-ac6afaa84988&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=2000&userId=&cache=v2)

### This Is Not a Tree

![3.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff8763f7f-6c63-4b75-91e1-0048f3a0b47e%2F3.jpeg?table=block&id=af71bb40-f2a9-4e1e-95a0-15eb4a72391a&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=2000&userId=&cache=v2)

- Trees need a root node — we don’t have one!
- A node can only have one parent

### Binary Trees/Binary Search Trees

These are different—and we’ll cover later!

General trees are sometimes called “n-ary” trees, since they can have *n* (any) number of children.
