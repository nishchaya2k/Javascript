/*
Find the repeating and missing numbers

Problem Statement: Given an integer array nums of size n containing values from [1, n] and each value appears exactly once in the array, except for A, which appears twice and B which is missing.
Return the values A and B, as an array of size 2, where A appears in the 0-th index and B in the 1st index.

Note: You are not allowed to modify the original array.
*/

const nums = [2, 2]


// Approach 1, Brute Force, use 2 Nested loops and find

// Approach 2, TC: O(n), SC: O(n)

function repeatingMissingNumber_2(nums) {
    let n = nums.length;

    let freq = {};
    let temp = [-1, -1]

    for (let i = 0; i < n; i++) {
        freq[nums[i]] = (freq[nums[i]] || 0) + 1
    }

    for (let i = 1; i <= n; i++) {
        if (!freq[i]) temp[1] = i

        if (freq[i] == 2) temp[0] = i

    }
    return temp;
}

console.log("Repeating and Missing numbers", repeatingMissingNumber_2(nums))



// Approach 3, Maths Equation, TC: O(n), SC: O(n)

function repeatingMissingNumber_3(nums) {
    let n = nums.length;

    //s-sn = x-y;
    //s2-s2n = x2-y2;

    let sn = Math.floor(n * ((n + 1) / 2))
    let s2n = Math.floor((n * (n + 1) * ((2 * n) + 1)) / 6);

    let s = 0, s2 = 0;

    for (let i = 0; i < n; i++) {
        s += nums[i];
        s2 += (nums[i] * nums[i]);
    }

    let val1 = s - sn;               //x-y
    let val2 = s2 - s2n;

    val2 = Math.floor(val2 / val1);  //x+y

    let x = Math.floor((val1 + val2) / 2);
    let y = x - val1;

    return [x, y];
}

console.log("Repeating and Missing numbers", repeatingMissingNumber_3(nums))



// Approach 4, USING XOR, TC: O(n), SC: O(n)

function repeatingMissingNumber_4(nums) {
    let n = nums.length;

    let xr = 0;

    // XOR of array elements and 1..n
    for (let i = 0; i < n; i++) {
        xr ^= nums[i];
        xr ^= (i + 1);
    }

    // Find rightmost set bit
    let bitNo = 0;
    while ((xr & (1 << bitNo)) === 0) {
        bitNo++;
    }

    let zero = 0;
    let one = 0;

    // Divide array elements
    for (let i = 0; i < n; i++) {
        if ((nums[i] & (1 << bitNo)) === 0)
            zero ^= nums[i];
        else
            one ^= nums[i];
    }

    // Divide numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        if ((i & (1 << bitNo)) === 0)
            zero ^= i;
        else
            one ^= i;
    }

    // Check which one is repeating
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === zero) cnt++;
    }

    if (cnt === 2) return [zero, one]; // [repeating, missing]
    else return [one, zero];

}

console.log("Repeating and Missing numbers", repeatingMissingNumber_4(nums))