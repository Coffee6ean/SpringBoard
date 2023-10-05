const colors = ["teal", "cyan", "peach", "purple"];
const prices = [30.99, 19.99, 2.25, 99.0];

/*
 * the defined function will be passed items, every time, 
 * in the 'forEach' method: 1.value, 2.index & 3.Entire array
 */
/*
//colors.forEach(console.log);
function allCaps(val, i) {
    const caps = val.toUpperCase();
    console.log(`At index ${i}, ${caps}`);
}

colors.forEach(allCaps);

let total = 0;
prices.forEach(function(price) {
    total += price;
});

//forOf is much cleaner, however it does not callback any functions
/*
for(let price of prices) {
    total += price;
}

for(let i=0; i < prices.length; i++) {
    total += price;
}
*/
/*
console.log(total);
*/
//--- Build your own ---//
function forEach(arr, callback) {
    for(let i=0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
    //return undefined
}

forEach(colors, function(color, idx, array) {
    console.log(color.toUpperCase(), "index of: ", idx);
});
