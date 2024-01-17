# Deques (Double Ended Queue) - 

An *ADT* for a “double-ended queue” — push, pop, shift & unshift.
Less common than stack or queue.

### Use Case
A ticket buying application:
- Get in queue to buy ticket: added to end
- Buy ticket: removed from front
- Have question/concern about purchase:
    - Would be unfair to have to go to end of line for question
    - Should be next helped: pushed to front

Some task-allocation systems work this way.

### Typical Methods
Method names vary across implementations, but one set:
- ***appendleft()***: Add to beginning
- ***appendright()***: Add to end
- ***popleft()***: Remove & return from beginning
- ***popright()***: Remove & return from end
- ***peekleft()***: Return (don’t remove) beginning
- ***peekright()***: Return (don’t remove) end
- ***isEmpty()***: Are there items in the deque?

### Implementation
What’s a good implementation for queues?
- Arrays?
- Linked Lists?
- Doubly Linked List?
- Objects?
- *Array*: **no**, appendleft & popleft would be ***O(n)***
- *Linked List*: **no**, popright would be ***O(n)***
- *Doubly Linked List*: **yes** — everything is ***O(1)***
- *Object*: **no**, popleft & popright would be ***O(n)***
