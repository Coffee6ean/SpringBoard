/*
 * Write a function called 'raceResults' which accepts a single array
 * argument. It should return an object with the keys 'first', 
 * 'second', 'third', and 'rest'.
 * 
 * - first: the first element in the array
 * - second: the second element in the array
 * - third: the third element in the array
 * - rest: all other elements in the array
 * 
 * **Write a *one line* function to make this work using**
 * 
 * - An arrow function
 * - Destructuring
 * - `Enhanced` object assignment (same key/value shortcut)
 */

function raceResults(arr) {
    [first, second, third, ...rest] = arr;
    return {
        first, 
        second,
        third,
        rest
    }
}

const raceResultsEnhanced = ([first, second, third, ...rest]) => (
    {first, second, third, rest}
)