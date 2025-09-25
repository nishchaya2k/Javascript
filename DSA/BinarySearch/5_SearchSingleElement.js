/*
Problem Statement: Given an array of N integers. Every number in the array except one appears twice. Find the single number in the array.
*/

let arr = [7, 7, 10, 11, 11, 12, 12]



//Approach 1 -> iterative, O(n)
//Approach 3 -> XOR, O(n)

//Approach 3 -> Binary Search, O(logn)
function singleElement(arr) {
    let n = arr.length;

    let start = 1;
    let end = n - 2;

    //Edge Cases:
    if (n == 1) return arr[0];
    if (arr[0] != arr[1]) return arr[0]
    if (arr[n-1] != arr[n-2]) return arr[n-1];


    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // If arr[mid] is the single element:
        if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) {
            return arr[mid];
        }

        //we are in left
        if ((mid % 2 == 1 && arr[mid] == arr[mid - 1]) || (mid % 2 == 0 && arr[mid] == arr[mid + 1])) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    return -1
}

console.log("Search Single Element", singleElement(arr))