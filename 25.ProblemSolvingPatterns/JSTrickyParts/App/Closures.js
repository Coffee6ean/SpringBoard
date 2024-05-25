// Simulate private values and persist them
function idGenerator() {
    let start = 0;
    return function generate() {
        start++;
        return start;
    }
}

let start = 0;
function generate() {
    start++;
    return start;
}

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log('just ran');
})();

//IIFE + Closure
/*
const $ = (function() {
    const version = '3.1.4';
    return {
        displayVersion() {
            return version;
        },
        html(elem) {
            return document.querySelector(elem).innerHTML;
        }
    }
});
*/

const version = '3.1.4';
    return {
        displayVersion() {
            return version;
        },
        html(elem) {
            return document.querySelector(elem).innerHTML;
        }
    }
