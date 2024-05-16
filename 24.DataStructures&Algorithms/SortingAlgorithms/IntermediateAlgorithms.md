# Intermediate Sorting Algorithms -

- The sorting algorithms we’ve learned so far don’t scale well
- Try out bubble sort with 100000 elements—will take quite some time!
- O(n log n) is fastest possible runtime
    - (for a “comparative sort”, which is what we typically mean)
    - ***n*** because you have to touch every item in list once
    - ***log n*** because best possible strategy is divide and conquer method
    - Both merge sort and quick sort use this strategy
- This has been proven with a mathematical proof — no comparative sorting algorithm will be faster than O(n log n)

### Merge Sort
- It’s a combination of two things: merging and sorting!
- Exploits fact that arrays of 0 or 1 element are always sorted
- Strategy:
    - Decomposing array into smaller arrays of 0 or 1 elements
    - Building up a newly sorted array from those

### Merging Arrays
- To implement merge sort, we first need a helper function
- This helper should take in two sorted arrays, and return a new array with all elements in sort order
- Should run in O(n + m) time/space and be pure

### Merging Arrays Pseudocode
- Create empty ***out*** array
- Start pointers at beginnings of arrays ***a*** and ***b***
    - If ***a*** value <= ***b*** value, push ***a*** value to ***out*** & increase ***a*** pointer
    - Else, push ***b*** value to ***out*** & increase ***b*** pointer
- Once we exhaust one array, push all remaining values from other array

### mergeSort Pseudocode
- Recursively:
    - Split array into halves until you have arrays that have length of 0 or 1
    - Merge split arrays and return the merged & sorted array

### Merge Sort in an Image

![1.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4c7cff90-89c4-4236-ae3a-94c4fa7ad1af%2F1.jpeg?table=block&id=dec0d255-6739-4815-8415-25cea931a047&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=960&userId=&cache=v2)

