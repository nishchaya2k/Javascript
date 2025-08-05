//1. Problem Statement: Given an integer N, return the number of digits in N.

let n = 1231231231;
let count = 0;

while (n > 0) {
    count++;
    n = Math.floor(n / 10);
}

console.log("count", count)

