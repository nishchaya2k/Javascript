/*
Subsets

Problem Statement: Given an array of numbers, print all subsets of it using bitwise operators.
*/

let nums = [1, 2, 3]


//Approach 1, Brute Force, Recursion, TC: O(n·2^n), SC:O(n·2^n)
function subsets_1(nums) {

    let n = nums.length;
    let res = [];

    function generate(i, temp) {
        if (i == n) {
            res.push([...temp])
            return;
        }

        temp.push(nums[i])
        generate(i + 1, temp)

        temp.pop();
        generate(i + 1, temp)
    }

    generate(0, [])
    return res;
}

console.log("Subset", subsets_1(nums))



//Approach 2, Bitwise, TC: O(n·2^n), SC:O(n·2^n)
function subsets_2(nums) {

    let n = nums.length;
    let res = [[]];

    for (let i = 1; i < (1 << n); i++) {

        let j = 0;
        let temp = [];

        while (j < n) {
            if (i & (1 << j)) {
                temp.push(nums[j])
            }
            j++;
        }
        res.push(temp);
    }
    return res;
}

console.log("Subset", subsets_2(nums))