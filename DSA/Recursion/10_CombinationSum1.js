/*
Combination Sum - 1

Given an array of distinct integers and a target, you have to return the list of all unique combinations where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from the given array an unlimited number of times. Two combinations are unique if the frequency of at  ast one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
*/

let nums = [2], target = 1

//Approach 1

function combinationSum(nums, target) {
    let n = nums.length;
    let res = [];

    function generate(i, sum, temp) {

        if (sum == target) {
            res.push([...temp]);  //bcoz we need to store values not reference
            return;
        }

        if ((sum > target) || (i >= n)) return;

        temp.push(nums[i])
        generate(i, sum + nums[i], temp);

        temp.pop();
        generate(i + 1, sum, temp)
    }
    generate(0, 0, [])
    return res;
}

console.log("Combination Sum", combinationSum(nums, target))