/*
Length of the longest subarray with zero Sum

Problem Statement: Given an array containing both positive and negative integers, we have to find the length of the longest subarray with the sum of all elements equal to zero.
*/

let arr = [9, - 3, 3, -1, 6, -5]


//Approach 1, Brute Force, Run 2 Loops

//Approch 2
function longestSubArraySum(arr) {
    let n = arr.length;
    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER
    let visited = {}

    for (let i = 0; i < n; i++) {
        sum += arr[i];
        if (sum && visited[sum] === undefined) visited[sum] = i
        else {
            if (!sum) max = Math.max(max, i + 1);

            else {
                max = Math.max(max, i - visited[sum]);
            }
        }
    }
    return max;
}

console.log("Longest Subarray Sum", longestSubArraySum(arr))


/**
Algorithm: Longest Subarray With Zero Sum

Problem:
Given an array of positive and negative integers,
find the length of the longest subarray whose total sum is zero.

Approach:
1. Maintain a running cumulative sum while iterating over the array.
2. Use a hash map (visited) to store the first index at which each cumulative sum occurs.
3. Logic:
   - If cumulative sum becomes 0 at index i,
     then the subarray from 0 to i has sum 0 → length = i + 1.

   - If the same cumulative sum appears again at index i,
     then the elements between the previous occurrence of that sum
     and index i form a subarray with zero sum.
     Example: if sum = 9 at index 0 and again at index 4,
              then subarray (1..4) has zero sum.
     Length = i - visited[sum].

   - If a cumulative sum is seen for the first time,
     store its index in visited.

4. Keep updating max with the longest length found.

Time Complexity:
O(n) — we traverse the array once.

Space Complexity:
O(n) — hash map stores at most n cumulative sums.

Returns:
Length of the longest zero-sum subarray.
*/
