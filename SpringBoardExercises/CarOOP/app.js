class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)) {
            console.log("Only vehicles are allowed in here!");
            throw new Error("Input error. Expected an 'object' type value");
        };
        if(this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        console.log("New vehicle added");
    }
    remove(vehicleSpot) {
        this.vehicles.splice(vehicleSpot);
        console.log("Vehicle removed");
    }
}

class Vehicle {
    //--- Class Fields ---//
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //--- Class Methods ---//
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
    honk() {
        return "Beep.";
    }
}

class Car extends Vehicle {
    //--- SubClass Fields ---//
    constructor(make, model, year) {
        super(make, model, year);
        //new property
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!";
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk();

let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); 
myFirstCar.honk();     
myFirstCar.numWheels;  

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
myFirstMotorcycle.toString();  // "The vehicle is a Honda Nighthawk from 2000."
myFirstMotorcycle.honk();  // "Beep."
myFirstMotorcycle.revEngine();  // "VROOM!!!"
myFirstMotorcycle.numWheels;  // 2

let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."