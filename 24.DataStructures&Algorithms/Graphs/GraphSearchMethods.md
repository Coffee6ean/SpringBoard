# Graph Breadth First Search -

### Solution

_demo/friends.js_
```jsx
areConnectedBFS(person1, person2) {
  let toVisitQueue = [person1];
  let seen = new Set(toVisitQueue);

  while (toVisitQueue.length > 0) {
    let currPerson = toVisitQueue.shift();
    
    if (currPerson === person2) return true

    for (let neighbor of currPerson.adjacent) {
      if (!seen.has(neighbor)) {
        toVisitQueue.push(neighbor);
        seen.add(neighbor);
      }
    }
  }

  return false;
}
```

This is a *breadth-first* search (would be *depth-first* if we used a stack)

## Graph Depth First Search:

### Another Iterative Approach

_demo/friends.js_
```jsx
areConnectedDFS(person1, person2) {  
  let toVisitStack = [person1];
  let seen = new Set(toVisitStack);

  while (toVisitStack.length > 0) {
    let currPerson = toVisitStack.pop();

    if (currPerson === person2) return true;

    for (let neighbor of currPerson.adjacent) {
      if (!seen.has(neighbor)) {
        toVisitStack.push(neighbor);
        seen.add(neighbor);
      }
    }
  }

  return false;
}
```

### Recursive Solution

_demo/friends.js_
```jsx
areConnectedRecursive(person1, person2, seen=new Set([person1])) {
  if (person1 === person2) return true;

  for (let neighbor of person1.adjacent) {
    if (!seen.has(neighbor)) {
      seen.add(neighbor);
      if (this.areConnectedRecursive(neighbor, person2, seen)) {
        return true;
      }
    }
  }

  return false;
}
```

This is a recursive *depth-first* search

## Further Study:

[Gentle Introduction to Graph Theory](https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8)

[BFS Graph Traversal](https://medium.com/basecs/going-broad-in-a-graph-bfs-traversal-959bd1a09255)

[From Theory to Practice: Representing Graphs](https://medium.com/basecs/from-theory-to-practice-representing-graphs-cfd782c5be38)

- Visualizations: [Visualgo.net](https://visualgo.net/en)
- [Problem Solving with Algorithms and Data Structures](http://interactivepython.org/courselib/static/pythonds/index.html) (awesome FREE book!)
- Graph Database: Neo4j
- Joe Celko, *SQL for Smarties* (graphs and trees in SQL)
