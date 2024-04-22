# Binary Trees vs Hashmap -

How do they compare?

![7.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb81c59f1-89de-4a09-9bd2-079727c80f03%2F7.jpeg?table=block&id=41ecf451-75c1-4433-bcf8-c3a6420e3ece&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1250&userId=&cache=v2)

### Hashmaps
- O(1) lookup/addition/deletion
- Have know exactly what you’re looking for
- Can’t find “first word equal or after banana”
- Can’t find range of “words between car and cat”

### Binary Search Trees
- O(log n) lookup/addition/deletion
- Can search for exact value, or inequalities
- Can search for ranges
- Often used to implement indexes in databases

## Heaps:

Another ordered binary tree is a ***MinHeap*** or ***MaxHeap***.

They’re used to efficiently implement priority queues.

Their ordering rule is “parent must be lower *[for MaxHeap, larger]* than its children”

![8.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd645ec95-fcb5-4f3a-b2b1-1299983e049d%2F8.jpeg?table=block&id=8bc0cfda-9091-48b9-b39b-2b8a2a32cd98&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=770&userId=&cache=v2)

## Resources:

[Leaf It Up To Binary Trees](https://medium.com/basecs/leaf-it-up-to-binary-trees-11001aaf746d)

[The Little AVL Tree That Could](https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7)

[Trees & Binary Search Trees video](https://dev.to/vaidehijoshi/trees--binary-search-trees--basecs-video-series-5e38)
