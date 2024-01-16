# Queues - 

Add at end, remove from beginning

### Like a List, Except…
- Items are *only* added to a queue by **enqueueing** them at the *back*
- Items are *only* removed from a queue by **dequeueing** them at the *front*
- Thus, newer items are near back of queue, older items are near front
- **FIFO** for “First-in, first-out”

### Typical methods
- ***enqueue(item)***: Add to end
- ***dequeue()***: Remove & return first item
- ***peek()***:Return first item, but don’t remove
- ***isEmpty()***: Are there items in the queue?

Sometimes there are other common methods, like ***.length()***
Sometimes ***enqueue*** and ***dequeue*** are called ***push*** and ***pop***

### **Implementation**
What’s a good implementation for queues?
- Arrays?
- Linked Lists?
- Doubly Linked List?
- Objects?
- *Array*: **no**, dequeing would be ***O(n)***
- *Linked List*: **yes**, both enqueue & dequeue are ***O(1)*** *(head is top)*
- *Doubly Linked List*: **yes**, both enqueue & dequeue are ***O(1)***
- *Object*: **no**, dequeuing is ***O(n)*** *(have to scan whole obj to find low key)*
