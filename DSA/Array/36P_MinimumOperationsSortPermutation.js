/*
Minimum Operations to Sort a Permutation

You are given an integer array nums of length n, where nums is a permutation of the integers from 0 to n - 1.

You may perform only the following operations:

Reverse the entire array.
Rotate Left by One: Move the first element to the end of the array, and rest elements to left by one position.
Return an integer denoting the minimum number of operations required to sort the array in increasing order. If it is not possible to sort the array using only the given operations, return -1.
*/

let nums = [1, 2, 3, 4, 0]


//Approach 1
function sortedOp_1(nums) {
    const n = nums.length;
    const zero = nums.indexOf(0);

    let ans = Infinity;

    // Case 1: Rotation of sorted array
    let ok = true;
    for (let i = 0; i < n; i++) {
        if (nums[(zero + i) % n] !== i) {
            ok = false;
            break;
        }
    }

    if (ok) {
        ans = Math.min(ans, zero);
    }

    // Case 2: Rotation of reversed array
    ok = true;
    for (let i = 0; i < n; i++) {
        let expected = (i === 0) ? 0 : n - i;
        if (nums[(zero + i) % n] !== expected) {
            ok = false;
            break;
        }
    }

    if (ok) {
        // rotations to make reversed array + one reverse
        const ops1 = n - zero;
        const ops2 = 1 + ((zero + 1) % n);

        ans = Math.min(ans, Math.min(ops1, ops2));
    }

    return ans === Infinity ? -1 : ans;
}

console.log("Minimum Steps", sortedOp_1(nums))