/*
Problem statement: You are given a sorted array of integers and a target, 
your task is to search for the target in the given array. 
Assume the given array does not contain any duplicate numbers.
*/

let arr = [3, 4, 6, 7, 9, 12, 16, 17];
let target = 3;

// Approach 1, Iterative, TC -> O(logN)
function binarySearch1(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) return mid;

        else if (arr[mid] < target) start = mid + 1;

        else end = mid - 1;
    }

    return -1;
}

console.log("Binary Search", binarySearch1(arr, target));

// Approach 2, Recursive, TC -> O(logN)
function binarySearch2(arr, low, high, target) {
    if (low > high) return -1;  // base case

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid;
    else if (target > arr[mid]) return binarySearch2(arr, mid + 1, high, target);
    else return binarySearch2(arr, low, mid - 1, target);
}

console.log("Binary Search", binarySearch2(arr, 0, arr.length - 1, target));


/*
============================
📌 Binary Search - Time Complexity Proof
============================

- At each step, binary search divides the array into half:
    n → n/2 → n/4 → n/8 → ... → 1

- Mathematically, we keep dividing n by 2 until only 1 element is left:
    n / 2^k = 1

- Solve for k:
    → Multiply both sides by 2^k:
        n = 2^k

    → Take log base 2 of both sides:
        log₂(n) = k

✅ Therefore, binary search takes at most k = log₂(n) steps,
   and the time complexity is O(logN)

Where:
- N = number of elements in the array
- log₂ is logarithm with base 2 (log base 2)

============================
🧠 Binary Search Patterns
============================

1. Find if element exists (return true/false or index)
2. Find the first/last occurrence of a target (lower/upper bound)
3. Find the position to insert (floor/ceil)
4. Binary search on answer space (used in optimization problems)
5. Binary search on rotated sorted arrays
6. Search in infinite or very large arrays
*/
