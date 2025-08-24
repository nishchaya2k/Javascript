/*
Problem Statement: Given a number X,  print its factorial.
*/


function factorial(n) {
    if (n < 1) return 1;

    return n * factorial(n - 1);
}

console.log("factorial", factorial(4))