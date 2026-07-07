/*
Merge Overlapping Sub-intervals


Problem Statement: Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.
*/

const intervals = [[1, 4], [4, 5]];

//Approach 1, TC: O(nlogn), SC: O(n)
function mergeIntervals_1(intervals) {

    let n = intervals.length;
    intervals.sort((a, b) => (a[0] - b[0]));

    //base case
    if (n <= 1) return intervals;

    let mergedArr = [], i = 0, j = 1;
    mergedArr.push(intervals[0])

    while (j < n) {
        if (mergedArr[i][1] >= intervals[j][0]) {
            mergedArr[i][1] = Math.max(mergedArr[i][1], intervals[j][1])
        }
        else {
            mergedArr.push(intervals[j]);
            i++;
        }
        j++;
    }
    return mergedArr;
}

console.log("Merge Intervals", mergeIntervals_1(intervals))