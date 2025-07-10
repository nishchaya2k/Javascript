// Prototypal inheritance:

//Example 1: 

function Person(field) {
    this.field = field,
        this.getField = function () {
            console.log(this.field)
        }
}

const obj1 = new Person("Doctor");

/*
1. obj1.__proto__ is a reference to the prototype of the object obj1, which is the prototype of the constructor function Person.

2. When you create an object using a constructor function in JavaScript, the new object’s __proto__ property is set to the prototype property of the constructor function. This is how JavaScript implements prototypal inheritance.

3. Here’s what obj1.__proto__ is:

    obj1.__proto__:
    This is the internal reference to the prototype of the object obj1.
    It points to Person.prototype because obj1 was created with new Person().
    Essentially, obj1.__proto__ === Person.prototype is true.

4. Summary:

    obj1.__proto__ is a reference to Person.prototype.
    This linkage is part of JavaScript's prototypal inheritance system, allowing obj1 to inherit properties and methods defined on Person.prototype.
*/


//Example 2: Prototype Chaining -> Add Method to the prototype not the instance:

function Person(field) {
    this.field = field;
}   

Person.prototype.getField = function () {
    console.log(this.field);
}

let obj2 = new Person("Engineer");

/*

1. Person.prototype.getField defines a method on the prototype of Person. This means all instances of Person will share this method, reducing memory usage and leveraging the prototype chain.

2. Prototype Chain Visualization:
    - obj1 → Person.prototype → Object.prototype → null
    - obj1 inherits from Person.prototype, which in turn inherits from Object.prototype.


3. Benefits of Using the Prototype Chain:
    - Memory Efficiency: Methods are shared across instances, so each instance doesn't need its own copy.
    - Inheritance: You can add more properties or methods to Person.prototype, and all instances (obj1, obj2, etc.) will automatically have access to them.
    - Flexibility: Allows for more dynamic and flexible object-oriented programming in JavaScript.

4. The method getField() is not on obj1 directly, but JavaScript finds it on the prototype, demonstrating the concept of the Prototype Chain.

*/



