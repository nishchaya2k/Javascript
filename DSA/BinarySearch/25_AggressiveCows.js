/*
Aggressive Cows : Detailed Solution

Problem Statement: You are given an array 'arr' of size 'n' which denotes the position of stalls. You are also given an integer 'k' which denotes the number of aggressive cows.
You are given the task of assigning stalls to 'k' cows such that the minimum distance between any two of them is the maximum possible. Find the maximum possible minimum distance.
*/

let arr = [0, 3, 4, 7, 10, 9], k = 4;


function canPlace(arr, k, d) {
    let count = 1;

    let lastPos = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - lastPos >= d) {
            count++;
            lastPos = arr[i]
        }

        if (count >= k) return true;
    }

    return false
}

//Approach 1, TC: O(n^2), SC: O(1)

function aggressiveCows_1(arr, k) {

    arr.sort((a, b) => a - b);
    let n = arr.length;
    let maxDist = arr[n - 1] - arr[0];
    let ans = 0;


    for (let d = 1; d <= maxDist; d++) {
        if (canPlace(arr, k, d)) {
            ans = d;
        } else break;
    }
    return ans;
}

console.log("Aggressive Cows", aggressiveCows_1(arr, k))


//Approach 2, TC: O(nlogn), SC: O(1)

function aggressiveCows_2(arr, k) {

    arr.sort((a, b) => a - b);
    let n = arr.length;

    let low = 1, high = arr[n - 1] - arr[0];
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (canPlace(arr, k, mid)) {
            low = mid + 1
        } else {
            high = mid - 1;
        }
    }
    return high;
}

console.log("Aggressive Cows", aggressiveCows_2(arr, k))