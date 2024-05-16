# Sorting Appendix -

### Selection Sort
Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

```jsx
[ 5, 3, 4, 1, 2 ] // iterate through array set 5 as min
[ 1, 3, 4, 5, 2 ] // find the lowest value and swap with 5
// 1 is now in its sorted position
[ 1, 3, 4, 5, 2 ] // repeat starting at 3
[ 1, 2, 4, 5, 3 ] // find the lowest value and swap with 3
// 2 is now in its sorted position
```

### Selection sort
- Store the first element as the smallest value you’ve seen so far.
- Compare this item to the next item in the array until you find a smaller number.
- If a smaller number is found, designate that smaller number to be the new “minimum” and continue until the end of the array.
- If the “minimum” is not the value (index) you initially began with, swap the two values. Repeat this with the next element until the array is sorted.

### Insertion Sort
Builds up the sort by gradually creating a larger left half which is always sorted

```jsx
[ 5, 3, 4, 1, 2 ]
[ 3, 5, 4, 1, 2 ]
[ 3, 4, 5, 1, 2 ]
[ 1, 3, 4, 5, 2 ]
[ 1, 2, 3, 4, 5 ]
```

### Insertion Sort Pseudocode
- Start by picking the second element in the array
- Now compare the second element with the one before it and swap if necessary.
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
- Repeat until the array is sorted.

## Quick Sort
- Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
- Works by selecting one element (called the “pivot”) and finding the index where the pivot should end up in the sorted array
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

### Pivot Helper
- In order to implement merge sort, it’s useful to first implement a function responsible arranging elements in an array on either side of a pivot
- Given an array, this helper function should designate an element as the pivot
- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
- The order of elements on either side of the pivot doesn’t matter!
- The helper should do this in place, that is, it should not create a new array
- When complete, the helper should return the index of the pivot

### Picking a pivot
- The runtime of quick sort depends in part on how one selects the pivot
- Ideally, the pivot should be chosen so that it’s roughly the median value in the data set you’re sorting
- For simplicity, we’ll always choose the pivot to be the first element (we’ll talk about consequences of this later)

### Pivot Helper Example

```jsx
let arr = [ 5, 2, 1, 8, 4, 7, 6, 3 ]

pivot(arr); // 4;

arr;
// any one of these is an acceptable mutation:
// [2, 1, 4, 3, 5, 8, 7, 6]
// [1, 4, 3, 2, 5, 7, 6, 8]
// [3, 2, 1, 4, 5, 7, 6, 8]
// [4, 1, 2, 3, 5, 6, 8, 7]
// there are other acceptable mutations too!
```

All that matters is for 5 to be at index 4, for smaller values to be to the left, and for larger values to be to the right

### Pivot Pseudocode
- It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
- Grab the pivot from the start of the array
- Store the current pivot index in a variable (this will keep track of where the pivot should end up)
- Loop through the array from the start until the end
- If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
- Swap the starting element (i.e. the pivot) with the pivot index
- Return the pivot index

### Quicksort Pseudocode
- Call the pivot helper on the array
- When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
- Your base case occurs when you consider a subarray with less than 2 elements

### Quicksort Resources
- [Quicksort intro](https://www.youtube.com/watch?v=aQiWF4E8flQ) (6 min YouTube)
- [Tim Roughgarden Quicksort](https://class.coursera.org/algo-006/lecture) (Quicksort-Algorithm, first two lectures)
- [“An Intuitive Explanation of Quicksort”](http://www.quora.com/What-is-an-intuitive-explanation-of-QuickSort)
