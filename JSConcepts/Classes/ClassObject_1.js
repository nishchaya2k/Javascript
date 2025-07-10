//the behavior and functionality are consistent between class and constructor function

// Classes

class Car {
    constructor(brand) {
        this.brand = brand;
    }

    getName = function () {        //function EXpression: attached to instance
        console.log(this.brand)
    }

    getBrandName() {                   //function declaration: attach to class
        console.log(this.brand)
    }

    static getStaticName = function (brand) { //static method: attach to constructor of class
        console.log(brand)
    }
}

let fortuner = new Car("Fortuner")
Car.getStaticName(fortuner.brand);

// Array.isArray([1, 2, 3])



// Contructor Function

function Car(brand){
    this.brand = brand;
    this.getName = function() {
        console.log(this.brand)
    }
}

Car.prototype.getName = function () {
    console.log(this.brand)
}

Car.getName = function () {
    console.log(this.brand)
}

let fortuner = new Car("Fortuner");
fortuner.getName();
