/*
Sort an array of 0s, 1s and 2s

Problem Statement: Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)
*/

let nums = [1, 2, 0];


//Approach 1, Better, O(2n)

function sortArray1(nums) {
    let n = nums.length;
    let counta = 0, countb = 0

    for (let i = 0; i < n; i++) {
        switch (nums[i]) {
            case 0:
                counta++;
                break;
            case 1:
                countb++;
                break;
            default:
                break
        }
    }

    console.log(counta, countb)
    for (let i = 0; i < n; i++) {
        if (counta > 0 && counta--) {
            nums[i] = 0;
        }
        else if (countb > 0 && countb--) {
            nums[i] = 1;
        }
        else nums[i] = 2;
    }
    return nums
}

console.log("Sort Array", sortArray1(nums))



//Approach 2, Optimal, TC: O(n)


function sortArray2(nums) {
    let n = nums.length;
    let i = 0;
    let j = n - 1;
    let k = i;

    //base case;

    while (i < j && k < j) {
        if (nums[j] == 2) j--;
        else if (nums[i] == 0) {
            i++;
            k = i;
        }
        else if (nums[k] > nums[j]) {
            let temp = nums[k];
            nums[k] = nums[j];
            nums[j] = temp;
        }
        else if (nums[k] < nums[i]) {
            let temp = nums[k];
            nums[k] = nums[i];
            nums[i] = temp;
            k++;
        }
        else {
            k++;
        }
    }
    return nums
}

console.log("Sort Array", sortArray2(nums))




//Approach 3, Optimal, TC: O(n)


function sortArray2(nums) {
    let n = nums.length;
    let i = 0;
    let j = n - 1;
    let k = i;

    //base case;

    while (i < j && k < j) {
        if (nums[j] == 2) j--;
        else if (nums[i] == 0) {
            i++;
            k = i;
        }
        else if (nums[k] > nums[j]) {
            let temp = nums[k];
            nums[k] = nums[j];
            nums[j] = temp;
        }
        else if (nums[k] < nums[i]) {
            let temp = nums[k];
            nums[k] = nums[i];
            nums[i] = temp;
            k++;
        }
        else {
            k++;
        }
    }
    return nums
}

console.log("Sort Array", sortArray2(nums))