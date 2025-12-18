/*
3 Sum : Find triplets that add up to a zero

Problem Statement: Given an array of N integers, your task is to find unique triplets that add up to give a sum of zero. In short, you need to return an array of all the unique triplets [arr[a], arr[b], arr[c]] such that i!=j, j!=k, k!=i, and their sum is equal to zero.
*/

const nums = [-4, -3, 0, 2, 3]

//Approach 1, Brute Force
function threeSum_1(nums) {
    let n = nums.length;
    let result = new Set()
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if ((nums[i] + nums[j] + nums[k]) == 0) {
                    const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => (a - b));
                    result.add(triplet.toString())
                }
            }
        }
    }
    return Array.from(result, t => t.split(",").map(Number))
}

console.log("3 Sum", threeSum_1(nums))


//Approach 2, Brute Force (little optimized)
function threeSum_2(nums) {
    let n = nums.length;
    const freq = {};
    let result = new Set()
    for (let i = 0; i < n; i++) {
        freq[nums[i]] = (freq[nums[i]] || 0) + 1;
    }

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            const sum_2 = nums[i] + nums[j];
            if (freq[-sum_2]) {
                let temp = 0;
                if (-sum_2 == nums[i]) temp++;
                if (-sum_2 == nums[j]) temp++;

                if (freq[-sum_2] > temp) {
                    const triplet = [nums[i], nums[j], -sum_2].sort((a, b) => (a - b));
                    result.add(triplet.toString())
                }
            }
        }
    }

    return Array.from(result, t => t.split(",").map(Number))
}

console.log("3 Sum", threeSum_2(nums))


//Approach 3
function threeSum_3(nums) {
    let n = nums.length;
    if (n < 3) return [];

    let result = []
    nums.sort((a, b) => (a - b));

    let i = 0;

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let j = i + 1, k = n - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum == 0) {
                result.push([nums[i], nums[j], nums[k]])
                j++;
                k--;
                while (j < k && nums[j] == nums[j - 1]) j++;
                while (j < k && nums[k] == nums[k + 1]) k--;
            }

            else if (sum > 0) k--;
            else j++;
        }
    }

    return result
}

console.log("3 Sum", threeSum_3(nums))

/*
Alogorithm - Optimized Approach

- Sort the array first.

1. Fix the first number using a loop from the beginning to the end of the array.
2. Skip the number if it is the same as the previous one (to avoid duplicates).
Use two pointers:
3. Left: starts right after the fixed number.
4. Right: starts from the last element of the array.
5. While the left pointer is before the right pointer:
If the total is greater than 0 → move the right pointer one step left.
If the total is less than 0 → move the left pointer one step right.
If the total equals 0 → store the triplet, then move both pointers while skipping duplicates.

*/