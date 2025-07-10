/*
Encapsulation is the process of bundling data (variables) and methods (functions) together inside a class, and controlling access to them. It protects the internal state of the object by restricting direct access.
*/

class Car {
    #fuelLevel;  // Private field (encapsulated)

    constructor(brand, fuelLevel) {  
        this.brand = brand;
        this.#fuelLevel = fuelLevel;  // Private field
    }

    // Public method to get fuel level - getter
    getFuelLevel() {
        return this.#fuelLevel;
    }
}

const myCar = new Car('Tesla', 50);
console.log(myCar.getFuelLevel());  // Can access via method
console.log(myCar.#fuelLevel);  // Error: Cannot access private field directly

