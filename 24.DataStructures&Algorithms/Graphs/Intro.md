# What is a Graph? -

![1.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe5c23e52-8d9e-4c0d-ac2f-0b2690ed5209%2F1.jpeg?table=block&id=009a01a4-abd3-43e1-aad6-e7c913c66e89&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=480&userId=&cache=v2)

Graphs are like trees, except they can contain loops (“cycles”).

Also, the relationships can be directed or un-directed.

### Terminology

- **Node (or Vertex)**: basic unit
- **Edge (or Arc)**: connects two nodes
- **Adjacent**: two nodes are “adjacent” if they share an edge
- **Weight (optional)**: each edge can have a weight (ex: price, or distance)

## Examples:

### Food Chain

![2.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F20f31c97-be92-4f2c-b599-3499c9060155%2F2.jpeg?table=block&id=c52c2e35-0027-4d2b-8d27-7fb7ddd5afdd&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=860&userId=&cache=v2)

This graph is **directed**, showing “what eats what”

Penguins’ adjacency list: `[Squid, Krill]`

### Facebook Friends (or LinkedIn)

![3.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2851ed56-4ed1-4880-a5df-0ec5275cce66%2F3.jpeg?table=block&id=372a5021-f91a-4413-9e9b-391b20bfaecb&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=770&userId=&cache=v2)

This graph is **undirected**

Homer’s adjacency list: `[Bart, Lisa, Maggie, Marge]`

Lisa’s adjacency list: `[Maggie, Bart, Homer]`

### Processes

Making Cupcakes:

![4.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F50178a2b-136d-4d07-b6fb-7eeeb1f85f9e%2F4.jpeg?table=block&id=426e8c46-6d59-4ff6-b8fb-212778b554fd&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1060&userId=&cache=v2)

Don’t want to do a step until the necessary prerequisites are done!

Similar idea for manufacturing processes, supply chains, etc.

### Markov Chains

![5.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe59c5807-ab58-4967-8139-c561853b38c9%2F5.jpeg?table=block&id=d91b4554-b9ec-427f-a9a5-556c2a077dcc&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1920&userId=&cache=v2)

Other Markov chains: states of health and disease, finance

### Airline Route Map

Each node is an airport. Each edge is a flight.

The weight of each edge is the price.

What is the cheapest way to go from New York to San Francisco?

![6.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd457e3e4-e801-4da3-ab08-a871436995c9%2F6.jpeg?table=block&id=e6a636dd-ca97-45f3-956a-0bbde5943f69&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1920&userId=&cache=v2)

### Carpooling

Each node is a rider, and edges represent possible carpooling matches. Only two people can carpool together at a time. How can we match the maximum number of pairs of riders?

![7.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8834365e-38fb-43de-98e1-aac9b770d505%2F7.jpeg?table=block&id=8bdbe4a0-4ba3-403e-b93e-72c350388bad&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1110&userId=&cache=v2)

![8.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6b9ae794-9ce6-47f4-900e-a1e1e60fee77%2F8.jpeg?table=block&id=f84a1d1a-7b37-4a25-aa80-15de900d11ae&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1110&userId=&cache=v2)

There exists a solution where everyone gets a pair. Can you find it?

### Graphs
- Graphs are often used to model relationships between things
- Trees are **directed**, **acyclic** graphs
- All trees are graphs, but not all graphs are trees
- Trees have hierarchy, graphs do not

### Linked Lists, Trees, and Graphs
Linked lists, trees, and graphs are all structures that have a relationship, much like squares, rectangles, and parallelograms do. A linked list is a special, more-restricted form of a tree, and a tree is a special, more-restricted form of a graph.

- **Linked List**
Nodes have 0 or 1 child; acyclic and directed

- **Tree**
Nodes have 0+ children; acyclic and directed; only one designated root node

- **Graphs**
Nodes have 0+ connections; cyclic or acyclic; directed or undirected; disconnected or connected; optional weights

There are other possibilities, including:
- there are “circular linked lists,” where the linked list can contain a cycle (A points to B points to C which points to B). These do not have tails, as there’s no single end-point.
- there are “forests,” which are collections of directed, acyclic graphs but without a single root node. This essentially is a set of trees, hence a “forest.”
