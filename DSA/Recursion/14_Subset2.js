/*
Subset - II | Print all the Unique Subsets

Problem Statement: Given an integer array nums, which can have duplicate entries, provide the power set. Duplicate subsets cannot exist in the solution set. Return the answer in any sequence.
*/

let nums = [1, 2, 2]

//Approach 1, TC: O(n^2 * 2^n), SC: O(2^n)
function uniqueSubset_1(nums) {
    let n = nums.length;
    let res = new Set();

    nums.sort((a, b) => a - b);

    function generate(i, temp) {

        if (i == n) {
            res.add(JSON.stringify(temp))
            return;
        }

        temp.push(nums[i])
        generate(i + 1, temp)

        temp.pop()

        while (i + 1 < n && nums[i] == nums[i + 1]) i++;
        generate(i + 1, temp)

    }
    generate(0, [])
    return [...res].map(str => JSON.parse(str))
}

console.log("Unique Subset", uniqueSubset_1(nums))

//Approach 2, TC: O(n^3), SC: O(2^n)
function uniqueSubset_2(nums) {
    let n = nums.length;
    let res = [];

    nums.sort((a, b) => a - b);

    let i = 0;
    while (i < n) {
        let temp1 = [];
        temp1.push(nums[i]);
        res.push([...temp1])
        let j = i + 1;

        let temp2 = []
        while (j < n) {
            temp2.push(nums[j]);
            res.push([...temp1, ...temp2])

            let k = j + 1;

            while (k < n) {
                temp2.push(nums[k]);
                res.push([...temp1, ...temp2])
                k++;
            }
            j++;
            while (j < n && nums[j] == nums[j - 1]) j++;

            temp2 = []
        }
        i++;
        while (i != 0 && nums[i] == nums[i - 1]) i++;
    }
    return [...res, []];
}

console.log("Unique Subset", uniqueSubset_2(nums))



//Approach 3, Optimal, TC: O(n*2^n), SC: O(2^n)
function uniqueSubset_3(nums) {
    let n = nums.length;
    let res = [];

    nums.sort((a, b) => a - b);

    function generate(i, temp) {

        if (i == n) {
            res.push([...temp])
            return;
        }

        temp.push(nums[i])
        generate(i + 1, temp)

        temp.pop()

        while (i + 1 < n && nums[i] == nums[i + 1]) i++;
        generate(i + 1, temp)

    }
    generate(0, [])
    return res;
}
console.log("Unique Subset", uniqueSubset_3(nums))
