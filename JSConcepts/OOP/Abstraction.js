//1. Abstraction: Hiding complex implementation details and showing only the necessary parts of an object.


class Car {
    startEngine() {
        console.log("Engine started");
    }

    drive() {
        this.startEngine();  // hiding internal detail
        console.log("Driving the car...");
    }
}

const myCar = new Car();
myCar.drive(); // User doesn't know about how engine starts, they just use drive()


// -> Explanation: The drive() method hides the details of how the engine is started, shows us simple interface.