# JS OO Under the Hood

- `new`
- prototypes
- constructor
- `Object.getPrototypeOf`
- prototypal inheritance

### `new`
- The  keyword does four things:
    
    ***new***
    
    1. Creates an empty object
    2. Sets the keyword ***this*** to be that object
    3. Returns the object -***return this***
    4. Creates a link to the object’s prototype

### Creates a Link?
Before we get there - let’s review objects/functions in JS

- Every **function** has a property on it called prototype
- The prototype object has a property called constructor which points back to the function
- When the ***new*** keyword is used to invoke a function, a link between the object created from new and the prototype object is established
- This link is called the **internal prototype** and can be accessed using `Object.getPrototypeOf()`

<aside>
💡 **Note:** Previously, people used to get the prototype by accessing a property called [__proto__](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto). Based on the name of this property alone, you can probably guess it was never intended for direct access and use, but you know, JavaScript programmers. Anyway, this way of getting a prototype is *officially deprecated*.

</aside>

### Show Me Some Code!

```jsx
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype; // an object
Vehicle.prototype.constructor === Vehicle; // true

let myFirstCar = new Vehicle('Toyota', 'Corolla', 2005);

Object.getPrototypeOf(myFirstCar) === Vehicle.prototype; // true
```

### Functions on the Prototype
It’s better to create instance methods on the prototype instead of defining them in the constructor.

- Why?

### Consider the Following

```jsx
// ES5
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.start = function() {
    return 'Starting!';
  };
}

Vehicle.prototype.honk = function() {
  return 'Beep!';
};
```

```jsx
// ES2015
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.start = function() {
      return 'Starting!';
    };
  }
  honk() {
    return 'Beep!';
  }
}
```

### The Purpose of the Prototype
- JavaScript uses this object to find methods and properties on everything in JS!
- If a property can not be found, JS works it’s way up the “prototype chain”, finding the prototype of every object
- If the property can not be found, undefined is returned

_Prototypal Inheritance_
```jsx
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.honk = function() {
  return 'Beep!';
};

function Car(make, model, year) {
  Vehicle.call(this, make, model, year); // similar to "super(make, model, year)"
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
```

### Notes on ES5 OOP
- ES2015 does all of this under the hood
- Make sure you’re able to explain what a prototype is
- Be able to define the prototype chain, how inheritance can be implemented

## Semicolons:

- Trivia time!
- If you don’t add a semi-colon, JS will automatically insert one (also known as ASI)

### Code

```jsx
function createPerson(first){
  return {first}
}

function createPersonNewLine(first){
  return
    {first}
}

createPerson('Steph') // {first: 'Steph'}
createPersonNewLine('Steph') // undefined
```
