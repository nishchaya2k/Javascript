/*
Kth Missing Positive Number

Problem Statement: You are given a strictly increasing array ‘vec’ and a positive integer 'k'. Find the 'kth' positive integer missing from 'vec'.
*/

let arr = [1, 3], k = 1;

//Approach 1, brute force, TC: O(n), SC: O(1)

function kthMissingNumber1(arr, k) {
    let n = arr.length;
    let i = 0;

    let lastMissed = 0;
    let missing = arr[n - 1] - n;

    //need to check, weather missing found among array elements or outisde

    //missing found outside
    if (k > missing) return arr[n - 1] + (k - missing)

    //find missing inside or before
    missing = 0;
    for (i = 0; i < n; i++) {

        if ((arr[i] - lastMissed) > 1) {

            if ((missing + arr[i] - lastMissed - 1) >= k) break;
            else missing += (arr[i] - lastMissed - 1);
        }
        lastMissed = arr[i]
    }
    return (arr[i - 1] || 0) + (k - missing);
}

console.log("Kth Missing Number", kthMissingNumber1(arr, k))


//Approach 2, Optimal way, Binary Search, TC: O(logn), SC: O(1)


function kthMissingNumber2(arr, k) {
    let n = arr.length;

    // If kth missing number is beyond the last element
    let totalMissing = arr[n - 1] - n;
    if (k > totalMissing) {
        return arr[n - 1] + (k - totalMissing);
    }

    let start = 0;
    let end = n - 1;

    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        let missing = arr[mid] - (mid + 1);

        if (missing >= k) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    // Now, start is the first index where missing >= k
    // Handle the case when start === 0 (arr[-1] is invalid)
    let prevVal = start > 0 ? arr[start - 1] : 0;
    let missingBefore = prevVal - start;

    return prevVal + (k - missingBefore);
}



console.log("Kth Missing Number", kthMissingNumber2(arr, k))






/*
Note* 

- The + operator has higher precedence than ||.
- so this -> 'return arr[i - 1] || 0 + (k - missing);' will interpret as return arr[i - 1] || (0 + (k - missing));

*/