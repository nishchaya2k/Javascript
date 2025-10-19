/*
Capacity to Ship Packages within D Days

Problem Statement: You are the owner of a Shipment company. You use conveyor belts to ship packages from one port to another. The packages must be shipped within 'd' days.
The weights of the packages are given in an array 'of weights'. The packages are loaded on the conveyor belts every day in the same order as they appear in the array. The loaded weights must not exceed the maximum weight capacity of the ship.
Find out the least-weight capacity so that you can ship all the packages within 'd' days.
*/

let n = 10, weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], d = 1

//Approach - 2, Optimcal

function findLeastWeightCapacity(mid, weights, n, d) {
    let dayWeight = 0;
    for (let i = 0; i < n; i++) {
        if ((dayWeight + weights[i]) > mid) {
            d -= 1;
            dayWeight = 0;
        }
        dayWeight += weights[i]
        if ((d == 0 && i !== n) || (dayWeight == 0 && d == 0)) return false
    }
    return true;
}

function capacityShipPackages(weights, n, d) {
    let start = Math.max(...weights);

    let end = weights.reduce((acc, current) => acc + current, 0);
    let result = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        let capacityHandled = findLeastWeightCapacity(mid, weights, n, d)
        if (capacityHandled) {
            result = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return result
}

console.log("Capacity Ship Packages", capacityShipPackages(weights, n, d))