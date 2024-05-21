/**
 * Write a function called 'sumZero' which accepst a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * 
 * Return an aray that includes both values taht sum to zero or 'undefined' if a
 * pair does not exist.
 */

// Naive Approach
function sumZero(nums) {
    for(let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === 0) {
                return [nums[i], nums[j]];
            }
        }
    }
}

// Optimized Naive Approach
function sumZero2(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i]>0) break;
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === 0) {
                return [nums[i], nums[j]];
            }
        }
    }
}

// Multiple Pointers Solution
function sumZeroMultiplePointers(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        const sum = nums[left] + nums[right];
        if(sum == 0) {
            return [nums[left], nums[right]];
        } else if (sum > 0) {
            right --;
        } else {
            left ++;
        }
    }
}
