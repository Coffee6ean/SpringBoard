const rollDice = require('./app');

describe('Test "rollDice" function', function() {
    test('It rolls the correct amount of times', function() {
        //Redifine method for mocking
        Math.random = jest.fn(() => 0.5);
        
        expect(rollDice(6)).toEqual(4);
        expect(rollDice(2)).toEqual(2);
        expect(Math.random).toHaveBeenCalled();
        expect(Math.random.mock.calls.length).toBe(2);
    });
})
