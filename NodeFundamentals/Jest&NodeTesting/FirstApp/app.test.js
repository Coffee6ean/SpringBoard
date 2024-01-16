//const { describe } = require('yargs');
const {square, cube} = require('./app');

describe('Testing "square" function', function() {
    test('function should square a number', function() {
        const res = square(3);
        expect(res).toEqual(9); 
    });
    
    test('function should square a negative number', function() {
        const res = square(-9);
        expect(res).toEqual(81); 
    });
});

describe('Testing "cube" function', function() {
    test('function should cube a number', function() {
        const res = cube(3);
        expect(res).toEqual(27); 

        const res2 = cube(2);
        expect(res2).toEqual(8);
    });
    
    test('function should cube a negative number', function() {
        const res = cube(-9);
        expect(res).toEqual(-729); 
    });
});
