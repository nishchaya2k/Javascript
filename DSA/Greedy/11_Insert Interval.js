/*
Insert Interval

Given a 2D array Intervals, where Intervals[i] = [start[i], end[i]] represents the start and end of the ith interval, the array represents non-overlapping intervals sorted in ascending order by start[i]. 

Given another array newInterval, where newInterval = [start, end] represents the start and end of another interval, merge newInterval into Intervals such that Intervals remain non-overlapping and sorted in ascending order by start[i].

Return Intervals after the insertion of newInterval.
*/

let intervals = [[1, 5]], newInterval = [2, 7];

//Approach 1, TC: O(n), SC: O(n)

function merge(res, insertInterval) {

    let i = res.length;

    if (i == 0 || (res[i - 1][1] < insertInterval[0])) res.push(insertInterval);
    else res[i - 1][1] = Math.max(res[i - 1][1], insertInterval[1])
}

function insertInterval_1(intervals, newInterval) {

    let n = intervals.length;
    if (n == 0) return newInterval;
    let res = [], isNewIntervalInserted = false, i = 0;

    while (i < n) {
        if (!isNewIntervalInserted && intervals[i][0] <= newInterval[0]) {
            merge(res, intervals[i]);
        } else {
            const insertInterval = !isNewIntervalInserted ? newInterval : intervals[i]

            merge(res, insertInterval)

            if (!isNewIntervalInserted) {
                isNewIntervalInserted = true;
                i--;
            }

        }
        i++;
    }

    if (!isNewIntervalInserted) merge(res, newInterval)
    return res;
}

console.log("Insert Interval", insertInterval_1(intervals, newInterval))

//Approach 2, TC: O(n), SC: O(n)
function insertInterval_2(intervals, newInterval) {

    let res = [];
    let i = 0;
    let n = intervals.length;

    // before overlap
    while (i < n && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i]);
        i++;
    }

    // overlap
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }

    res.push(newInterval);

    // after overlap
    while (i < n) {
        res.push(intervals[i]);
        i++;
    }

    return res;
}

console.log("Insert Interval", insertInterval_2(intervals, newInterval))