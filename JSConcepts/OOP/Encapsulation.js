//2. Encapsulation: Wrapping data (variables) and methods that work on the data into a single unit.  -> "Data Hiding" eg. IIFE


class Car {

    constructor() {
        this.fuel = 0;
    }

    refuel(amount) {
        if (amount > 0) {
            this.fuel += amount;
            console.log(`Refueled: ${amount} liters`);
        }
    }

    drive() {
        if (this.fuel > 0) {
            this.fuel--;
            console.log(`Driving... Fuel left: ${this.fuel}`);
        } else {
            console.log("Can't drive: No fuel!");
        }
    }
}

const myCar = new Car();
myCar.refuel(2);
console.log("", myCar.fuel)
myCar.drive();
myCar.drive();
myCar.drive(); // fuel will be 0