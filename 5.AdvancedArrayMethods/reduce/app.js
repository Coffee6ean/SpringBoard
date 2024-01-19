const nums = [2,5,6,8,12,1];

let total = 0;
for(let n of nums) {
    total += n;
    console.log(total);
}

const totalSum = nums.reduce(function(accumulator, currentVal) {
    //console.log(`Accumulator is: ${accumulator}`);
    //console.log(`currentVal is: ${currentVal}`);
    //let updatedSum = accumulator + currentVal;
    //console.log(`updatedSum is: ${updatedSum}`);
    //console.log("=".repeat(10));
    return accumulator + currentVal;
}, 0);

const totalSum2 = nums.reduce(function(sum, num) {
    return sum + num;
},0);

const findMaxVal = nums.reduce(function(maxVal, currentVal) {
    if(currentVal > maxVal) {
        return currentVal;
    } else {
        return maxVal;
    }
});

const findMinVal = nums.reduce(function(minVal, currentVal) {
    if(currentVal < minVal) {
        return currentVal;
    } else {
        return minVal;
    }
});

const people = [
    {name: "Jimbo", age: 15},
    {name: "Allison", age: 16},
    {name: "Juan", age: 15},
    {name: "Bertha", age: 17},
    {name: "Monty", age: 16},
    {name: "Simone", age: 15},
    {name: "Jess", age: 14}
]

const ages = people.reduce(function(peopleAges, currentPerson) {
    //console.log(`peopleAges: ${JSON.stringify(peopleAges)}`);
    //console.log(`currentPerson: ${JSON.stringify(currentPerson)}`);

    const age = currentPerson["age"];
    if(peopleAges[age] == null) {
        peopleAges[age] = 1;
    } else {
        peopleAges[age] += 1;
    }

    //console.log(`updated peopleAges: ${JSON.stringify(peopleAges)}`);
    //console.log("=".repeat(10));

    return peopleAges;
}, {})