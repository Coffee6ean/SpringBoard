// Linear Search -
/*
How is 'indexOf' implemented in JavaScript?
- Loop through your array looking for the desired value
- If you find it, return the index
- If you exhaust the array, return -1
- Time complexity: O(n)
*/

// Custom indexOf implementation
function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) return i
    }
    return -1
}

linearSearch([4, 8, 15, 16, 23, 42], 15);  // 2
linearSearch([4, 8, 15, 16, 23, 42], 42);  // 5
linearSearch([4, 8, 15, 16, 23, 42], 100);  // -1

// Use of JS 'indexOf' method
indexOf([4, 8, 15, 16, 23, 42], 15);  // 2
indexOf([4, 8, 15, 16, 23, 42], 42);  // 5
indexOf([4, 8, 15, 16, 23, 42], 100);  // -1