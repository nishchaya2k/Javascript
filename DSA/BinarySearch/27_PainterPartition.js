/*
Painter's Partition Problem

Problem Statement: Given an array/list of length ‘N’, where the array/list represents the boards and each element of the given array/list represents the length of each board. Some ‘K’ numbers of painters are available to paint these boards. Consider that each unit of a board takes 1 unit of time to paint. You are supposed to return the area of the minimum time to get this job done of painting all the ‘N’ boards under the constraint that any painter will only paint the continuous sections of boards.
*/

let boards = [5, 5, 5, 5], k = 2;

//Approach 1, TC: O(nlog(sum(boards[])-max(boards[])+1)))), SC: O(1)

function isPainted(mid, k, n, boards) {
    let sum = 0;
    let i = 0;

    while (k--) {
        sum = 0; 

        while (i < n && sum + boards[i] <= mid) {
            sum += boards[i];
            i++;
        }

        if (i >= n) return true;
    }

    return false;
}

function paintersPaintTime_1(boards, k) {
    let n = boards.length;

    let end = boards.reduce((a, b) => a + b, 0);

    let start = Math.max(...boards);

    let min = end;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (isPainted(mid, k, n, boards)) {
            min = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return min;
}


console.log("Paint Time", paintersPaintTime_1(boards, k))