function reverse(str) {
    let result = "";
    for(let i=str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

function reverse2(str) {
    str.split("").reverse().join("");
}

//Calculate the sum of numbers from 1 up to (and including) some number n
function addUpToFirst(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

function addUpToSecond(n) {
    return n *(n + 1)/2
}

function allEven(nums) {
    let loopCount = 0;
    for(var i=0; i< nums.length; i++) {
        loopCount++;
        if(nums[i] % 2 !== 0) {
            console.log("Loop count: " + loopCount);
            return false;
        }
    }
    console.log("Loop count: " + loopCount);
    return true;
}
