//1.    Closure: Combination of a function bundled together with its lexical environment  OR  A function along with its lexical scope forms a closure

//Explanation:

//A closure gives you an access to outer function's scope from an inner function. In JavaScript, closures are created everytime a function is created, at function creation time.

//2.    

// example 1.

function x() {
    var a = 10;
    function y() {
        console.log(a); // o/p -> 10 
    }
    y();
}
x();

//example 2 -> passing function as a argument, (only possible in js) 

function x1(fun) {
    fun();
}
x1(function y1() {
    console.log("Hello");
});

//example 3

function x2() {
    var a = 15;
    function y2() {
        console.log(a);
    }
    return y2;

}

var z2 = x2();
console.log(z2)


//example 4 (!important)

function x3() {
    var a = 15;
    function y3() {
        console.log(a);
    }
    return y3;
}

var z3 = x3();   //z3 receives y3, also x3 executed and popout from callstack
z3();  // o/p -> 15

/*how z3() is running smothly, as it contain y3 & in which we're are printing a, but x3 is popout from callstack after x3 executed fully, so how we are accessing 'a' 

when function returned from another function they still maintain their lexical scope, they remember where they actually present though x3 doesn't exist still y3 know what its lexical scope and where it comes from. which means y3 remembers 'a' though x3 does not exist.

Basically, when y3 is returned not only its code returned but its closure returned means function and its lexical scope is returned. & that was put inside z3*/


//example 5 (!important)
function x4() {
    var a = 15;
    function y4() {
        console.log(a);
    }
    a = 100;
    return y4;
}

var z4 = x4();
z4();  //100    
//why 100, bcoz reference of 'a' remember by 'y4' not the value,  so whatever changes you do in 'a' even after return of y4. in z4() you will get always the updated value 

//example 6
function z5() {
    var b = 200;
    function x5() {
        var a = 15;
        function y5() {
            console.log(a, b);
        }
        y5();
    }
    x5();
}
z5();

/*
y5 forms a closure along with scope of x5 and scope of z5 how?
closure is function along with its lexical scope, 

The lexical scope of `y5` refers to the scope in which it is physically defined, which includes its outer functions' scopes. 

In this case, the lexical scope of `y5` includes:
1. The scope of function `x5`.
2. The scope of function `z5`.

So, when `y5` tries to access variables `a` and `b`, it can access both variables because they are in its lexical scope. Here's the breakdown:

- `y5` can directly access variable `a` because it is defined in the outer function `x5`.
- `y5` can also access variable `b` because it is defined in the outer function `z5`.

Therefore, when `y5` is executed inside `x5`, it can log the values of both `a` and `b`.

*/






/*

1.  Closure: 

->  Function bundled with its lexical environment is known as a closure.

->  Whenever function is returned, even if its vanished in execution context but still it 
    remembers the reference it was pointing to. Its not just that function alone it returns but 
    the entire closure and that's where it becomes interesting.

->  closure gives you access to an outer function's scope from an inner function. In JavaScript, 
    closures are created every time a function is created, at function creation time.


2.  What is Lexical Scope
3.  what is Currying


Usage of Closure:
- Module Desgin Pattern
- Currying
- Functions like once
- memorize
- maintaining state in async world
- setTimeouts
- iterators
- & many more...

*/
