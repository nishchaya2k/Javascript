/*
Count Reverse Pairs

Problem Statement: Given an array of numbers, you need to return the count of reverse pairs. Reverse Pairs are those pairs where i<j and arr[i]>2*arr[j].
*/

let nums = [-5,-5];


//Approach 1, Brute Force

//Approach 2, Optimial, TC: O(n log n), SC: O(n)
function merge(start, mid, end, nums) {

    let left = start, right = mid + 1;
    let temp = [], count = 0;

    let i = left, j = right;

    //counting
    while (i <= mid && j <= end) {
        if (nums[i] < nums[j]) i++;
        else {
            if (nums[i] > (2 * nums[j])) {
                count += (mid - i + 1);
                j++;
            } else i++;
        }
    }

    //sorting
    while (left <= mid && right <= end) {
        if (nums[left] <= nums[right]) {
            temp.push(nums[left])
            left++;
        } else {
            temp.push(nums[right])
            right++;
        }
    }

    while (right <= end) {
        temp.push(nums[right])
        right++;
    }

    while (left <= mid) {
        temp.push(nums[left])
        left++;
    }

    for (let i = start; i <= end; i++) {
        nums[i] = temp[i - start];
    }

    return count;
}

function countReversePairs_1(nums) {

    let n = nums.length;

    function divideConquer(start, end) {


        if (start >= end) return 0;

        let mid = Math.floor((start + end) / 2);

        let count = 0

        count += divideConquer(start, mid)
        count += divideConquer(mid + 1, end)

        count += merge(start, mid, end, nums);

        return count;
    }

    return divideConquer(0, n - 1);
}

console.log("Count Reverse", countReversePairs_1(nums))