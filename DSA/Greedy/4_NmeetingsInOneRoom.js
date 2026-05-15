/*
N meetings in one room

Problem Statement: There is one meeting room in a firm. You are given two arrays, start and end each of size N. For an index ‘i’, start[i] denotes the starting time of the ith meeting while end[i] will denote the ending time of the ith meeting. Find the maximum number of meetings that can be accommodated if only one meeting can happen in the room at a particular time. Print the order in which these meetings will be performed.
*/

let start = [15, 22, 6, 11, 11, 25], end = [24, 29, 21, 24, 21, 29]

//Approach 1, TC: O(nlogn+n), SC: O(n)
function nMeeting_room_1(start, end) {
    let n = start.length;
    let meetType = [], ans = [];

    for (let i = 0; i < n; i++) {
        meetType.push([start[i], end[i]]);
    }

    meetType.sort((a, b) => a[1] - b[1]);

    let lastSelectedIndex = -1; // 🔹 minimal addition

    for (let i = 0; i < n; i++) {
        if (i === 0 || meetType[i][0] >= meetType[lastSelectedIndex][1]) {
            ans.push(i + 1);
            lastSelectedIndex = i; // 🔹 update once
        }
    }

    return ans;
}

console.log("N Meeting Room", nMeeting_room_1(start, end))