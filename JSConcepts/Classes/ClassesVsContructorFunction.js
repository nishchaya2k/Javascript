/*

1.  Classes: Its a syntactical sugar of constructor function, means in the backend its similarly behave as constructor function do, just we write it in different way.

2.  Contructor Function: Its a blueprint with respect to its instance.

3.  Explanation:
When JavaScript Introduced, there is only contructor function in the existance, but people objects that its not a oop language, so just for the sake of people or to show them they introduced classes. but behind the scenes classes also behave like a contructor function

4.  Classes are the modern way to show constructor function


5. Proof that Both Constructor Function and  Classes are same*/

// 6. obj1.__proto__ === ParentClass.prototype  = {} contains same items inside it, by why {}




//Example - Classes
class ParentClass {
    constructor(name) {
        this.name = name;
        // this.getName = function () {
        //     console.log("Name: ", this.name)
        // }
    }
    //function expression -> no need to use this,  it will attach to instance of class

    // getName = function () {
    //     console.log("Name: ", this.name)
    // }

    //function expression + static ->  attach directly to Parent constructor function

    // static getName = function () {
    //     console.log("Name: ", this.name)
    // }

    //function declaration - attach directly to Parent not to instance
    
    // getName () {
    // console.log("Name: ", this.name)
    // }
}


ParentClass.prototype.nameLength = function () {
    console.log("Length: ", this.name.length)
}


//why prototype chaining does not work in constructor function here nameType store in constuctor function of ParentClass, instance of ParentClass can't access nameType
ParentClass.nameType = function () {
    console.log("Length: ", typeof this.name)
}

let obj1 = new ParentClass("Nishchaya")
obj1.getName();
obj1.nameLength();

//Example - Constructor Function

function Parent(name) {
    this.name = name;
    this.getName = function () {
        console.log("Name: ", this.name)
    }
}



Parent.prototype.nameLength = function () {
    console.log("Length: ", this.name.length)
}

Parent.nameType = function () {
    console.log("Length: ", typeof this.name)
}

let obj2 = new Parent('Nishchaya');
obj2.getName();
obj2.nameLength();

//Doubt ? why Contructor function shows in prototype of class or constructor function
//Doubt ? when print obj1 why protoype is object and again its prototype is object

//getName will go parent memory
//nameType will go to parent in its contructor 