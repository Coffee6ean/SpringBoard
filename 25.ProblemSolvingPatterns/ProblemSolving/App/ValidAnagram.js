/**
 * Given two strings, write a function called 'validAnagram', which determines if
 * the second string is an anagram of the first.
 * 
 * An anagram is a word, phrase, or name formed by rearranging the letters of
 * another, such as cinema, formed from iceman 
 */

//My Solution
function frequencyCounter(str) {
    obj = {}; 

    for (let char of str) {
        if (obj[char]) {
            obj[char] += 1;
        } else {
            obj[char] = 1;
        }  
    }

    return obj;
}

function validAnagram(str1, str2) {
    arr1 = Object.keys(frequencyCounter(str1));
    arr2 = Object.keys(frequencyCounter(str2));
    obj1 = frequencyCounter(str1);
    obj2 = frequencyCounter(str2);

    if(arr1.length != arr2.length) return false;

    for (let char of arr1) {
        if(obj1[char] && obj2[char]) {
            if(obj1[char] != obj2[char]) return false;
        }
    }

    return true;
}

//Polished Solution
function validAnagram2(str1, str2) {
    if(str1.length !== str2.length) return false;
    const map1 = frequencyCounter(str1);
    const map2 = frequencyCounter(str2);
    if(map1.size !== map2.size) return false;
    for(let letter of map1.keys()) {
        if(map1.get(letter) !== map2.get(letter)) return false;
    }

}