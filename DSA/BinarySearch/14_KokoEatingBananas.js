/*
Koko Eating Bananas

Problem Statement: A monkey Koko is given ‘n’ piles of bananas, whereas the 'ith' pile has ‘a[i]’ bananas. An integer ‘h’ is also given, which denotes the time (in hours) for all the bananas to be eaten.

Each hour, the monkey chooses a non-empty pile of bananas and eats ‘k’ bananas. If the pile contains less than ‘k’ bananas, then the monkey consumes all the bananas and won’t eat any more bananas in that hour.

Find the minimum number of bananas ‘k’ to eat per hour so that the monkey can eat all the bananas within ‘h’ hours.
*/

let n = 5, arr = [25, 12, 8, 14, 19], h = 5;

//Approach 1, Brute Force, run loop from 1 to max, TC: O(n^2)


//Approach 2, Optimal, TC: O(nlogn)


function findQuotientSum(arr, mid, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += Math.ceil(arr[i] / mid);
    }

    return sum;
}


function eatingBananas(arr, h, n) {

    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (arr[i] > max) max = arr[i]
    }

    let start = 1;
    let end = max;
    let result = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let sum = findQuotientSum(arr, mid, n);

        if (sum <= h) {
            end = mid - 1;
            result = mid;
        } else {
            start = mid + 1;
        }
    }

    return result
}

console.log("Eating Bananas", eatingBananas(arr, h, n))