/*
Set the rightmost bit

Problem Statement: Given a positive integer n, set the rightmost unset (0) bit of its binary representation to 1 and return the resulting integer.
If all bits are already set, return the number as it is.
*/

let n = 7;

//Approach 1, TC: O(number of trailing 1s), SC: O(1)
function setRightMostBit_1(n) {

    let i = 0;
    let res = n

    while (n) {
        if ((n & 1) == 0) break;
        n = n >> 1;
        i++
    }


    return n ? res | 1 << i : res;
}

console.log("Set Right Most Bit", setRightMostBit_1(n))

//Approach 2, TC: O(1), SC: O(1)
function setRightMostBit_2(n) {
    if ((n & (n + 1)) == 0) return n;
    return n | (n + 1);
}

console.log("Set Right Most Bit", setRightMostBit_2(n))