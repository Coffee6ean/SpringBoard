// Write a function which takes two numbers and return their sum.
/**
 * 1. Can I restate the problem in my own words?
 * 2. What are the inputs that go into the problem?
 * 3. What are the outputs that should come form the solution to the problem?
 * 4. Can the outputs be determined from the inputs?
 * 5. How should I lable the important pieces of data that are a part of the problem? 
 */

//*******************************
// CONCRETE EXAMPLES
//*******************************
//Write a function which takes in a string and returns counts of each character in the string
/**
 * 1. Start with simple examples
 * -> charCount('hello') => {'h':1, 'e':1, 'l':2, 'o':1}
 * 2. Progress to more complex examples
 * -> charCount('My phone number is (333)-222-3333')
 * 3. Explore examples with empty inputs
 * 4. Explore examples with invalid inputs
 */

//*******************************
// BREAKING IT DOWN
//*******************************
charCount('aaaa');
/**
 * {
 *  a: 4
 * }
 */

charCount('hello');
/**
 * {
 *  h: 1,
 *  e: 1,
 *  l: 2,
 *  o: 1
 * }
 */

charCount('Your PIN number is 1234!');
/**
 * {
 *  1: 1,
 *  2: 1,
 *  3: 1,
 *  4: 1,
 *  b: 1,
 *  e: 1,
 *  i: 2,
 *  m: 1,
 *  n: 2,
 *  o: 1,
 *  p: 1,
 *  r: 2,
 *  s: 1,
 *  u: 2,
 *  y: 1
 * }
 */

//--- Pseudo Code ---// 
//Create empty object to hold char counts
//Loop over each char in str
    //If char is letter or number - downcase first
        //If char is in object, add 1 to count
        //Otherwise, add to object and set count to 1
//Return object with character counts


//*******************************
// PROBLEM SOLVING
//*******************************
function charCount(str) {
    //Create empty object to hold char counts
    const obj = {};
    //Loop over each char in str
    for(let char of str) {
        //If char is letter or number 
        if(/[A-Z0-9]/i.test(char)) {
            char = char.toLowerCase(); //- downcase first
            //If char is in object, add 1 to count
            if(obj[char]){
                obj[char] += 1;
            //Otherwise, add to object and set count to 1    
            } else {
                obj[char] = 1;
            }
        }
    }
    //Return object with character counts
    return obj;
}

//*******************************
// REFACTOR & IMPROVE
//*******************************
function charCount2(str) {
    //Create empty object to hold char counts
    const obj = {};
    //Loop over each char in str
    for(let char of str) {
        //If char is letter or number 
        if(/[A-Z0-9]/i.test(char)) {
            char = char.toLowerCase(); //- downcase first
            //If char is in object, add 1 to count
            //Otherwise, add to object and set count to 1    
            obj[char] = (obj[char] + 1) || 1;
        }
    }
    //Return object with character counts
    return obj;
}

function charCount3(str) {
    return str.split('').reduce((obj, char) => {
        if(/[A-Z0-9]/i.test(char)) {
            char = char.toLowerCase();
            obj[char] = (obj[char] + 1) || 1;
        }
        return obj;
    }, {})
}
