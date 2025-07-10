class Person {
    constructor(name, height) {
        this.name = name;
        this.height = 0
    }

    setHeight(height) {
        this.height = height
    } 

    // print = function print() {
    //     console.log(`Name of Person is: ${this.name} & height is ${this.height}inch`)
    // }

}

Person.prototype.print = function (name, height) {
    console.log(`Name of Person is: ${this.name} & height is ${this.height}inch`)
}

const p1 = new Person("Nishchaya");
p1.setHeight(172);
p1.print()
console.log(Object.getPrototypeOf(p1));

/*
Methods defined using standard syntax (height(value) { ... }) are added to the prototype of the class.
Methods defined using = syntax (print = function print() { ... }) are added directly to the instance.
To save instance memory we have initialized print function in prototype of Parent.
*/

/*
KeyPoints:

1.  Person is a blueprint or template for creating objects 
2.  It defines properties and methods that instances will have.


3.  p1 is an object created using the new keyword with Person as a constructor or class
4.  p1 is an instance of Person. It inherits properties and methods from Person.prototype.
5.  Person.prototype is the prototype object associated with instances created from Person.
6.  Person as Prototype of p1: Technically, Person is not the prototype of p1
7.  Person is the constructor function or class that creates instances like p1
8.  p1's prototype is Person.prototype, meaning p1 inherits from Person.prototype.
9.  Proof: p1.__proto__ === Person.prototype gives true
10. 

*/