function sum() {
    const args = Array.from(arguments);
    return args.reduce((sum, val) => {
        return sum + val;
    });
}

const max = function() {
    const args = Array.from(arguments);
    return args.reduce((max, currVal) => {
        return (currVal > max) ? currVal : max;
    });
}


//Rest
function sumRest(...nums) {
    return nums.reduce((sum, n) => sum + n);
}

const sumAll = (...nums) => {
    if(!nums.length) return undefined;
    return nums.reduce((sum, n) => sum + n);
}

function makeFamily(parent1, parent2, ...kids) {
    //console.log(parent1, parent2);
    //console.log(kids);
    return {
        parents: [parent1, parent2],
        children: kids.length ? kids : 0
    }
}

const filterByType = (type, ...vals) => {
    return vals.filter((v) => typeof v === type);
}

//Spread
const nums = [4,5,88,123,0.92,34];
console.log(Math.max(...nums));

const things = [23,45,true,false,0,"hello","goodbye",undefined];
const filterByTypeSpread = (type, ...vals) => {
    return vals.filter((v) => typeof v === type);
}

console.log(filterByTypeSpread("number", ...things));

const palette = ["lavander berry", "sunflower yellow", "orchid orange"];
//Copy
const paletteCopy = palette.slice();
const paletteCopy2 = ["sky blue", ...palette, "grass green"];
//Concatenate
const greenTeas = ["snow jasmine", "fragrant leaf"];
const oolongTeas = ["honey orchid", "winter sprout"];
const herbalTeas = ["african solstice", "marshmallow root"];
const coffees = ["guatemala red cat", "snow leopard blend"];

const allTeas = [...greenTeas, ...oolongTeas, ...herbalTeas];
const withCaffeine = [...greenTeas, ...oolongTeas, ...coffees, "Earl Grey"];

const vowels = "aeiou";
const vowelArr = [...vowels, "somtimes y"];

const tea = {
    type: "oolong",
    name: "winter sprout",
    origin: "Taiwan"
}

const teaData = {
    steepTime: "30s",
    brewTemp: 175,
    origin: "Japan"
}

//Copy
const tea2 = {...tea};
//Concatenate
const teaTin = {...tea, price: 22.99};
//Update Property
const newTea = {...tea, name: "golden frost"};
//This will overwrite to the same value
//const newTea = { name: "golden frost", ...tea};

const fullTea = {...tea, ...teaData};

//Spread Array into Object
const colors = ["red", "orange", "blue"];
const dummyObj = {...colors, ..."cat"};

/*
 * Spread does not perform a deep copy - nested arrays or objects will 
 * keep the same reference to the original (subject to modifications)
 */
const shoppingCart = [
    {
        name: "honey orchid",
        quantity: 2,
        proce: 13.5
    },
    {
        name: "african solsitice",
        quantity: 4,
        price: 25.99
    }
];

const cartCopy = {...shoppingCart};