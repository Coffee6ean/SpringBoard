//--- Objects ---//
const color = "teal";

const obj = {};
obj.color = "#3723FF";
obj[color] = "#3723FF";
obj[1+4-2*8] = "#3723FF";

for(let [key, val] of Object.entries(obj)) {
    console.log(key, val);
}


//--- Methods ---//
const add = (x, y) => x + y;
const mult = (x, y) => x * y;
const square = (x) => x * x;
const power = (x, y) => x ** y;

//const myMath = {add, mult, square, power};
/*
const myMath = {
    add: function(x, y) {
        return x + y;
    },
    mult: function(x, y) {
        return x * y;
    }
}
*/
//Stand-alone functions grouped in a logical place
const myMath = {
    add(x, y) {
        return x + y;
    },
    square(x) {
        return x * x;
    }
}

//--- 'this' and Methods ---//
function getHypotenuse(a, b) {
    return Math.sqrt(a**2 + b**2);
}

function getArea(a, b) {
    return a * b / 2;
}

//Hard to keep track of updated values
/*
let side1 = 4;
let side2 = 3;
const side3 = getHypotenuse(side1, side2);

const area = getArea(side1, side2);
side1 = 9;
side2 = 12;
getHypotenuse(side1, side2);
*/

/*
 * Easier to keep track, however there is one downside...this is not 
 * repeatable
 */
const rightTriangle = {
    a: 9,
    b: 12,
    printThis() {
        console.log(this);
    },
    getArea() {
        return (this.a * this.b) / 2;
    },
    getHypotenuse() {
        this.printThis();
        return Math.sqrt(this.a**2 + this.b**2);
    }
}


//--- Constructor Functions and New ~= Classes ---//
//A repeatable object template
//Not an object, a function that works as an object template
function Triangle(a, b) {
    this.a = a;
    this.b = b;
    this.getArea = function() {
        return (this.a * this.b) / 2;
    };
    this.getHypotenuse = function() {
        return Math.sqrt(this.a**2 + this.b**2);
    }
}

Triangle(5,7) //returns undefined
const triangle1 = new Triangle(3,4);
triangle1.getHypotenuse(); //5
const triangle2 = new Triangle(9,12);
triangle2.getHypotenuse(); //15

//--- Prototypes ---//
//Important in the case of Pollyfills
//Objects that store functionalities - helps to separate data from functions
/*

Array.prototype.push = function(val) {
    console.log(`want to add ${val}?`);
    console.log(`sawwwyy, no can do :(`);
}
*/

function TriangleProt(a, b) {
    this.a = a;
    this.b = b;
}

TriangleProt.prototype.getArea = function() {
    return this.a * this.b / 2;
}

TriangleProt.prototype.getHypotenuse = function() {
    return Math.sqrt(this.a**2 + this.b**2);
}

const tri1 = new TriangleProt(3,4);
const tri2 = new TriangleProt(9,12);
//tri1.getArea === tri2.getArea => true


//--- Classes ---//
class TriangleClass {
    constructor(a,b,c) {
        /*
         * Never do this:
         * if(!Number.isFinite(a) || a <= 0) {
         *     console.log("invalid side");
         *     return "Not a valid side";
         * }
        */
        /*
        if(!Number.isFinite(a) || a <= 0) {
            throw new Error("'a' is not a valid side");
        };
        if(!Number.isFinite(b) || b <= 0) {
            throw new Error("'b' is not a valid side");
        };
        if(!Number.isFinite(c) || c <= 0) {
            throw new Error("'c' is not a valid side");
        };
        */
        console.log("Inside TriangleClass");
        for(let side of [a,b,c]) {
            if(!Number.isFinite(side) || side <= 0) {
                throw new Error("'" + side + "' is not a valid side");
            };
        }

        console.log("you made a new triangle");
        this.a = a;
        this.b = b;
        this.c = c;
    }
    greet() {
        console.log("Hello from triangle");
    }
    display() {
        return `Triangle with the sides of ${this.a}, ${this.c} and ${this.b}`
    }
    getArea() {
        const {a,b,c} = this;
        const s = (a+b+c)/2;
        return Math.sqrt(s*(s-a)*(s-b)*(s-c));
    }
    isBig() {
        //retrun getArea() => Error 'getArea()' not defined
        return this.getArea() > 50;
    }
}
//Instantiating the Triangle class
const firstTri = new TriangleClass();
//Manually setting values 
firstTri.a = 3;
firstTri.b = 4;
const secondTri = new TriangleClass();
secondTri.a = 9;
secondTri.b = 12;

const t1 = new TriangleClass(3,4,5);
t1.display();
const t2 = new TriangleClass(5,9,10);
const t3 = new TriangleClass(30,40,50);
t3.isBig();


//--- Extending Classes ---//
class RightTriangle extends TriangleClass {
    constructor(a,b,c) {
        if(a*a+b*b !== c*c) {
            throw new Error("Invalid C side for right triangle");
        }
        console.log("Inside RightTriangle");
        /*
         * Calling the constructor from the parent class, to
         * avoid duplication. We must invoke super before setting new 
         * properties.
         * We also have access to properties and methods from the parent
         * class
         */
        super(a,b,c);  
        //Adding more properties
        this.hypot = c;
    }
    isRightTriangle() {
        return true;
    }
    //Overwrite - it finds it quicker
    display() {
        //Reusing code
        return "Right " + super.display();
    }
}

