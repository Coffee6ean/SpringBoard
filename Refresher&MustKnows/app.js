console.log("Hello World!");

if(100) {
    console.log("Hi");
}

let n = 10;
/*
if(n > 10) {
    console.log("n is valid");
} else if (n < 100) {
    console.log("n is valid");
} else {
    console.log("n is not valid");
}
*/
if(n > 0) {
    console.log("n is valid");
}
if(n < 100) {
    console.log("n is valid");
} else {
    console.log("n is not valid");
}

for(var i = 0; i <= 10; i++) {
    console.log(i);
} 

const person = {name: "Timothy", age: 58};

let msg = "I hate mayo";
function greet() {
    let msg = "Hi!";
    console.log(msg);
}

console.log(msg);

const person2 = {name: "Timothy", age: 58, talk: greet};

var name = "Alfredo";
let message = `Hi I am ${name}`;

function printReceipt(product, qty, price) {
    return `${product}($${price}) * ${qty} = $${qty * price}`;
}

let colors = ["red", "teal", "cyan", "yellow"];
for(var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

for(let color of colors) {
    console.log(color);
}

for(let char of "PURPLE RAIN") {
    console.log(char);
}

const chicken = {
    name: "Little Chicken",
    age: 4,
    color: "black"
}
//for..in will iterate over the keys of an object
for(let attribute in chicken) {
    //console.log(attribute);
    console.log(`${attribute}->${chicken[attribute]}`);
}