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

