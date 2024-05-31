//Run each Example one by one, by commenting rest


//Example 1 -> o/p , Namste 1
function x() {
    var i = 1;
    setTimeout(() => {
        console.log(i);
    }, 500)
    console.log("Namaste")
}
x();


//Example 2 -> o/p , 6 6 6 6 6 , var is created only once,  bcoz var is functional scope 
function y() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        });
    }
}
y();

//Example 3 -> o/p, 1,2,3,4,5 becoz let is block scope so everytime new copy of incremented i attached with cb function
function z() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}
z();

//Example 4 -> achieved by using var only, now u get 1,2,3,4,5 as o/p
function w() {
    for (var i = 1; i <= 5; i++) {

        function close(i_copy) {
            setTimeout(() => {
                console.log(i_copy);
            }, i_copy * 1000);
        }
        close(i);
    }
}
w();

/*
1. Callback function inside setTimeout forms a closure and this function remembers the reference to i, so even if you update the i, callback function remembers the reference to i

2. What setTimeout do ->  it takes the callback function and stores it in the WebApi and attach timer to it on the other hand JavaScript keeps on running and move to next line,
when Timer expires, function move to the callback queue where it is ready to execute,
on the other hand event loop keep on tracking weather callstack gets empty or not, once callstack gets empty, event loop move callback function waiting in the callback queue to the callstack and there it start executing, and pops out when completed its execution
*/
