// Prototype: Its a mechanism by which Javascript objects inherit properties from each another

/*
1) .prototype -> 

- Used in constructor functions.
- It's an object that defines properties and methods that should be shared across all instances created by that constructor.


2) .__proto__ 

- Used in Instances 
*/



/*...................Example 1..................... */


const nums1 = [1, 2, 3];
const nums11 = new Array(1, 2, 3)
console.log(nums1.__proto__)
console.log(nums1.__proto__ === Array.prototype)    //true
console.log(nums1.__proto__ === nums11.__proto__)    //true
console.log(Object.getPrototypeOf(nums1) === Array.prototype)  //true
console.dir(Array.prototype);


/*...................Example 2..................... */

const str2 = "hii";
const str22 = new String("hii")
console.log(str2.__proto__)
console.log(str2.__proto__ === String.prototype)  //true


/*...................Example 3..................... */

console.log(nums1.__proto__.__proto__ === Object.prototype)  //true


/*...................Example 4..................... */


console.log(Array.prototype.__proto__ === Object.prototype)  //❌ way, true
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype); //✅ true



/*...................Example 5 (Normal Function)..................... */

function myFunction() {
    console.log("myFunction")
}

console.log("Function", myFunction.__proto__ === Function.prototype)  //true
console.log("Function", myFunction.__proto__ === myFunction.prototype)  //false, ? 
console.log("Function", myFunction.prototype === Object.prototype)  //false, ?
console.log("Function", Object.getPrototypeOf(Function.prototype) === Object.prototype)//true


/*...................Example 6  (Constructor Function)..................... */

function Car(make) {
    this.make = make;
}

Car.prototype.drive = function () {
    console.log(`${this.make} is driving.`)
}

const myCar = new Car('toyata');
const myJeep = new Car('maruti')
myCar.drive();

console.log(myCar.__proto__ == Car.prototype) // true
console.log(myCar.__proto__ === myJeep.__proto__) //true
console.log(myCar.__proto__.__proto__ === Function.prototype) //false
console.log(Car.__proto__ === Function.prototype) //true?
console.log(Car.prototype.__proto__ === Object.prototype); // true



// Q1. we use prototype for constructor function then why Car.__proto__, as Car is constructor function ?

// Q2. how constructor function have two chains, one from proto and one from prototype ? 

// Q3. Prototype of function is 


function foo() {
    console.log("foo")
}

console.log(foo.__proto__)


/* ------ Current Function Chain -----

myCar(instance)
└── __proto__ → Car.prototype
                   └── __proto__ → Object.prototype

Car(constructor function)
└── __proto__ → Function.prototype
                   └── __proto__ → Object.prototype

*/


// constructor function, class constructor -> .prototype
// instances, function  -> .__proto__