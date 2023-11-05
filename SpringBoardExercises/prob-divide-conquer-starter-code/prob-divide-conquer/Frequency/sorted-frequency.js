//Linear Solution
function sortedFrequency(arr, target) {
    let counter = 0;
    for(let i=0; i < arr.length; i++) {
        if(arr[i] === target) {
            counter++;
        }
    }

    if(counter === 0) return -1
    return counter
}

//module.exports = sortedFrequency