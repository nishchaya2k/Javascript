/*
Count number of bits to be flipped to convert A to B

Problem Statement: Given two integers start and goal. Flip the minimum number of bits of start integer to convert it into goal integer.

A bits flip in the number val is to choose any bit in binary representation of val and flipping it from either 0 to 1 or 1 to 0.
*/

let start = 3, goal = 4;

//Approach 1, TC: O(1), SC: O(1)

function countPendingBits(val, count) {
    while (val) {
        if ((val % 2)) count++
        val = val >> 1;
    }
    return count
}

function countBits_1(start, goal) {
    let count = 0;

    while (start && goal) {
        if ((start % 2) !== (goal % 2)) {
            count++;
        }
        start = start >> 1;
        goal = goal >> 1;
    }

    if (start) count = countPendingBits(start, count)
    if (goal) count = countPendingBits(goal, count)

    return count;
}

console.log("count bits", countBits_1(start, goal))



//Approach 2, Optimal, TC: O(1), SC: O(1)

function countBits_2(start, goal) {
    let num = start ^ goal;
    let count = 0;

    for (let i = 0; i < 32; i++) {
        count += (num & 1);
        num = num >> 1;
    }
    return count;
}

console.log("count bits", countBits_2(start, goal))