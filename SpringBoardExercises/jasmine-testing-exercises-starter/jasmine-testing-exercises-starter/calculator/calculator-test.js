//Tests
const testObj1 = calculateMonthlyPayment({amount: 10000, years: 10, rate: 4.5});
const testObj2 = calculateMonthlyPayment({amount: 125000, years: 15, rate: 12});
const testObj3 = calculateMonthlyPayment({amount: 70000, years: 2, rate: 10});
const testObj4 = calculateMonthlyPayment({amount: 10, years: 0.2, rate: 5});
const testObj5 = calculateMonthlyPayment({amount: "txt", years: 0.2, rate: 5});
const testObj6 = calculateMonthlyPayment({amount: 5000, years: true, rate: 5});

describe("Testing suite for 'calculateMonthlyPayment()'", function() {
  it('should calculate the monthly rate correctly', function () {
    expect(testObj1).toEqual("103.64");
    expect(testObj2).toEqual("1500.21");
    expect(testObj3).toEqual("3230.14");
    expect(testObj4).toEqual("4.20");
  });
  
  it("should return a result with 2 decimal places", function() {
    expect(testObj1.split(".")[1].length).toEqual(2);
    expect(testObj2.split(".")[1].length).toEqual(2);
    expect(testObj3.split(".")[1].length).toEqual(2);
    expect(testObj4.split(".")[1].length).toEqual(2);
  });

  it("should print 'NaN' for all non-integer values", function() {
    expect(calculateMonthlyPayment(testObj5)).toEqual("NaN");
    expect(calculateMonthlyPayment(testObj6)).toEqual("NaN");
  });
})

describe("Testing suite for 'updateMonthly()'", function() {
  it("should reject all non-integer values", function() {
    expect(() => updateMonthly(calculateMonthlyPayment(testObj5))).toThrowError();
    expect(() => updateMonthly(calculateMonthlyPayment(testObj6))).toThrowError();
  });
})

