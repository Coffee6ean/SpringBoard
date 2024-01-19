//Define a function
function holler() {
    console.log("Hey");
}

//Function Expression
const whisper = function() {
    console.log("Pssstt");
}

//Functions as values
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function power(x, y) {
    return x ** y;
}

const mathFuncs = [add, subtract, multiply, divide, power];

//Functions as arguments (Callback)
setTimeout(whisper, 1000);

function doMath(val1, val2, func) {
    return func(val1, val2);
}

doMath(5, 6, add);
doMath(4, 2, subtract);
doMath(3, 4, function(val1, val2) {
    console.log(val1 ** val2); //3^4
});

function doAllMath(val1, val2, arr) {
    arr.forEach(element => {
        console.log(element(val1, val2));
    });
}

doAllMath(3,2,mathFuncs);