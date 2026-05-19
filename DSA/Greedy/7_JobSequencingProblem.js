/*
Job Sequencing Problem

Given a set of n jobs where each jobi has a deadline and profit associated with it. Each job takes 1 unit of time to complete and only one job can be scheduled at a time. We earn the profit if and only if the job is completed by its deadline. The task is to find the number of jobs done and the maximum profit.

Note:  Jobs will be given in the form (id, deadline, profit) associated with that Job.
*/

let Jobs = [[1, 2, 100], [2, 1, 19], [3, 2, 27], [4, 1, 25], [5, 1, 15]];


//Approach 1, TC: O(nlogn+n*m), SC: O(n)
function jobSequencingProblem_1(Jobs) {

    Jobs.sort((a, b) => (b[2] - a[2]));
    let n = Jobs.length, maxD = 0, countJobs = 0, jobProfit = 0;

    for (let i = 0; i < n; i++) {
        maxD = Math.max(maxD, Jobs[i][1])
    }

    let res = Array.from({ length: maxD + 1 }, (_, i) => -1)

    for (let i = 0; i < n; i++) {
        for (let j = Jobs[i][1]; j > 0; j--) {
            if (res[j] == -1) {
                res[j] = i;
                countJobs++;
                jobProfit += Jobs[i][2]
                break;
            }
        }
    }

    return [countJobs, jobProfit];
}

console.log("Job Sequencing Problem", jobSequencingProblem_1(Jobs))