/*
Problem Statement: Given an array of integers arr[] and an integer target.

1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.

2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.

Note: You are not allowed to use the same element twice. Example: If the target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.
*/

const arr = [2, 6, 10, 15];
const target = 17;


//Approach 1 -> Brute Force, Run nested loop to check if target can be achived


//Approach 2 -> Two Pointers: Time complexity O(nlogn), space complexity O(1)

function twoSum2(arr, target) {
    const temp = [...arr].sort((a, b) => a - b)

    let i = 0;
    let j = temp.length - 1;

    while (i !== j && i < j) {
        if (temp[i] + temp[j] == target) return 'yes';

        else if (temp[i] + temp[j] > target) {
            j--;
        }
        else {
            i++
        }
    }

    return 'no'
}

console.log("2 Sum ->", twoSum2(arr, target))

//Approach 3, Hashing, Time complexity O(n), space complexity O(n)


function twoSum3(arr, target) {
    const temp = {}

    let i = 0;

    while (i < arr.length) {
        if (temp[arr[i]]) return "yes"
        else temp[target - arr[i]] = (temp[target - arr[i]] || 0) + 1;

        i++;

        console.log("temp", temp)
    }

    return 'no'
}

console.log("2 Sum ->", twoSum3(arr, target))

