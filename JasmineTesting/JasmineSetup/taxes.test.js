describe("calculateTaxes() tests", function() {
  //--- Document Tests ---//
  it("should calculate lower-bracket taxes", function () {
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(20000)).toEqual(3000);
  });

  it("should calculate higher-bracket taxes", function () {
    expect(calculateTaxes(50000)).toEqual(12500);
    expect(calculateTaxes(80000)).toEqual(20000);
  });

  //--- Course Tests ---//
  it("should calculate the high tax bracket", function() {
    expect(1+1).toEqual(2);
    //expect("hello").toEqual("goodbye");
  });

  it("should reject invalid incomes", function() {
    //expect(calculateTaxes("ajnwijncji")).toThrowError();
    expect(() => calculateTaxes("ajnwijncji")).toThrowError();
    expect(() => calculateTaxes([])).toThrowError();
    expect(() => calculateTaxes(true)).toThrowError();
  });
})

describe("removeDupes() tests", function() {
  it("should remove duplicates from an array", function() {
    //expect(removeDupes([1,1,2,2,3,4])).toBe([1,2,3,4]);
    expect(removeDupes([1,1,2,2,3,4])).toEqual([1,2,3,4]);
    expect(removeDupes([1,2,3])).toEqual([1,2,3]);
  });
  
  it("should remove duplicates from a string", function() {
    expect(removeDupes("hello")).toEqual("helo");
    expect(removeDupes("hello")).toBeInstanceOf(String);
  });
  
  it("should remove value from array", function() {
    //expect(remove([1,2,3,4,5,6], 6)).toContain(6);
    expect(remove([1,2,3,4,5,6], 6)).not.toContain(6);
  });
})

describe("submitForm() tests", function() {
  it("saves input val to 'usernames' array", () => {
    input.value = "chickenGuy";
    submitForm();
    expect(usernames.length).toBe(1);
    expect(usernames).toContain("chickenGuy");
  });

  it("saves long usernames", () => {
    input.value = "The Real Pavoreal 227";
    submitForm();
    expect(usernames.length).toBe(1);
    expect(usernames).toContain("The Real Pavoreal 227");
  });
})

//--- Clean-up code - Reset values and elements ---//
afterEach(function() {
  //console.log("After Each");
  input.value = "";
  usernames = [];
});

beforeEach(function() {
  console.log("Before each");
});

beforeAll(function() {
  console.log("Before all")
});

afterAll(function() {
  console.log("After all")
});

