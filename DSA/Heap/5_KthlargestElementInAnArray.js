/*
Kth largest / smallest element in an array

Problem Statement: Given an array nums, return the kth largest element in the array.
*/
const { MinHeap } = require("./2_MinHeap");

let nums = [15, 20, 5], k = 2;

//Approach 1, TC: O(n log k), SC: O(k)
function kthLargestElement_1(nums, k) {

    let heap = new MinHeap();

    for (let i = 0; i < nums.length; i++) {
        heap.insert(nums[i]);
        if (heap.size() > k) {
            heap.extractMin();
        }
    }

    return heap.getMin();
}

console.log("Kth Largest Element", kthLargestElement_1(nums, k))

function partition(nums, l, r) {
    let p = nums[l];
    let i = l + 1; //if start with l, it will fail for 1 length array
    let j = r;

    while (i <= j) {
        if (nums[i] < p && nums[j] > p) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
        if (nums[i] >= p) i++;
        if (nums[j] <= p) j--;
    }
    [nums[l], nums[j]] = [nums[j], nums[l]];
    return j;
}


//Approach 2, Quick Sort(Partition) TC: O(n) (average while Worst is n^2), SC: O(k)
function kthLargestElement_2(nums, k) {


    let n = nums.length;
    let l = 0;
    let r = n - 1;

    let pivotIndex = 0;
    while (true) {
        pivotIndex = partition(nums, l, r);

        if (pivotIndex == k - 1) break;
        else if (pivotIndex > k - 1) r = pivotIndex - 1;
        else l = pivotIndex + 1;
    }
    return nums[pivotIndex];
}

console.log("Kth Largest Element", kthLargestElement_2(nums, k))



/*
Quick Select Intuition

- We do NOT sort the full array
- Partition places pivot at its correct position
  just like Quick Sort

Descending Partition:
- Left side  -> larger elements
- Right side -> smaller elements

After partition:
- pivotIndex == k - 1
    => found kth largest

- pivotIndex > k - 1
    => kth largest lies on left side

- pivotIndex < k - 1
    => kth largest lies on right side

Key Idea:
- Ignore one half every time
- Similar to Binary Search thinking
- That is why average TC becomes O(n)

Complexities

Average TC -> O(n)
Worst TC   -> O(n²)
SC         -> O(1)

Why Worst O(n²)?
- Bad pivot every time
- Example: already sorted array
- Partition reduces only by 1 element
*/