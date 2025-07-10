/*

- Variable Shadowing:

1. Variable shadowing happens when a variable is declared in an inner scope using the same name as a variable in an outer scope. This leads to the inner scope’s variable taking precedence, effectively replacing and overshadowing the outer scope’s variable.

*/


// a). Eg. 
var a = 20;//this is the outer scoped 
{
    var a = 10;//this variable shadows the outer scoped one;
    let b = 15;
    const c = 20;
}

// b). Eg. 
let a = 10;
if (true) {
    var a = 10;
}

/*
Summary: 

a). Technically both variables have same scope and "Global Scope", & redeclaration is allowed in case of var, so code is correct

b). Shadowing the variables declared with let and const in same scope is illegal. as let/const redeclaration is not allowed

*/


