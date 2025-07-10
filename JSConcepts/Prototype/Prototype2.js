//Example 1:

function myFunction() {
    console.log("myFunction")
}

console.log("Example 1")

let obj1 = new myFunction();


console.log(myFunction.prototype)
console.log(myFunction.__proto__)

console.log(myFunction.prototype === Function.prototype) //false
console.log(myFunction.__proto__ === Function.prototype) //true


console.log(myFunction.prototype.__proto__ === Function.prototype) //false
console.log(myFunction.prototype.__proto__ === Object.prototype); // true
console.log(myFunction.__proto__.__proto__ === Object.prototype) //true
console.log(Function.prototype.__proto__ === Object.prototype); // true

console.log(obj1.__proto__)  //{} -> constructor,[Prototype]
console.log(obj1.__proto__ === myFunction.prototype)   //true
console.log(obj1.__proto__.__proto__ === Object.prototype)    //true
console.log(obj1.__proto__.__proto__ === Function.prototype)    //false





/*
1.  Function.prototype:

    - This is the prototype object for all function constructors. It provides methods and properties that are available to all function objects, such as call(), apply(), and bind().

2.  myFunction.prototype:

    - This is the prototype object specific to the myFunction function. When you create a function in JavaScript, its prototype property is an object that is used to provide methods and properties to instances created by that function if the function is used as a constructor.

    - myFunction.prototype is not the prototype of the function myFunction itself, but the prototype of instances created by myFunction.


3.  myFunction.__proto__:

    - myFunction is a function (in JavaScript, every constructor is a function), and functions themselves are objects.
    - Every object in JavaScript has an internal [[Prototype]] property, which is typically accessed via __proto__. 
    eg. let str = "df";  
        str.__proto__; (which is equal to String.prototype)


    - For functions, __proto__ points to Function.prototype because functions are also objects created by the Function constructor.
    Thus, Animal.__proto__ points to Function.prototype.


4.  Function.prototype contains methods like call, bind, and apply.

    - These methods are non-enumerable properties, meaning they do not appear in standard enumeration methods or default console output.

    - To see non-enumerable properties like call, bind, and apply, you need to use Object.getOwnPropertyNames(Function.prototype), which lists all properties, including non-enumerable ones.



5.  Difference in proto & prototype:

    - __proto__ Use this to access the prototype of an instance or function object itself.

    - prototype is a property of constructor functions (or classes) that is used to define properties and methods that will be shared among all instances created by that constructor.

*/



//Example 2:

function Parent() { }
Parent.prototype.method = function () { console.log('Parent method'); };

function Child() { }
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

//Child.prototype -> Parent.prototype -> Object.prototype -> null

console.log("Example 2")
console.log(Child.prototype.__proto__ === Parent.prototype)  //true
console.log(Child.prototype)  //
console.log(Child.__proto__ === Function.prototype)  //true
console.log(Parent.__proto__ === Function.prototype)  //true



/*
1.  'Child.prototype' is an object whose prototype is 'Parent.prototype'
*/



//Example 3.
function Parent() { }
Parent.prototype.method = function () { console.log('Parent method'); };

function Child() { }
Child.prototype = Object.create(Parent);
Child.prototype.constructor = Child;


/*
1.  'Child.prototype' is an object whose prototype is 'Parent'

2.   Why Child.prototype shows -> Function {} on console, bcoz

    - JavaScript is essentially showing the structure of the prototype object.
    - Because Child.prototype is created from Object.create(Parent), it has Parent (a function) directly as its prototype.
    - Therefore, Child.prototype appears as Function {} because its prototype chain directly links to a function (Parent).

3.  Understanding the constructor Property ?

    - The constructor property is a key part of JavaScript’s object model and prototype chain. - It is always present to provide a way to refer back to the constructor function that created the prototype. This default behavior is what ensures that you always see the constructor property when expanding an object's prototype in tools like DevTools.

4.  prototype vs [[Prototype]]

    - prototype: Property on constructor functions used to define properties and methods for instances created by the constructor.
    - [[Prototype]] (__proto__): Internal property of objects used to access inherited properties and methods via the prototype chain.
    - Instances inherit from [[Prototype]]: When an object is created via a constructor function, its [[Prototype]] is set to the constructor's prototype property, enabling inheritance.

*/
