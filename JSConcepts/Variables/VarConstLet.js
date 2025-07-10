/* 
a). Var 

1. var declarations are functional scope 
2. var variables can be re-declared and updated
3. We can achieve hoisting in var: 
 * Hoisting is a concept which tells that we can access variable/functions before there initialization *
:
Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their scope before code execution

4. var gives 'undefined' when we do hoisting

*/

console.log(greeter)
var greeter = "hey hi";
console.log(greeter)
var greeter = "say Hello instead";
console.log(greeter)

const timesVar = 2;
if (timesVar < 3) {
    var checkVar = 'its true'
}

console.log(checkVar) //'its false' (Var is Functional Scope)



/*

b). Let

1. Let are block Scope
2. A block is a chunk of code bounded by {}
3. Variable declared in a block with Let/Const is only available for use within that block.
4. let can be updated but not re-declared.
*/


const timesLet = 2;
if (timesVar < 3) {
    let checkLet = 'its true'
}

console.log(checkLet) //Reference Error: CheckLet is not defined

/*
c). Const

1. Const are block Scope
2. A block is a chunk of code bounded by {}
3. Variable declared in a block with Const is only available for use within that block.
4. let neither updated nor re-declared.
5. Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.
6. 

*/



/*
-- Summary:

1. var declarations are globally scoped or function scoped while let and const are block scoped.
2. var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.

3. They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.

4. While var and let can be declared without being initialized, const must be initialized during declaration.

5. var can be redeclared and reused within the same scope without errors, which can lead to bugs.

6. let cannot be redeclared in the same scope, helping prevent accidental overwrites.

7. let is a better choice than var because it restricts the variable to its block scope, avoiding accidental redeclarations and scope-related bugs that can occur with var.

8. Temperal Dead Zone is a concept which tells us that let/const variable will through error when u execute them before initialization

*/



/*  Doubt

1. Can we do hoisting of Let/Const as well, how?
As Let/Const gives reference error so, we can say we can hoist let/Cont as well
*/





// Q. Correct Defintion of Hositing, is const/let alse be hoisted ?
