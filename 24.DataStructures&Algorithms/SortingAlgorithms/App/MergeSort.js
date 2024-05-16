/* 
  Bubble Sort is great for linked lists
*/
function merge(arr1, arr2) {
    const results = [];
    //Pointers
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }  
    }
    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function mergeSort(arr) {
    //Base Case
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length/2);
    const leftArr = mergeSort(arr.slice(0, mid));
    const rightArr = mergeSort(arr.slice(mid));
    return merge(leftArr, rightArr);
}

/* Merge Sort Explanation:
arrInput = [3,2,70,48];

-> mergeSort([3,2,70,48]);
-> Divide
    -> Take first half: 
        -> mergeSort([3,2]);
        -> Divide
            -> Take first half
                -> margeSort([3])
                -> Return first half (left side): [3] 
            -> Take other half
                -> margeSort([2])
                -> Return other half (right side): [2]
        -> marge([3], [2]) => Return: [2,3]
    -> Take other half:
        -> mergeSort([70,48]);
        -> Divide
            -> Take first half
                -> margeSort([70])
                -> Return first half (left side): [70] 
            -> Take other half
                -> margeSort([48])
                -> Return other half (right side): [48]
        -> marge([70], [48]) => Return: [48,70]
-> leftArr = [2,3]
-> rightArr = [48,70]
-> merge([2,3],[48,70]) => Return: [2,3,48,70]
*/