//Example 1, Constructor function of varibles as follows

let str = "sf"
console.log(str.__proto__)  // String

let bl = "bool"
console.log(bl.__proto__)  //Boolean

let arr = [1, 2, 3]
console.log(arr.__proto__) //Array

//directly getNameObject in Object to save memory 
Object.prototype.getNameObject = function (name) {
    console.log(this.name)
}

function Parent(name) {
    this.name = name;
    this.getName = function () {
        console.log(this.name)
    }
}

//Parent Contructor function contains getNameParent, so its independent on intances, as much as
//we want to create instances, instances will not take memory of getNameParent,  
Parent.prototype.getNameParent = function () {
    console.log("Good Moring" + this.name)
}

let instance1 = new Parent("Shiva");   //new is using so that it refers to 
let instance2 = new Parent("Mahadev");   //new is using so that it refers to 


//instance1/2 will take the memory as much the variable or function we use in Parent constructor
//Can we save memory?
//the methods or variables which are not dependent on objects, put them directly to 'Object' prototype (top level), so that any instance can access it from Object, and we saved memory 

//if we create instance without new keyword then 'this' will refer to window object, otherwise
//this refers to newly created instance/object or newly drived from constructor function,
//just bcoz of new keyword this refers to the created instance
//Array, String, Number, Boolean are all inbuild constructor function
//Constructor function of instance1 is Parent
//Q. Prototype of instance1.__proto__ is {} why ?
// instance1 -> Parent Constructor -> Object Proto -> null



//Doubt? 

//where its taking memory, why its storing in constructor function of 
Parent.getNameParent1 = function () {
    console.log(this.name)
}

// instance1.getNameParent1()  //can't access, why? -> property become private


//Example 4:





