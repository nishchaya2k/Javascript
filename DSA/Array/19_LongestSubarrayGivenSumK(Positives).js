/*
Longest Subarray with given Sum K(Positives)

Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.
*/

const arr = [10, 5, 2, 7, 1, -10], k = 15;

function longestSubArray_1(arr, k) {  //positives
    let sum = 0;
    let maxLen = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];

        // shrink until sum <= k
        while (start <= end && sum > k) {
            sum -= arr[start];
            start++;
        }

        // check if valid
        if (sum === k) {
            maxLen = Math.max(maxLen, end - start + 1);
        }
    }

    return maxLen;
}


console.log("longestSubArray", longestSubArray_1(arr, k))

function longestSubArray_2(arr, k) { //positives & negatives
    let sum = 0;
    let maxLen = 0;
    let preSum = {};

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum == k) {
            maxLen = Math.max(maxLen, i + 1)
        }

        let rem = sum - k;
        if (preSum.hasOwnProperty(rem)) {
            let len = i - preSum[rem]
            maxLen = Math.max(maxLen, len)
        }

        if (!preSum[sum]) preSum[sum] = i; //for max subarray length

    }

    return maxLen;
}


console.log("longestSubArray", longestSubArray_2(arr, k))