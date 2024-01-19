const scores = [0,0,0,0,0,0,0,0,55,59,69,73,73,75,79,83,88,91,93];

const findScore = scores.find(function(score) {
    return score > 75;
});

scores.find(function(score) {
    return score !== 0 && score % 2 === 0;
});

const evenScores = scores.filter(function(score) {
    return score !== 0 && score % 2 === 0;
});

const firstEvenNumIdx = scores.findIndex(function(score) {
    return score !== 0 && score % 2 === 0;
});

function partition(arr, pivot) {
    const pivotIdx = arr.findIndex(function(element) {
        return element > pivot;
    });

    //console.log(pivotIdx);
    const leftArr = arr.slice(0, pivotIdx);
    const rightArr = arr.slice(pivotIdx);

    return [leftArr, rightArr];
}

//--- Build your own ---//
function myFind(arr, callback) {
    for(let i=0; i<arr.length; i++) {
        if(callback(arr[i], i, arr) === true) return arr[i];
    }
}

myFind(scores, function(score) {
    return score > 91;
});

function myFindIndex(arr, callback) {
    for(let i=0; i<arr.length; i++) {
        if(callback(arr[i], i, arr) === true) return i;
    }
    return -1;
}

myFindIndex(scores, function(score) {
    return score !== 0 && score % 2 === 0;
});