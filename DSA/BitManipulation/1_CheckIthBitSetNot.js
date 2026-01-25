/*
Check if the i-th bit is set or not

Problem Statement: Given two integers n and i, return true if the ith bit in the binary representation of n (counting from the least significant bit, 0-indexed) is set (i.e., equal to 1). Otherwise, return false.
*/

let n = 6, i = 0;

//Approach 1, Brute force, TC: O(i), SC: O(1)
function checkIthBit_1(n, i) {
    let j = 0;
    while (j <= i) {
        let reminder = n % 2;
        n = Math.floor(n / 2);
        if (j == i && reminder) return true;
        j++;
    }

    return false
}

console.log("Check ith Bit", checkIthBit_1(n, i))

//Approach 2, Brute force, TC: O(logn), SC:O(logn)

function checkIthBit_2(n, i) {
    let j = 0;
    let binary = n.toString(2);

    if (i >= binary.length) return false;
    return binary[binary.length - 1 - i] === '1'
}

console.log("Check ith Bit", checkIthBit_2(n, i))


//Approch 3, Optimal, TC: O(1), SC: O(1)
function checkIthBit_3(n, i) {
    let mask = 1 << i;
    return (mask & n) ? true : false
}

console.log("Check ith Bit", checkIthBit_3(n, i))