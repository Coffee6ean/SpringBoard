//"use strict";

//--- The value of 'this' ---//
const cat = {
    name: "Blue",
    breed: "Scottish Fold",
    dance: function(dance) {
        console.log("this is:", this);
        console.log(`meow, I am ${this.name} and I like to ${dance}`);
    },
    play: function(...toys) {
        for(let toy of toys) {
            console.log(`${this.name} plays with ${toy}`);
        }
    },
    greet() {
        alert(`${this.name} says meow`);
    }
}

const blueDance = cat.dance;
blueDance("salsa");  //meow, I am  and I like to salsa
//"" appears instead of 'undefined' because window does have a name

function whatIsThis() {
    console.log("this: " + this);
}

const myObj = {
    func: whatIsThis,
    color: "purple",
}

myObj.func();


//--- Strict Mode ---//
/*
//A class will always be set to "strict" mode
class Cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    dance(danceType) {
        console.log("This is: ", this);
        console.log(`meow, I am ${this.name} and I like to ${danceType}`)
    }
}

const rocket = new Cat("Rocket", "tabby");
rocket.dance("tango");
const rocketDance = rocket.dance;
rocketDance("tango");
*/

//--- call ---//
const blueDance2 = cat.dance;
blueDance2.call(cat, "jitterbug");


const dog = {
    name: "Elton",
    breed: "Black Lab"
}

blueDance2.call(dog, "hip hop dance");
cat.play.call(dog, "bone", "my cat");
//cat.dance.call(window, "salsa");

//--- Bind ---//
const bDance = cat.dance;
const boundDance = bDance.bind(cat);
//boundDance("waltz") //=> this is: {name: 'Blue', breed: 'Scottish Fold', dance: ƒ, play: ƒ}
                    //   meow, I am Blue and I like to waltz
const rocket = {
    name: "Rocket",
    breed: "Himalayan"
}
const rocketDance2 = cat.dance.bind(rocket);

const dog2 = {
    name: "Tyson",
    breed: "Mini Aussie",
    dance: rocketDance2
}
//dog2.dance()  //=> this is: {name: 'Rocket', breed: 'Himalayan'}
              //   meow, I am Rocket and I like to undefined

//--- Binding Arguments ---//
const blueDisco = cat.dance.bind(cat, "disco");
const playWithSocks = cat.play.bind(cat, "left sock", "right sock");

function applySalesTax(taxRate, price) {
    return price + price * taxRate;
}
//Baking in an argumnet
const applyCATax = applySalesTax.bind(null, 0.0725);
const applyTXTax = applySalesTax.bind(null, 0.0625);
/*
const bobsMembership = {
    name: "Bob",
    total: 250,
    collectMonthlyFee: function(fee) {
        const remaining = this.total - fee;
        this.total = remaining;
        return this.name + " remaining balance: " + remaining;
    }
}
*/
const bobsMembership = {
    name: "Bob",
    total: 250,
}

const jillsMembership = {
    name: "Jill",
    total: 899,
}

function collectMonthlyFee(fee) {
    const remaining = this.total - fee;
    this.total = remaining;
    return this.name + " remaining balance: " + remaining;
}

const collectBobsFee = collectMonthlyFee.bind(bobsMembership, 5);
const collectJillsFee = collectMonthlyFee.bind(jillsMembership, 35);

//--- Binding Callbacks ---//
document
.querySelector("#btn-1")
.addEventListener("click", cat.greet.bind(cat));

const btnA = document.querySelector("#btn-a");
const btnB = document.querySelector("#btn-b");
const btnC = document.querySelector("#btn-c");

function popUp(msg) {
    alert("Secrete message is: " + msg);
}

/*
btnA.addEventListener("click", (e) => {
    popUp("button A says hi");
});
btnB.addEventListener("click", (e) => {
    popUp("button B says hi");
});
btnC.addEventListener("click", (e) => {
    popUp("button C says hi");
});
*/

btnA.addEventListener("click", popUp.bind(null, "button A says hi"));
btnB.addEventListener("click", popUp.bind(null, "button B says hi"));
btnC.addEventListener("click", popUp.bind(null, "button C says hi"));

//--- Arrow Functions & 'this' ---//
const greeter = {
    msg: "I like chickenz",
    sayHi: () => {
        alert(this.msg);
    },
    /*
    waitAndGreet: function(delay) {
        setTimeout(function() {
            alert(this.msg);
        }.bind(this), delay);
    }
    */
    waitAndGreet: function(delay) {
        setTimeout(() => {
            alert(this.msg);
        }, delay);
    }
}

greeter.waitAndGreet(2000);