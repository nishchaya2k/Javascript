/*
Longest Consecutive Sequence in an Array

Problem Statement: Given an array nums of n integers.

Return the length of the longest sequence of consecutive integers. The integers in this sequence can appear in any order.
*/

let nums = [100, 4, 200, 1, 3, 2]

//Approach 1, Brute Force
function longestConsecutive_1(nums) {
    let n = nums.length;
    let max = Number.MIN_VALUE;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let curr = nums[i];
        let j = 0;
        while (j < n) {
            if (curr == nums[j]) {
                count++;
                curr++;
                j = 0;
            } else {
                j++;
            }
        }
        if (count > max) max = count;
        count = 0;
    }

    return max
}

console.log("Longest Consecutive Sequence", longestConsecutive_1(nums))


//Approach 2, Optimized
function longestConsecutive_2(nums) {

    let n = nums.length;
    let max = Number.MIN_VALUE;
    let count = 1;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] + 1 == nums[i + 1]) {
            count++;
            if (count > max) max = count;
        } else {
            count = 1;
        }
    }
    return max;
}

console.log("Longest Consecutive Sequence", longestConsecutive_2(nums))


//Approach 3, Optimized
function longestConsecutive_3(nums) {

    let n = nums.length;
    if (n == 0) return 0;

    let longest = 1;
    let st = new Set();

    for (let i = 0; i < n; i++) {
        st.add(nums[i]);
    }

    for (let it of st) {
        if (!st.has(it - 1)) {
            let cnt = 1;

            let x = it;

            while (st.has(x + 1)) {
                ++cnt;
                ++x;
            }

            longest = Math.max(cnt, longest);
        }
    }
    return longest

}

console.log("Longest Consecutive Sequence", longestConsecutive_3(nums))




/*
- Algorithm:

1. We will use two variables: cnt to store the length of the current sequence and longest to store the maximum length found.

2. First, place all the array elements into a set data structure to allow efficient lookups for consecutive numbers.

3. For each element x that can start a sequence (i.e., x - 1 does not exist in the set), we follow these steps:

   a. Initialize cnt to 1, indicating the starting element of a new sequence.

   b. Use the set to search for consecutive elements such as x + 1, x + 2, and so on, to determine the maximum possible length of the current sequence. Update cnt accordingly.

   c. Compare cnt with longest and update longest to hold the maximum value: longest = max(longest, cnt).

4. Finally, longest will contain the length of the longest consecutive sequence found in the array.

*/