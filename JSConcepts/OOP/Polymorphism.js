//Polymorphism: Same method name, different behaviors in child classes, Or Polymorphism means the same function with different signatures is called many times.


// In real life, for example, a boy at the same time may be a student, a class monitor, etc.So a boy can perform different operations at the same time.Polymorphism can be achieved by method overriding 


//Example 1
class Car {
    drive() {
        console.log("Driving a generic car...");
    }
}

class SportsCar extends Car {
    drive() {
        console.log("Driving a fast sports car!");
    }
}

class ElectricCar extends Car {
    drive() {
        console.log("Driving silently with electricity.");
    }
}

function testDrive(car) {
    car.drive(); // same method, different behavior
}

testDrive(new Car());
testDrive(new SportsCar());
testDrive(new ElectricCar());
  


//Example 2

class Boy {
    act() {
        console.log("I am just a boy.");
    }
}

class Student extends Boy {
    act() {
        console.log("I am studying as a student.");
    }
}

class Monitor extends Boy {
    act() {
        console.log("I am managing the class as a monitor.");
    }
}

class SportsPlayer extends Boy {
    act() {
        console.log("I am playing football as a sports player.");
    }
}

// Polymorphic function
function rolePlay(person) {
    person.act(); // Same method, different behavior
}

// Test different roles
rolePlay(new Boy());
rolePlay(new Student());
rolePlay(new Monitor());
rolePlay(new SportsPlayer());
