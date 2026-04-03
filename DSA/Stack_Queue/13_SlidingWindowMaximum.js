/*
Sliding Window Maximum

Problem Statement: Given an array of integers arr, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window..
*/

let arr = [4, 0, -1, 3, 5, 3, 6, 8], k = 3;


//Approach 1, Optimal, TC: O(n), SC: O(n)
function maxWindow_1(arr, k) {
    let n = arr.length;
    let nge_i = new Array(n);
    let stack = [];

    //next greater element index
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
            stack.pop();
        }
        nge_i[i] = stack.length ? stack[stack.length - 1] : n;
        stack.push(i);
    }


    console.log(nge_i)
    stack = [];

    for (let i = 0; i + k <= n; i++) {
        if (nge_i[i] >= (i + k)) stack.push(arr[i]);

        else {
            let req_i, j = i;
            while (nge_i[j] < (i + k)) {
                req_i = j;
                j = nge_i[j]
            }
            stack.push(arr[nge_i[req_i]]);
        }
    }
    return stack;
}

console.log("Sliding Window", maxWindow_1(arr, k))

//Approach 2, Optimal, TC: O(n), SC: O(k)
function maxWindow_2(arr, k) {
    let dq = []
    let front = 0
    let result = []

    for (let i = 0; i < arr.length; i++) {

        // remove out of window
        if (front < dq.length && dq[front] <= i - k) {
            front++
        }

        // remove smaller elements
        while (dq.length > front && arr[dq[dq.length - 1]] < arr[i]) {
            dq.pop()
        }

        dq.push(i)

        if (i >= k - 1) {
            result.push(arr[dq[front]])
        }
    }

    return result
}

console.log("Sliding Window", maxWindow_2(arr, k))







/*
-------------------------------------------------------
Real Life Intuition / Examples

Sliding Window Maximum represents a "rolling maximum" of the last k events.

1️⃣ Stock Market Monitoring
Imagine stock prices are recorded every minute.
We want the highest price in the last 5 minutes continuously.
Every minute the window moves forward by 1 minute.

Example:
prices = [100,102,98,105,110]
k = 3 minutes

windows:
[100,102,98] → max = 102
[102,98,105] → max = 105
[98,105,110] → max = 110

This helps traders track recent peaks.

-------------------------------------------------------

2️⃣ Server / CPU Monitoring
A monitoring system records CPU usage every second.
We want to know the peak CPU usage in the last 10 seconds.

cpu = [30,45,40,70,65,80]
k = 3 seconds

windows:
[30,45,40] → 45
[45,40,70] → 70
[40,70,65] → 70
[70,65,80] → 80

Used in dashboards to detect spikes.

-------------------------------------------------------

3️⃣ Fraud Detection (Payments)
Banks track number of transactions per minute.
They monitor the highest number of transactions in the last k minutes.

transactions = [5,12,3,20,18,6]
k = 3

windows:
[5,12,3] → 12
[12,3,20] → 20
[3,20,18] → 20
[20,18,6] → 20

Large spikes may indicate fraud or bot activity.

-------------------------------------------------------

4️⃣ Video Streaming / Network Monitoring
Streaming platforms track network bandwidth every second.
They check the highest bandwidth in the last few seconds
to adjust video quality dynamically.

-------------------------------------------------------

Key Idea:
We want the maximum of the last k elements while the window
moves one step forward each time.

Number of windows = n - k + 1

Brute Force → O(n*k)
Optimal Solutions → O(n)

Approach 1 → Next Greater Element (Monotonic Stack)
Approach 2 → Monotonic Deque (Most common interview solution)
*/