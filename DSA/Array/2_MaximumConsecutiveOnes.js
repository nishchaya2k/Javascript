/*
Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.
*/


let arr = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1];


function consecutiveOnes(arr) {
    let count = 0;
    let maxOnes = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            count++;

            if (count > maxOnes) {
                maxOnes = count
            }
        } else {
            count = 0;
        }
    }

    return maxOnes;
}

console.log("Consecutive Ones", consecutiveOnes(arr))