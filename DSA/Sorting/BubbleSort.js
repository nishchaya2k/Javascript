/*
Bubble Sort:
- Works on the principle of: Push the maximum at last by adjacent swaps
*/

const nums = [13, 46, 24, 52, 20, 9, 0, 1, 0];

function bubbleSort_1(nums) {
    let n = nums.length;

    // Outer loop for number of passes (n - 1 times)
    for (let i = 0; i < n - 1; i++) {

        // Inner loop for comparisons in each pass
        for (let j = 0; j < n - i - 1; j++) {

            // If current element is greater than the next, swap them
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }

    // Return the sorted array
    return nums;
}

// Print the final sorted array
console.log("Sorted Array:", bubbleSort_1(nums));



function bubbleSort_2(nums) {
    let n = nums.length;

    function reArrange(i, j, nums) {

        if (i >= j || i >= n || j >= n) return


        if (nums[i] > nums[j]) {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
        }

        reArrange(i, j + 1, nums)
        reArrange(i + 1, j, nums)
    }

    reArrange(0, 1, nums)
    return nums

}

console.log("Recursive", bubbleSort_2(nums))

function bubbleSort_3(nums) {
    let n = nums.length;

    function reArrange(nums, n) {

        if (n == 1) return;
        let didSwap = false;


        for (let i = 0; i < n - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
                didSwap = true
            }
        }

        if (!didSwap) return;
        reArrange(nums, n - 1)
    }

    reArrange(nums, n)
    return nums

}

console.log("Recursive", bubbleSort_3(nums))



/*
Working Flow:

- Step 1: Start from index 0 and compare adjacent elements
    - If nums[j] > nums[j + 1], swap them
- Step 2: Repeat until the end of the array
    - The largest element moves to the end after each full pass
- Step 3: Repeat the passes for n - 1 times
    - After each pass, the next largest element gets placed correctly
- The array becomes sorted from the end to the beginning

Bubble Sort is:
- In-place (no extra space)
- Time Complexity: O(n^2)
- Stable sort (preserves relative order of equal elements)
*/
