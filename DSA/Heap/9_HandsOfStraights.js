/*
Hands of Straights

Problem Statement:
You are given an array of integers hand, where hand[i] is the value on the i-th card that Alice owns.

Alice wants to split her entire hand into groups such that:
1. every group contains exactly groupSize cards
2. the card values in each group form a sequence of groupSize consecutive integers

Example:
[3,4,5]
[10,11,12,13]
*/

// Hands of Straight

let hand = [1, 2, 3, 6, 2, 3, 4, 7, 8], groupSize = 3;


//Approach 1, TC: O(nlogn + n*groupSize), SC: O(n)

function handsStraight_1(hand, groupSize) {

    let n = hand.length,
        freq = new Map();

    // Base Case
    if (n % groupSize !== 0) return false;

    // Sort array
    hand.sort((a, b) => a - b);

    // Create frequency map
    for (let i = 0; i < n; i++) {
        freq.set(hand[i], (freq.get(hand[i]) || 0) + 1);
    }

    // Traverse sorted hand
    for (let i = 0; i < n; i++) {

        // Already used
        if (freq.get(hand[i]) === 0) continue;

        // Consume starting element
        freq.set(hand[i], freq.get(hand[i]) - 1);

        let j = 1;

        // Find remaining consecutive elements
        while (j < groupSize) {

            let next = hand[i] + j;

            // Missing consecutive element
            if (!freq.get(next)) {
                return false;
            }

            // Consume element
            freq.set(next, freq.get(next) - 1);

            j++;
        }
    }

    return true;
}

console.log("Handle Straight:", handsStraight_1(hand, groupSize));

/*
Time Complexity:
O(n log n + n * groupSize)

- Sorting => O(n log n)
- Traversal + group formation => O(n * groupSize)

Space Complexity:
O(n)

- Frequency map
*/