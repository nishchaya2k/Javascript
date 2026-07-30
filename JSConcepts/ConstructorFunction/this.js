// 1 global scope - depends on jre --- nodeJS - GLOBAL, browser console - Window
//Definition: this keyward points to the object who invoked the function 
console.log(this);

// 2 inside a function

// a) non strict mode

function foo() {
    console.log(this); // undefined -> this substitution(part of memory allocation) -> window
}

foo();  //window

window.foo();   //window

/*
So, in non-strict mode, even though this would logically be undefined, JavaScript substitutes it with window to ensure this is always defined.
*/


// b) 'use strict' -> strict mode

function foo() {
    "use strict";
    console.log(this);
}

foo(); // undefined

window.foo(); //  window


/*
When you are in strict mode ("use strict"), JavaScript does not perform this substitution. Thus, if a function is invoked without a specific context, this remains undefined
*/


// 3 this inside a object method

let obj1 = {
    a: 10,
    foo: function () {
        // console.log(this);   //{a:10,foo:f}
        function hoo() {
            function zoo() {
                console.log(this);
            }
            zoo();
        }
        hoo();
    },

};

obj1.foo();


// 4 arrow function -> this return the parent lexical environment in arrow function
//Arrow functions do not have their own this context. Instead, they lexically capture the this value from their surrounding context.

let arr = () => {
    console.log(this);
}

arr();


// 5 arrow function is a object method

// example 1 -- parent function is arrow function

let obj2 = {
    a: 10,
    foo: () => {
        hoo = () => {
            console.log(this);    //window
        }
        hoo();

    }

}

obj2.foo();

// example 2 -- parent function is normal function

let obj3 = {
    a: 10,
    foo: function () {
        hoo = () => {
            console.log(this);    //{a:10,foo:f}
        }
        hoo();
    }
}
obj3.foo();


// 5 constructor function and claases

// this points to instance / newly created object


//6 
var name = "Global";

var obj = {
    name: "Local",
    greet: function () {
        return () => {
            console.log("Hello, my name is " + this.name);
        };
    }
};

var func = obj.greet();
func();


//7
var name = "Global";

var obj = {
    name: "Local",
    greet: function () {
        return function () {
            console.log("Hello, my name is " + this.name); //Hello, my name is Global
        };
    }
};

var func = obj.greet();
func();


//8
var name = "Global";

var obj = {
    name: "Local",
    greet: function () {
        return () => {
            console.log("Hello, my name is " + this.name);  //Hello, my name is Local
        };
    }
};

var func = obj.greet();
func();



/*
Always Consider the environment where code is running, bcoz on 
vs code -> {}, Broswer -> Window object 

NON STRICT MODE
undefiend -> 'this substitution Process' -> window object


STRICT MODE
undefiend -> 'this substitution Process' [Doesn't Work] -> undefiend
*/