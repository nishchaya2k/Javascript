
// Encapsulation: #fuelLevel and #consumeFuel() are hidden(private), controlling how fuel is managed.

// Abstraction: The drive() method provides a simple interface for driving the car, hiding the fuel consumption logic from the user.

/*
In short, encapsulation protects the car's internal state and behavior, ensuring that users interact with a clean, simplified interface. They don’t need to know how the fuel is managed; they just know that if they drive, the car will consume fuel appropriately.
*/





class Car {
    #fuelLevel;  // Private field for fuel level

    constructor(brand, fuelLevel) {
        this.brand = brand;
        this.#fuelLevel = fuelLevel;
    }

    // Public method to drive the car
    drive() {
        if (this.#fuelLevel > 0) {
            console.log(`${this.brand} is driving.`);   
            this.#consumeFuel();  // Private method called internally
        } else {
            console.log("Cannot drive. Low fuel!");
        }
    }

    // Public method to check fuel level
    checkFuel() {
        return `Fuel level: ${this.#fuelLevel}`;
    }

    // Private method to reduce fuel
    #consumeFuel() {
        this.#fuelLevel -= 10;
    }
}

// Example usage
let myCar = new Car("Honda", 30);
console.log(myCar.checkFuel());  // Outputs: Fuel level: 30
myCar.drive();                   // Outputs: Honda is driving.
console.log(myCar.checkFuel());  // Outputs: Fuel level: 20

