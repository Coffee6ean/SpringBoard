const words = [
    "immunoelectrophoretically",
    "rotavator",
    "tsktsk",
    "psychophysicotherapeutics",
    "squirrelled",
    "crypt",
    "uncopyrightable",
    "cysts",
    "pseudopseudohypoparathyroidism",
    "unimaginatively"
];

const isWordLongerThan25 = words.some((element) => {
    return element.length > 25;
});

const isWordIncluded = words.some((element) => {
    return element.indexOf("thyroid") !== -1;
});

const areWordsGreaterThan5 = words.every((element) => {
    return element.length >= 5; 
});

function allStrings(arr) {
    return arr.every(function(element) {
        return typeof element === "string";
    });
}


//--------------//
const btn = document.querySelector("button");
btn.addEventListener("click", function(element) {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const allChecked = Array.from(checkboxes).every((checkbox) => {
        return checkbox["checked"];
    });
    if(!allChecked) {
        alert("Please check all the avilable options");
    }
    console.log(allChecked);
});

//--- Build your own ---//
function mySome(arr, callback) {
    for(let i=0; i<arr.length;i++) {
        if(callback(arr[i], i, arr)) return true;
    }

    return false;
}

mySome([4,5,6,7], function(n) {
    return n > 5;
});

function myEvery(arr, callback) {
    for(let i=0; i<arr.length;i++) {
        if(!callback(arr[i], i, arr)) return false;
    }
    return true;
}

myEvery([4,5,6,7], function(n) {
    return n > 5;
});

myEvery([4,5,6,7], function(n) {
    return Number.isInteger(n);
});
