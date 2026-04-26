/*
Maximum point you can obtain from cards

Problem Statement: Given N cards arranged in a row, each card has an associated score denoted by the cardScore array. Choose exactly k cards. In each step, a card can be chosen either from the beginning or the end of the row. The score is the sum of the scores of the chosen cards.
*/

let cardScore = [9, 7, 7, 9, 7, 7, 9], k = 7

//Approach 1, TC: O(n), SC: O(n)
function maxPoint_1(cardScore, k) {

    let start = 0, end = cardScore.length - 1;
    let maxSum = 0

    let prefSum = Array(end + 1).fill(0);

    for (let i = 0; i <= end; i++) {
        prefSum[i] = (i != 0 ? prefSum[i - 1] : 0) + cardScore[i];
    }

    for (let i = end - k; i <= end; i++) {
        let kSum = prefSum[end] - prefSum[i] + (start !== 0 ? prefSum[start - 1] : 0)

        maxSum = Math.max(maxSum, kSum)
        start++;
    }

    return end == k-1 ? prefSum[end] : maxSum
}

console.log("Maximum Point", maxPoint_1(cardScore, k))

//Approch 2, TC: O(k), SC: O(1)
function maxPoint_2(cardScore, k) {

    let n = cardScore.length;
    let start = 0;
    let maxSum = 0;

    // initially take all k from left
    let leftSum = 0;
    for (let i = 0; i < k; i++) {
        leftSum += cardScore[i];
    }

    maxSum = leftSum;

    let rightSum = 0;

    // now shift from left to right (same idea as your start++)
    for (let i = k - 1; i >= 0; i--) {

        // remove from left
        leftSum -= cardScore[i];

        // add from right
        rightSum += cardScore[n - (k - i)];

        let kSum = leftSum + rightSum;

        maxSum = Math.max(maxSum, kSum);
    }

    return maxSum;
}

console.log("Maximum Point", maxPoint_2(cardScore, k))
