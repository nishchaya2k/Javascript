/* 
1.  Call:   function borrowing, achieved with call method, first variable in call method is 
            always reference to this variable & later arguments can be the arguments to function    
    Definition: Use to invoke function directly by passing in the reference which points to this variable directly
*/

//Example 1
let name1 = {
    firstName: 'nishchaya',
    lastName: 'narula',
    printFunction: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

name1.printFunction();

let name2 = {
    firstName: 'sachin',
    lastName: 'singh'
}


name1.printFunction.call(name2);


//Example 2

let name3 = {
    firstName: 'nishchaya',
    lastName: 'narula',
}

let printFunction = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " " + hometown + " " + state);
}


printFunction.call(name3);

let name4 = {
    firstName: 'sachin',
    lastName: 'singh'
}

//function borrowing, achieve with call method
printFunction.call(name4, "Rewari", "Haryana");


/*
2.  Apply Method:   only difference in call and apply is, the way we pass arguments
                    in apply method, we pass arguments in array list rather than passing individually
*/


printFunction.apply(name4, ["Rewari", "Haryana"]);


/*
3.  Bind Method:    Doesn't directly invoke the method but gives you copy of exactly same method
                    which can be invoked later
*/

let print = printFunction.bind(name4, ["Rewari", "Haryana"]);  //return copy of printFuntion
console.log(print);
print();  //returning undefined also why?

