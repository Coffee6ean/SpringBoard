const { getCartTotal } = require('./cart');

describe('Test "getCartTotal"', function() {
    //--- Setup ---//
    let cart;

    beforeAll(function() {
        console.log('Before all');
    })

    beforeEach(function() {
        console.log('Before each test');
        cart = [
            {item: 'le croix', price:4.99, qty:3},
            {item: 'pretzels', price:8.99, qty:10}
        ]
    });

    afterAll(function() {
        console.log('After all');
    })

    afterEach(function() {
        console.log('After each test');
    })


    //--- Test ---//
    test('Get total w/o discount', function() {
        const total = getCartTotal(cart);
        expect(total).toBe(104.87);
    });

    test('Get total w/discount', function() {
        const total = getCartTotal(cart, 0.5);
        expect(total).toBe(52.44);
    });
});
