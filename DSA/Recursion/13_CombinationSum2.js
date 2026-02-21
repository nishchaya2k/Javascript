/*
Combination Sum II - Find all unique combinations

Problem Statement: Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target. Each number in candidates may only be used once in the combination..
*/

let nums = [10, 1, 2, 7, 6, 1, 5], target = 8;


//Approach 1, TC: O(n*2^n), SC: O(n)

function combinationSum_1(nums, target) {

    let res = [];
    let n = nums.length;
    nums.sort((a, b) => a - b)

    function generateCombination(i, sum, temp, target, n) {
        if (i == n) {
            if (sum == target) res.push([...temp])
            return;
        }

        if (sum > target) return;

        temp.push(nums[i])
        generateCombination(i + 1, sum + nums[i], temp, target, n)

        temp.pop();

        while (i + 1 < n && nums[i] == nums[i + 1]) i++;

        generateCombination(i + 1, sum, temp, target, n)
    }

    generateCombination(0, 0, [], target, n)
    return res;
}

console.log("Combination Sum", combinationSum_1(nums, target))

//Approach 2, TC: O(n*2^n), SC: O(n)
function combinationSum_2(nums, target) {

    let res = [];
    let n = nums.length;
    nums.sort((a, b) => a - b)

    function generate(index, target, temp) {
        if (target == 0) {
            res.push([...temp]);
            return;
        }

        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] === nums[i - 1]) continue;

            if (nums[i] > target) break;

            temp.push(nums[i]);
            generate(i + 1, target - nums[i], temp)
            temp.pop()
        }
    }

    generate(0, target, [])

    return res;
}

console.log("Combination Sum", combinationSum_2(nums, target))