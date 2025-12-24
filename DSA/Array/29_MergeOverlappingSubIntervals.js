/*
Merge Overlapping Sub-intervals

Problem Statement: Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.
*/

//Approach 1, Brute Force, TC: O(nlogn + n), SC: O(n)

let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]

function mergeInterval_1(intervals) {
    let n = intervals.length;
    if (n === 1) return intervals;

    let i = 0, j = 1;
    let result = [];
    intervals.sort((a, b) => a[0] - b[0]);
    while (i < n) {
        let j = i + 1;
        let maxRange = intervals[i][1];
        while (j < n && maxRange >= intervals[j][0]) {
            maxRange = Math.max(maxRange, intervals[j][1])
            j++;
        }
        result.push([intervals[i][0], maxRange])
        i = j;
    }
    return result
}

console.log("Merge Interval", mergeInterval_1(intervals))

//Approach 2, Optimal, TC: O(nlogn + n), SC: O(n)



function mergeInterval_2(intervals) {
    let n = intervals.length;
    if (n === 1) return intervals;

    let i = 0, j = 1;
    let result = [];
    intervals.sort((a, b) => a[0] - b[0]);
    while (i < n) {
        if (result.length > 0 && result[result.length - 1][1] >= intervals[i][0]) {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1])
        }

        else result.push(intervals[i])
        i++;
    }
    return result
}

console.log("Merge Interval", mergeInterval_2(intervals))


