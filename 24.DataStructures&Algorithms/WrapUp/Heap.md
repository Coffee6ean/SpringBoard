# Data Structures/Algorithms Wrap Up - 

## Goals
- Overview of how heaps work
- Lightly introduce other DSAs
- Overview what is most important to study, and how to do so

## Heap:

- Often used to implement priority queues
- Often used as part of a larger algorithm/data structure

### Max Heap
Each parent must be greater than children

![1.jpg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd4cbb477-c04a-4e65-ad3a-b0d28301471e%2F1.jpg?table=block&id=45867828-19c1-44b5-9c9d-1c46412a9f93&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=770&userId=&cache=v2)

We’ll use a “complete max binary heap”

![2.jpg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd0f755d6-d7f8-41bc-99bc-42f8bd3392cc%2F2.jpg?table=block&id=5f39afa3-419e-49a1-b1b9-fe31e5b17d1c&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=770&userId=&cache=v2)

- **complete**: filled top → bottom, left → right
- **max**: each parent is greater than children
- **binary**: parent can have at most two children
- **heap**: tree with rule between parent/children

### Adding Item
**Add at bottom right**

![3.jpg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Febf9529e-22b7-4687-bbab-10524d1a5dc9%2F3.jpg?table=block&id=70e10b46-e6a2-481a-9809-371545638f47&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=770&userId=&cache=v2)

**Swap upward until correct**

![4.jpg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F609f4844-5164-4d05-9659-0371d73150b8%2F4.jpg?table=block&id=907b15ea-bf30-40cc-9883-1a05e65be019&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=770&userId=&cache=v2)

### Removing Top Item
Highest-priority item is top of tree!

![5.jpg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff3b026fb-700d-45cd-88cd-2c08d6a78577%2F5.jpg?table=block&id=56b40920-bd85-4264-b29c-b88bf03df049&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=670&userId=&cache=v2)

If we just remove it, our tree won’t have a head

**Put bottom right node at top**

![6.jpg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2037f6cd-817b-4491-ab30-0c58239e2c3c%2F6.jpg?table=block&id=ecec47aa-b279-4403-b53b-f913b21d85fc&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1800&userId=&cache=v2)

**Swap downward until correct**

![7.jpg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F793cef5c-ee09-4205-b583-d6041b1a4f88%2F7.jpg?table=block&id=2cf6e662-dd49-4abe-8c81-af9639fe29f5&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1800&userId=&cache=v2)

(Swapped with 36, not 19, as 19 < 36)

### Runtime
Adding to bottom right is O(1)

Swapping top & bottom right is O(1)

The swapping up & down limits the runtime

- **bubbleUp:** O(log n) *(max # swap up = height)*
- **sinkDown:** O(log n) *(max # swap down = height)*

### Implementation

![8.jpg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F50f7b152-8396-469d-a7fe-5bed8318cb1c%2F8.jpg?table=block&id=4a5bc436-9da9-4fb8-907f-0bbca241a8f5&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1800&userId=&cache=v2)

- Can represent as an array
    
    ```
    [36, 19, 25, 17, 9, 3, 1, 2, 7]
    [#0,  1,  2,  3, 4, 5, 6, 7, 8]
    ```
    
- Can easily find ***i***’s children:
    - Left: `2 * i + 1`
    - Right: `2 * i + 2`
    