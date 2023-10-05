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

const longWords = words.filter(function(word) {
    /*
    if(word.length >= 20) {
        return true;
    } else {
        return false;
    }
    */
   return word.length >= 20;
});

const cOrUWords = words.filter(function(word) {
    return word[0] === "u" ||  word[0] === "c";
});

const containsVowel = function(word) {
    for(let char of word) {
        if(isVowel(char)) return true;
    }
    return false;
}

const isVowel = function(char) {
    return "aeiou".indexOf(char) !== -1;
}

const containVowels = words.filter(containsVowel);

const noVowels = words.filter(function(word) {
    return !containsVowel(word);
});

//--- Build your own ---//
function myFilter(arr, callback) {
    const filteredArr = [];
    for(let i=0; i<arr.length;i++) {
        if(callback(arr[i], i , arr)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

const shortWords = myFilter(words, function(word) {
    return word.length <= 10;
});

const everyOtherWord = myFilter(words, function(word, i) {
    return i % 2 === 0;
})
