describe('Test matchers', function() {
    test('Compare "toBe" and "toEqual"', function() {
        const nums = [1,2,3];
        const copy = [...nums];
        const nums2 = nums;

        expect(copy).toEqual(nums);
        expect(nums2).toBe(nums);
    });

    test('Playing with "toContain"', function() {
        const colors = ['red', 'orange'];

        expect(colors).toContain('red');
        expect("Hello").toContain('Hell');
        //expect(colors).toContain('yellow');
    });

    test('Playing with numeric matchers', function() {
        expect(7).toBeGreaterThanOrEqual(2);
        expect(7).toBeGreaterThanOrEqual(7);
    });

    test('Playing with boolean matchers', function() {
        expect('hi').toBeTruthy();
        expect('').toBeFalsy();
    });

    test('Playing with any', function() {
        const randNum = Math.random() * 6;

        expect(randNum).toEqual(expect.any(Number));
        expect('ASDK').toEqual(expect.any(String));
    });

    test('Playing with not', function() {
        const numLives = 9;

        expect(numLives).not.toEqual(0);
    });
});
