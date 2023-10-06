function greetings() {

}

const add = function(x,y) {
    return x + y;
}

const arrowAdd = (x,y) => {
    return x + y;
}

[1,2,3,4].map(function(x) {
    return x * 2;
});

[2,3,6,78,99,104,23].reduce(function(max, currNum) {
    return Math.max(max, currNum);
});

[2,3,6,78,99,104,23].reduce((max, currNum) => {
    return Math.max(max, currNum);
});


//--- Arrow Functions: Shortcuts ---//
//No parentheses. Only for a single parameter - not for everyone
[1,2,3,4,5].forEach(n => {
    console.log(n * 10);
});

//No parameters
const greet = () => {
    console.log("hello");
}

//Implicit return
[1,2,3,4,5,6].filter((num) => num % 2 === 0);

const double = (n) => n * 2;
//double(8) => 16


//Can't have multiple expressions 
/*
[1,5,7,9,10,12,13,15].map((n) => 
    if(n % 2 === 0) {
        return "even";
    }
    return "odd";
)
*/
[1,5,7,9,10,12,13,15].map((n) => 
    (n % 2 === 0) ? "even" : "odd"
);


const dailyRainTotals = [
    [1.2,0.35,2.2], 
    [1.7,0.6,0.1], 
    [2.5,0.9,1.5]
];
dailyRainTotals.map((hourlyRainTotal) => {
    return hourlyRainTotal.reduce((sum, inchesOfRain) => {
        return sum + inchesOfRain;
    });
});

dailyRainTotals.map((hourlyRainTotal) => hourlyRainTotal.reduce((sum, inchesOfRain) => sum + inchesOfRain));

//For implicit with multiple lines its is recommended to use parentheses
const makeMath = (num) => {
    return {
        square: num * num,
        double: num *2
    }
}

const makeMathParenth = (num) => ({
    square: num * num,
    double: num *2
});

//Arrow function & 'this' no no's
const cat = {
    name: "Bubs",
    meow: function() {
        return `${this.name} says meow`;
    }
}
//No arrow functions inside objects 
const ArrowCat = {
    name: "Bubs",
    eat: function() {
        console.log(this);
        return `${this.name} chows down`;
    },
    meow: () => {
        console.log(this);
        return `${this.name} says meow`;
    }
}
