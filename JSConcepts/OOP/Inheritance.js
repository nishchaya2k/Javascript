//Inheritance: Reusing properties and methods from a parent class

class Vehicle {
    constructor(brand) {
        this.brand = brand; //encapsulation,eg. accessed by Vehicle or the one's who extends the Vehicle
    }

    start() {
        console.log(`${this.brand} is starting...`);
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand); // call parent constructor
        this.model = model;  //vehicle can't access model, so here abstraction eg.
    }

    drive() {
        let a = 10;    
        this.start(); // inherited from Vehicle
        console.log(`Driving a ${this.brand} ${this.model}`);
    }
}

const myCar = new Car("Toyota", "Camry");
myCar.drive();
  