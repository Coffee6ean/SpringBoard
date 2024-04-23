# Code - 

### Representing a Graph

- **Adjacency List**: for node, a list of every node it is directly connected to
- **Adjacency Matrix**: a matrix of every pair of nodes, with a 1 if that pair is connected (otherwise 0)

### Representing a Graph - Adjacency Lists

![Untitled](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1c663250-a10a-4027-b5f6-95a3dde6472b%2FUntitled.png?table=block&id=4806c903-b7dd-40d6-bf7d-7ba59817aa37&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1920&userId=&cache=v2g)

### Representing a Graph - Adjacency Matrix

![Untitled](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Faf083db3-9f99-402d-b33c-1b97bdee5af4%2FUntitled.png?table=block&id=36e6a35c-8881-43be-bf21-fde1b709004b&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1920&userId=&cache=v2)

### We’re going to use Adjacency Lists!

They’re more common.

Adjacency matrices can be preferred for graphs that are highly connected.

### **Friend Graph**

![9.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fce849421-de20-4061-a6ef-9a9639f96ff3%2F9.jpeg?table=block&id=b9e4aaae-1dc6-40af-b2d1-cab115fc89dd&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=260&userId=&cache=v2)

### Node and Graph Class

_demo/friends.js_
```jsx
class PersonNode {
  constructor(name, adjacent = new Set()) {
    // Create a person node with friends adjacent
    this.name = name;
    this.adjacent = adjacent;
  }
}
```

_demo/friends.js_
```jsx
class FriendGraph {
  // Graph holding people and their friendships.
  constructor() {
    this.nodes = new Set();
  }

  addPerson(person) {
    // Add a person to our graph
    this.nodes.add(person);
  }

  setFriends(person1, person2) {
    // Set two people as friends
    person1.adjacent.add(person2);
    person2.adjacent.add(person1);
  }

  addPeople(people_list) {
    // Add a list of people to our graph
    for (let person of people_list) {
      this.addPerson(person);
    }
  }
}
```

### Demo: *friends.js

![10.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F637949af-654b-4b66-9d83-d44ec273b05e%2F10.jpeg?table=block&id=dc366078-f18a-4685-ab84-9dd4bcc437d4&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=290&userId=&cache=v2)

_demo/friends.js_
```jsx
let homer = new PersonNode("Homer");
let marge = new PersonNode("Marge");
let maggie = new PersonNode("Maggie");
let lisa = new PersonNode("Lisa");
let grampa = new PersonNode("Grampa");

let friends = new FriendGraph();
friends.addPeople([homer,marge,maggie,lisa,grampa]);

friends.setFriends(homer, marge);
friends.setFriends(homer, maggie);
friends.setFriends(homer, lisa);
friends.setFriends(marge, maggie);
friends.setFriends(lisa, grampa);
```

## Graph Traversal:
### Problem

Write a function that checks if two people are connected.

### Is Marge connected to Grampa?

![11.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F579418b6-d493-40ab-85f7-119dcdda72e7%2F11.jpeg?table=block&id=4acc80b5-c67d-4810-a0a5-696a2cff1962&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=240&userId=&cache=v2)

### Is Marge connected to Moe?

![12.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F84ca2a29-6c84-4127-adc7-0e75b8de04d8%2F12.jpeg?table=block&id=bae1b4e9-b7fd-43de-b127-85d3c69849fe&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=480&userId=&cache=v2)

### How do we figure this out?

- We need to traverse through the graph
- We want to make sure we only visit each vertex once
- But how do we search through it?
    - *BFS* - go to all closest neighbors and work your way outwards
    - *DFS* - continue on a path until it’s exhausted

### Not like your tree traversal

- This one is a bit different!
- Since graphs can have cycles, we need to be sure not visit same node again!
- How can we mark a node as visited?
