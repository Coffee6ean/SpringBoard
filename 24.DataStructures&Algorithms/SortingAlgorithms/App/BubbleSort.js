/* 
  Bubble Sort is great for nearly sorted arrays
*/

// Sorting within array
function bubbleSort(arr) {
    //First loop runs for a single unit
    for(let i=0; i < arr.length; i++) {
        //Second loop unsures swapping method runs for all units
        for(let j=0; j < arr.length; j++) {
            //Swap the biggest number - The cream has risen to the top (bubbled up)
            if(arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr;
}

//Optimization #1 - Adjust range
function bubbleSort2(arr) {
    let count = 0;
    //First loop runs for a single unit
    for(let i=0; i < arr.length; i++) {
        //Second loop unsures swapping method runs for all units
        for(let j=0; j < arr.length - i; j++) {
            count++;
            //Swap the biggest number - The cream has risen to the top (bubbled up)
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log('Total iterations:', count);
    return arr;
}

//Optrimization #2 - Check for swaps
function bubbleSort3(arr) {
    let count = 0;
    for(let i=0; i < arr.length; i++){
        let swap = false;
        for(let j=0; j < arr.length-i; j++){
            count++;
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swap = true;
            }
        }
        if(!swap) break;
    }
    console.log('Total iterations:', count);
    return arr;
}

[-9,1,34,28,6,12,44,7,-2,5,37,17]