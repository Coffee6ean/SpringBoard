# Stacks -

- “I want to order pizza for our party!”
    - In order to do that, I call the pizza place
        - They ask me how many I want
            - I put them on hold to ask my boss the budget
                - She gives amount in CAD, but pizza place takes USD
                    - I look up USD→CAD conversion rates in my web browser
                - Now I can convert budget to CAD
            - Now I can tell pizza place my budget
        - …

Like function calls — you return to “previous state” when you pop top task

### Like a List, Except…
- Items are *only* added to a stack by **pushing** them onto the *top*
- Items are *only* removed from a stack by **popping** them off the *top*
- Thus, newer items are near top of stack, older items are near bottom
- **LIFO** for *Last-in, first-out*
- Examples: the function call stack, most laundry hampers

### Typical methods
- ***push(item)***: Add to “top” of stack
- ***pop()***: Remove & return top item
- ***peek()***: Return (but don’t remove) top item
- ***isEmpty()***: Are there items in the stack?

### Implementation
What’s a good implementation for stacks?
- Arrays?
- Linked Lists?
- Doubly Linked List?
- Objects?
- *Array*: **yes**, both push & pop are ***O(1)***
- *Linked List*: **yes**, both push & pop are ***O(1)***
- *Doubly Linked List*: **yes**, both push & pop are ***O(1)***
- *Object*: **no**, popping is ***O(n)*** *(have to scan whole obj to find high key)*
