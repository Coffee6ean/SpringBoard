// --- First Class functions --- //
//Functions as arguments
function greet() {
    console.log("Hi! how are you?");
}

function diss() {
    console.log("You stink!");
}

function repeatThreeTimes(func) {
    var count = 0;
    while(count < 3) {
        func();
        count++;
    }
}

function repeat(num, func) {
    var count = 0;
    while(count < num) {
        func();
        count++;
    }
}

//Functions in variables
let funcs = [greet, diss];
/* 
 * you can call the functions in console/terminal/code like so:
 *  -> funcs[0]() *It will run the greet function
 */
const myFunc = function add(x, y) {
    return x + y;
}
/*
 * you can call the function in console/terminal/code like so:
 *  -> myFunc(3,4) => 7 *Call the function through the variable
 *                       and pass in the args
 */

//Return a Function in another Function
function giveBirth() {
    console.log("Giving birth");
    return function cry() {
        return "WAAHHHHH";
    }
}
/*
 * you can call the function in console/terminal/code like so:
 *  -> giveBirth()() *It will execute everything withing the first
 *                    layer, and then execute the inner function
 */
const myFunc2 = giveBirth();
/*
 * hold the value of the outer function in a variable
 * -> myFunc2 => ƒ cry() {
 *      return "WAAHHHHH";
 *  }
 * Or, execute the function through the variable
 * -> myFunc2() => 'WAAHHHHH'
 */
function makeMultiplyFunc(num) {
    return function mult(x) {
        return num * x;
    }
}

const quad = makeMultiplyFunc(4);
const double = makeMultiplyFunc(2);

// --- Single Threaded --- //
//greet()
//alert("Alert!");
//diss();

//setTimeout
//greet()
//setTimeout(diss, 3000);
//greet()
/*
 * => Hi! how are you?
 *    Hi! how are you?
 *    You stink!
 * 
 * setTimeout essentially hands-off the responsability of keeping
 * track of the time to the browser, so that JavaScript can keep
 * going along
 */
//greet();
//setTimeout(diss, 3000);
//setTimeout(diss, 1000);
//greet();

//setInterval
//setInterval(diss, 2000);
/*
 * setInterval will call the function every 'n' time declared, and 
 * it will not stop. Unless we comment out the command or clear the 
 * interval
 * -> setInterval(diss, 2000); => 4 *That specific interval id
 *                             => n+ You stink!
 * -> clearInterval(4) => undefined 
 */
//const id = setInterval(diss, 2000);
/*
 * -> clearInterval(id) => undefined
 */

//Anonymous function
console.log("-".repeat(10));
greet();
setTimeout(function() {
    console.log("Anonymous function called");
    diss();
    diss();
}, 5000);
greet();

console.log("-".repeat(10));
repeat(5, function() {
    console.log("Anonymous function called");
});

const one = function() {
    console.log(1);
}

const funcsAnon = [function() { }, function () { }];
