const numbers = [21,37,64,99,142];

//map does not modify the original array
const negatives = numbers.map(function(num) {
    return num * -1;
});

const doubles = numbers.map(function(num) {
    console.log(num * 2);
});

const toDos = [
    {
        id: 1,
        text: "walk the dog",
        priority: "high"
    },
    {
        id: 2,
        text: "eat breakfast",
        priority: "medium"
    },
    {
        id: 3,
        text: "code",
        priority: "high"
    },
    {
        id: 4,
        text: "sleep",
        priority: "low"
    }
]

const toDosText = toDos.map(function(toDo) {
    return toDo["text"];
});

const links = document.querySelectorAll("a");
const linksArr = Array.from(links);
const urls = linksArr.map(function(a) {
    return a.href;
});

//--- Build your own ---//
function myMap(arr, callback) {
    const mappedArr = [];
    for(let i=0; i<arr.length; i++) {
        const val = callback(arr[i], i, arr);
        mappedArr.push(val);
    }

    return mappedArr;
}

const priorityMap = myMap(toDos, function(todo) {
    return todo["priority"];
});

const repeatedStrings = myMap(["a","b","c","d","e"], function(str, idx) {
    return str.repeat(idx);
})
