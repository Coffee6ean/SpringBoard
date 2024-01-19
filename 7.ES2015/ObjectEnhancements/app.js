function makePerson(first, last, age) {
    return {
        first: first,
        last: last,
        age: age,
        isAlive: true
    }
}

function makePersonEnhanced(first, last, age) {
    return {
        first, 
        last, 
        age,
        isAlive: true
    }
}

const mathStuff = {
    x: 200,
    add: function(a,b) {
        return a + b;
    },
    square: function(a) {
        return a * a;
    }
}

const mathStuffEnhanced = {
    x: 200,
    add(a,b) {
        return a + b;
    },
    square(a) {
        return a * a;
    },
    multiply: (a,b) => {
        return a * b;
    }
}

const color = {
    periwinkle: "9c88ff",
    "9c88ff": "periwinkle"
}

function makeColor(name, hex) {
    const color = {};
    color[name] = hex;
    color[hex] = name;

    return color;
}

function makeColorEnhanced(name, hex) {
    return {
        [name]: hex,
        [hex]: name
    };
}

const obj = {};
obj[6+7] = "thirteen";

const mystery = {
    [6+7]: "thirteen"
};

