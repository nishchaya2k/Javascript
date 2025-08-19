/*
Problem Statement: Given two integers N1 and N2, find their greatest common divisor.
*/

let n1 = 9, n2 = 12;


// Type 1

function gcd(n1, n2) {

    let end = Math.min(n1, n2);

    for (let i = end; i >= 1; i--) {
        if (n1 % i == 0 && n2 % i == 0) return i;
    }
}


console.log("GCD", gcd(n1, n2))


/* 
Type 2: Euclidean Algorithm is a method for finding the greatest common divisor of two numbers. It operates on the principle that the GCD of two numbers remains the same even if the smaller number is subtracted from the larger number.

To find the GCD of n1 and n2 where n1 > n2:

- Repeatedly subtract the smaller number from the larger number until one of them becomes 0.
- Once one of them becomes 0, the other number is the GCD of the original numbers.


Eg, n1 = 20, n2 = 15:

gcd(20, 15) = gcd(20-15, 15) = gcd(5, 15)

gcd(5, 15) = gcd(15-5, 5) = gcd(10, 5)

gcd(10, 5) = gcd(10-5, 5) = gcd(5, 5)

gcd(5, 5) = gcd(5-5, 5) = gcd(0, 5)

Hence, return 5 as the gcd.
*/



let n3 = 4, n4 = 12;

function gcd2(n3, n4) {

    while (n3 !== n4) {
        if (n3 > n4) {
            n3 -= n4
        } else {
            n4 -= n3
        }

    }

    return n3
}


console.log("GCD", gcd2(n3, n4))





/*
Type 1: Time Complexity: O(min(N1, N2)) 
Type 2: Time Complexity: O(min(N1, N2)) 

*/



