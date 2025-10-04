/*
Selection Sort Algorithm:

Works on the principle of: Find the minimum element in the unsorted part and swap it with the element at the beginning.
*/

const nums = [13, 46, 24, 52, 20, 9]

function selectionSort(nums) {

    let n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        let mini = i;
        for (j = i; j < n; j++) {
            if (nums[j] < nums[mini]) {
                mini = j
            }
        }

        let temp = nums[mini];
        nums[mini] = nums[i];
        nums[i] = temp;
    }

    return nums;
}

console.log("SelectionSort", selectionSort(nums))




/*
Working Flow:

- Step 1: Start with the first index (i = 0)
    - Find the smallest element in the unsorted portion (from i to end)
    - Swap it with the element at index i
- Step 2: Move to next index (i = 1)
    - Again find the minimum in the remaining unsorted array
    - Swap with element at i
- Repeat this process until the array is fully sorted

Selection Sort is:
- In-place (no extra space)
- Time Complexity: O(n^2)
- Not stable by default
*/