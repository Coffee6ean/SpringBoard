//--- Async Keyword ---//
/*
async function sayHi() {
    return "HELLO!!";
}
*/

// With a 'resolve' function 
function sayHi() {
    return Promise.resolve("HELLO!!")
}

sayHi().then((msg) => console.log(msg));

// With a 'rejection' function 
async function oops() {
    throw "BAD IDEA!"
}

oops()
    .then(msg => console.log(msg))
    .catch(err => console.log("INSIDE CATCH:", err));
