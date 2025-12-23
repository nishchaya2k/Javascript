/*
4 Sum | Find Quads that add up to a target value

Problem Statement: Given an array of N integers, your task is to find unique quads that add up to give a target value. In short, you need to return an array of all the unique quadruplets [arr[a], arr[b], arr[c], arr[d]] such that their sum is equal to a given target.
*/

const nums = [4, 3, 3, 4, 4, 2, 1, 2, 1, 1], target = 9

//Better Approach, TC: O(n3*logm),SC: (n)

function sum4_1(nums, target) {
    let n = nums.length
    nums.sort((a, b) => (a - b));
    let temp = [];
    let st = new Set();

    for (let i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            let seen = new Set();
            for (let k = j + 1; k < n; k++) {
                let required = target - nums[i] - nums[j] - nums[k];
                if (seen.has(required)) {
                    let temp = [nums[i], nums[j], nums[k], required];
                    temp.sort((a, b) => a - b);
                    st.add(JSON.stringify(temp)) //Enforcing Uniqueness of Content
                }
                seen.add(nums[k]);
            }
        }
    }

    return Array.from(st).map(JSON.parse)

}

console.log("Sum 4", sum4_1(nums, target))

//Optimal Approach,  TC: O(n3),SC: (1)
function sum4_2(nums, target) {
    let n = nums.length
    nums.sort((a, b) => (a - b));
    let temp = [];
    let i = 0, j = n - 1;

    while (i < (n - 3)) {

        while (j > 2) {
            let k = i + 1;
            let l = j - 1;
            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];

                if (sum > target) l--;
                else if (sum < target) k++;
                else {
                    temp.push([nums[i], nums[k], nums[l], nums[j]]);
                    k++;
                    l--;
                    while (k < l && nums[k] == nums[k - 1]) k++;
                    while (k < l && nums[l] == nums[l + 1]) l--;
                }
            }
            j--;
            while (j > 2 && nums[j] == nums[j + 1]) j--;
        }

        i++;
        while (i < n - 3 && nums[i] == nums[i - 1]) i++;
        j = n - 1
    }
    return temp;
}

console.log("Sum 4", sum4_2(nums, target))



/*
Algorithm (Optimal):

1. Sort the array first.
2. Use the first loop to pick the first number. Skip it if it is the same as the previous one to avoid duplicates.
3. Inside it, use the second loop to pick the second number. Also skip it if it repeats the previous one.
4. Set two pointers: one just after the second number (left pointer) and one at the end of the array (right pointer).
5. While the left pointer is before the right pointer, calculate the total of the four chosen numbers.
6. If the total equals the target, save the quadruplet, then move both pointers while skipping duplicate numbers.
7. If the total is less than the target, move the left pointer one step forward to increase the total.
8. If the total is greater than the target, move the right pointer one step backward to reduce the total.
9. After all loops finish, return the list of unique groups of four numbers.

*/