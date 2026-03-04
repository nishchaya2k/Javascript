/*
Allocate Minimum Number of Pages

Problem Statement: Given an array ‘arr of integer numbers, ‘ar[i]’ represents the number of pages in the ‘i-th’ book. There are a ‘m’ number of students, and the task is to allocate all the books to the students.
Allocate books in such a way that:

Each student gets at least one book.
Each book should be allocated to only one student.
Book allocation should be in a contiguous manner.
You have to allocate the book to ‘m’ students such that the maximum number of pages assigned to a student is minimum. If the allocation of books is not possible. return -1
*/

let m = 2, arr = [12, 34, 67, 90]

function canBookAllocate(arr, m, pages) {
    let sum = 0;
    let count = 1;

    for (let i = 0; i < arr.length; i++) {
        if ((sum + arr[i]) <= pages) {
            sum += arr[i];
        } else {
            count++;
            sum = arr[i];
        }

    }

    return count;

}

//Approach 1, TC: O(n^2), SC: O(n)

function allocateMinPage_1(arr, m) {
    let n = arr.length;

    //base case
    if (arr.length < m) return -1;

    let min = Math.max(...arr);
    let max = arr.reduce((result, item) => (result + item), 0)
    let result = -1;

    for (let pages = min; pages <= max; pages++) {

        if (canBookAllocate(arr, m, pages) == m) {
            result = pages
            break;
        }
    }

    return result;
}

console.log("Allocate minimum no. of pages", allocateMinPage_1(arr, m))


//Approach 2, TC: O(nlogn), SC: O(n)

function allocateMinPage_2(arr, m) {
    let min = Math.max(...arr);
    let max = arr.reduce((result, item) => (result + item), 0)
    let result = min;

    let low = min, high = max;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (canBookAllocate(arr, m, mid) <= m) {
            result = mid
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}

console.log("Allocate minimum no. of pages", allocateMinPage_2(arr, m))