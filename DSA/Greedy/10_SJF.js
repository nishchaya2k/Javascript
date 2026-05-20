/*
Shortest Job First (or SJF) CPU Scheduling

Problem Statement: Given a list of job durations representing the time it takes to complete each job. Implement the Shortest Job First algorithm to find the average waiting time for these jobs.
*/

let jobs = [1, 2, 3, 4];

//Approach 1,  TC: O(nlogn), SC: O(1)
function SJF_1(jobs) {

    let n = jobs.length, waitTime = 0, totalTime = 0;
    jobs.sort((a, b) => (a - b));

    for (let i = 1; i < n; i++) {
        waitTime += jobs[i - 1];
        totalTime += waitTime;
    }
    return Math.floor(totalTime / n);
}

console.log("Shortest Job", SJF_1(jobs))