/*
Capacity to Ship Packages within D Days

Problem Statement: You are the owner of a Shipment company. You use conveyor belts to ship packages from one port to another. The packages must be shipped within 'd' days.
The weights of the packages are given in an array 'of weights'. The packages are loaded on the conveyor belts every day in the same order as they appear in the array. The loaded weights must not exceed the maximum weight capacity of the ship.
Find out the least-weight capacity so that you can ship all the packages within 'd' days.
*/
let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], d = 1;

//Approach 1, Brute Force, Check each case of weight


//Approach 2, Optimal, TC: O(nlogn), SC: O(1)

function checkShipment(minCap, weights, n, d) {
    let totalWeightInADay = 0;
    let i = 0;

    for (i = 0; i < n; i++) {

        if ((totalWeightInADay + weights[i]) > minCap) {
            d--;
            totalWeightInADay = 0;
        }

        if (d == 0) break;
        totalWeightInADay += weights[i]
    }

    return d != 0 && i == n
}

function shipPackages(weights, d) {
    let n = weights.length;

    let maxCap = 0;
    let minCap = 0;

    for (let i = 0; i < n; i++) {
        minCap = Math.max(minCap, weights[i]);
        maxCap += weights[i];
    }

    while (minCap <= maxCap) {

        let mid = Math.floor((maxCap + minCap) / 2);
        if (checkShipment(mid, weights, n, d)) {
            maxCap = mid - 1;
        } else {
            minCap = mid + 1;
        }
    }

    return minCap;

}

console.log("Ship Packages of Min Weight", shipPackages(weights, d))