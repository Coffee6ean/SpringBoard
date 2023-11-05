//Linear Solution
function countZeroes(arr) {
    let counter = 0
    for(let i=0; i < arr.length; i++) {
        if(arr[i] === 0) {
            counter++
        }
    }

    return counter
}

//module.exports = countZeroes