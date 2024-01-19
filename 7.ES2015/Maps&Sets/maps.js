const myMap = new Map();

myMap.set(7, "seven");
myMap.set("7", "seven string");
const emptyArr = [];
myMap.set(emptyArr, "empty array");
myMap.set(true, "true");

myMap.get(7);
myMap.get("7");

const add = (x,y) => x + y;
const mult = (x,y) => x * y;

const funcCalls = new Map();
funcCalls.set(add, 0);
funcCalls.set(mult, 0);

funcCalls.set(add, 1);
funcCalls.set(mult, 9);

//Map Methods
const bandData = [
    [3, "3 Doors Down"],
    ["three", "Three Dog Night"],
    ["nine", "Nine INch Nails"],
    ["four", "The Four Seasons"],
    [41, "Sum 41"]
];

const bandMap = new Map(bandData);
bandMap.set(182, "Blink-182").set("twenty", "Matchbox Twenty");

bandMap.has(41);
bandMap.delete("twenty");
bandMap.keys();
bandMap.values();
bandMap.size;

//Iterating Maps
bandMap.forEach((val, key) => {
    console.log(key + " => " + val);
});

for(let pair of bandMap) {
    let [key, val] = pair
    console.log(key + " => " + val);
}

for(let [key, val] of bandMap) {
    console.log(key, "=", val);
}
