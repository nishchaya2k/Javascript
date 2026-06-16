/*
Non-overlapping Intervals

Problem Statement: Given an array of N intervals in the form of (start[i], end[i]), where start[i] is the starting point of the interval and end[i] is the ending point of the interval, return the minimum number of intervals that need to be removed to make the remaining intervals non-overlapping. .
*/

let interval = [[1, 2], [2, 3], [3, 4], [1, 3]]

//Approach 1, TC: O(nlogn), SC: O(1)
function nonOverlappingInternals_1(interval) {
    let n = interval.length;

    interval.sort((a, b) => a[1] - b[1]);
    let i = 0, lastCorrectInterval = 0, count = 0;

    while (i < n) {
        if (i > 0 && interval[i][0] < interval[lastCorrectInterval][1]) {
            count++;
        }
        else lastCorrectInterval = i
        i++;
    }


    return count;

}

console.log("non overlapping Interval", nonOverlappingInternals_1(interval))
