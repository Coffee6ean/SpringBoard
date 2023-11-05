// Binary Search -
/*
If our array is *sorted*, we can look for values much more quickly!
- Look at the middle value in the array
- If the middle value is the one you’re looking for, congratulations!
- If the middle value is too big, you can eliminate **every** value to 
  the right!
- If the middle value is too small, you can eliminate **every** value to 
  the left!
- Among all remaining values, pick the middle one, and repeat.
*/

// Implementing Binary Search
function binarySearch(arr, target) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    //  L                                    R
    // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    while(leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let middleVal = arr[middleIdx];

        if(middleVal < target) {
            leftIdx = middleIdx + 1;
        } else if(middleVal > target) {
            rightIdx = middleIdx - 1;
        } else {
            return middleIdx;
        }
    }

    return -1
}

// Time Complexity: O(log n)

