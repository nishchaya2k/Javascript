/*
Insertion Sort:

- Works on the principle of: Takes an element and places it in its correct position in the sorted part of the array.

*/

const nums = [13, 46, 24, 52, 20, 9]

function insertionSort(nums) {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let j = i;

        while (j > 0 && nums[j] < nums[j - 1]) {
            let temp = nums[j - 1];
            nums[j - 1] = nums[j];
            nums[j] = temp;
            j--;
        }
    }

    return nums
}


console.log("Insertion", insertionSort(nums))


/*
Working Flow:

- Step 1: Begin with second element (index 1)
    - Compare it with elements before it
    - Shift larger elements one position to the right
    - Insert the current element in the correct spot
- Step 2: Move to the next element (index 2), repeat the process
- Continue until the entire array is sorted

Insertion Sort is:
- In-place (no extra space)
- Time Complexity: O(n^2) in worst case
- Best case (already sorted): O(n)
- Stable sort (maintains order of equal elements)
*/