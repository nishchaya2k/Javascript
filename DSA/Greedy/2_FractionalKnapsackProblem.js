/*
Fractional Knapsack Problem: Greedy Approach

Problem Statement: The weight of N items and their corresponding values are given. We have to put these items in a knapsack of weight W such that the total value obtained is maximized.

Note: We can either take the item as a whole or break it into smaller units.
*/

let val = [60, 100], wt = [10, 20], capacity = 50  

//Approach 1, TC: O(nlogn), SC:O(n)

function knapSack_1(val, wt, capacity) {

    let valPerUnit = [];

    for (let i = 0; i < val.length; i++) {
        let innerArr = [val[i] / wt[i], wt[i]]
        valPerUnit.push(innerArr);
    }

    valPerUnit = valPerUnit.sort((a, b) => b[0] - a[0]);
    let maxCap = 0, i = 0;
    console.log(valPerUnit)

    while (i < valPerUnit.length && capacity) {

        let minWeight = valPerUnit[i][1] <= capacity ? valPerUnit[i][1] : capacity
        let currentCap = valPerUnit[i][0] * minWeight
        capacity -= minWeight
        maxCap += currentCap
        i++;
    }
    return maxCap;

}

console.log("Total Value", knapSack_1(val, wt, capacity))

