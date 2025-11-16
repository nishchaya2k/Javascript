/*
Majority Elements(&gt;N/3 times) | Find the elements that appears more than N/3 times in the array

Problem Statement: Given an array of N integers. Find the elements that appear more than N/3 times in the array. If no such element exists, return an empty vector.
*/

let arr = [11, 22, 22, 22, 11, 11]

//Approach 1
function findNoGreaterThenNBy3_1(arr) {
    let n = arr.length;
    let max_count = Math.floor(n / 3)

    let freq = {};

    for (let i = 0; i < n; i++) {
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    }

    let result = [];

    for (let key in freq) {
        if (freq[key] > max_count) result.push(Number(key))
    }

    return result;
}

console.log("Find Number", findNoGreaterThenNBy3_1(arr))


//Approach 2, Moore Voting Algo
function findNoGreaterThenNBy3_2(arr) {
    let count1 = 0;
    let count2 = 0;
    let el1 = null;
    let el2 = null;
    let n = arr.length;
    let result = [];

    for (let i = 0; i < n; i++) {
        if (count1 == 0 && el2 !== arr[i]) {
            el1 = arr[i];
            count1 = 1;
        }
        else if (count2 == 0 && el1 !== arr[i]) {
            el2 = arr[i];
            count2 = 1;
        } else if (el1 == arr[i]) {
            count1++;
        }
        else if (el2 == arr[i]) {
            count2++;
        } else {
            count1--;
            count2--;
        }
    }

    count1 = 0;
    count2 = 1;

    for (let num of arr) {
        if (num === el1) count1++;
        else if (num === el2) count2++;
    }


    if (count1 > (n / 3)) result.push(el1)
    if (count2 > (n / 3)) result.push(el2)

    return result;
}



console.log("Find Number", findNoGreaterThenNBy3_2(arr))


/*
Note: Note More than 2 Numbers can be solution.
*/