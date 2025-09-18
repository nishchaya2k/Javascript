/*
Problem Statement: You're given an sorted array arr of n integers and an integer x. Find the floor and ceiling of x in arr[0..n-1].
The floor of x is the largest element in the array which is smaller than or equal to x.
The ceiling of x is the smallest element in the array greater than or equal to x.
*/


let n = 6, arr = [3, 4, 4, 7, 8, 10], x = 5


// Approach 1

function floorCeil(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    let floor = -1;
    let ceil = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] == x) {
            floor = arr[mid];
            ceil = arr[mid]
            return { floor, ceil }
        }

        else if (arr[mid] < x) {
            floor = arr[mid]
            start = mid + 1;
        }

        else {
            ceil = arr[mid]
            end = mid - 1;
        }

    }

    return { floor, ceil }
}

console.log("Floor and Ceil is: ", floorCeil(arr, x))