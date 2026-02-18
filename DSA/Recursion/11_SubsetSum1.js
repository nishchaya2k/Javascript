/*
Subset Sum : Sum of all Subsets

Problem Statement: Given an array print all the sum of the subset generated from it, in the increasing order.
*/

let nums = [5, 2, 1]

//Approach 1, Brute Force, O(2^n * n), SC:(2^n)
function subsetSum_1(nums) {

    let res = [];
    let n = nums.length;

    for (let mask = 0; mask < (1 << n); mask++) {

        let sum = 0;
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                sum += nums[i]
            }
        }
        res.push(sum)
    }

    return res.sort((a, b) => a - b);
}

console.log("Subset Sum", subsetSum_1(nums))

//Approach 2, Optimize, O(2^n), SC:(2^n)

function subsetSum_2(nums) {

    let res = [];
    let n = nums.length;

    function generate(i, sum) {

        if (i >= n) {
            res.push(sum)
            return;
        }

        generate(i + 1, sum + nums[i])
        generate(i + 1, sum)
    }

    generate(0, 0)
    return res.sort((a, b) => a - b);
}

console.log("Subset Sum", subsetSum_2(nums))