/*
Problem Statement: Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.
*/

let arr = [4, 1, 2, 1, 2]

function allNumberTwiceExceptOne(arr) {
    if (arr.length == 0) return undefined;
    
    let ans = arr[0];
    for (let i = 1; i < arr.length; i++) {
        ans = ans ^ arr[i];
    }

    return ans;
}

console.log("Unique No.", allNumberTwiceExceptOne(arr))