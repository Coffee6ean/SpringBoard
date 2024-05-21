/**
 * Write a function called squares, which accepts two arrays. The function
 * should return 'true' of every value in the array has it's corresponding value
 * squared in the second array. The frequency of values must be the same
 */

//Basic Approach
function squares(nums1, nums2) {
    if(nums1.length !== nums2.length) return false;
    for(let i=0; i < nums1.length; i++) {
        const foundIdx = nums2.indexOf(nums1[i] ** 2);
        if(foundIdx === -1) return false;
        nums2.splice(foundIdx, 1);
    }

    return true;
}
