/*
Fruit Into Baskets

Problem Statement: There is only one row of fruit trees on the farm, oriented left to right. An integer array called fruits represents the trees, where fruits[i] denotes the kind of fruit produced by the ith tree.
The goal is to gather as much fruit as possible, adhering to the owner's stringent rules :

There are two baskets available, and each basket can only contain one kind of fruit. The quantity of fruit each basket can contain is unlimited.
Start at any tree, but as you proceed to the right, select exactly one fruit from each tree, including the starting tree. One of the baskets must hold the harvested fruits.
Once reaching a tree with fruit that cannot fit into any basket, stop.
Return the maximum number of fruits that can be picked.
*/

let fruits = [1, 2, 1]


//Approach 1, Tc:O(n), SC: (1)
function maxFruitsCount_1(fruits) {

    let n = fruits.length;
    const basket = new Map();
    let left = 0;
    let maxFruits = 0;
    const k = 2;

    for (let right = 0; right < n; right++) {

        basket.set(fruits[right], (basket.get(fruits[right]) || 0) + 1);

        while (basket.size > k) {
            basket.set(fruits[left], basket.get(fruits[left]) - 1);
            if (basket.get(fruits[left]) == 0) {
                basket.delete(fruits[left])
            }
            left++;
        }
        maxFruits = Math.max(right - left + 1, maxFruits);
    }

    return maxFruits;
}

console.log("Max Fruits Count", maxFruitsCount_1(fruits))


//Approach 3, TC:O(n), SC: (1)
function maxFruitsCount_3(fruits) {

    let n = fruits.length;
    let lastPluckedFruit_startingIndex = 0, firstPluckedFruit_startingIndex = 0, f1 = fruits[0], f2 = -1;

    let maxFruits = 0;

    for (let i = 0; i < n; i++) {
        if (i !== 0 && fruits[i] !== fruits[i - 1]) {
            if (fruits[i] !== f1 && fruits[i] !== f2) {
                f1 = fruits[lastPluckedFruit_startingIndex]
                f2 = fruits[i]
                firstPluckedFruit_startingIndex = lastPluckedFruit_startingIndex;
            }
            lastPluckedFruit_startingIndex = i;
        }

        maxFruits = Math.max(i - firstPluckedFruit_startingIndex + 1, maxFruits);
    }
    return maxFruits;
}

console.log("Max Fruits Count", maxFruitsCount_3(fruits))







/*
INTUITION OF THIS APPROACH 1

👉 Key Idea:
Instead of using HashMap, track only:
- Two fruit types (f1, f2)
- Start of current valid window
- Start of last continuous fruit block

------------------------------------------------------------

We maintain:

f1 → first basket fruit
f2 → second basket fruit
firstPluckedFruit_startingIndex → start of current valid window
lastPluckedFruit_startingIndex → start index of last fruit segment

------------------------------------------------------------

Core Observation:

When a 3rd fruit appears:

We cannot keep the entire window.
BUT we can keep the last continuous fruit block,
because that fruit can form the new basket.

So:
👉 New window starts from lastPluckedFruit_startingIndex
👉 f1 becomes the fruit of last segment
👉 f2 becomes the new fruit

------------------------------------------------------------

Why lastPluckedFruit_startingIndex works?

Because:
In any valid window with 2 fruits,
only the most recent fruit segment can survive
when a 3rd fruit appears.

Everything before that must be discarded.

------------------------------------------------------------

Algorithm Working:

1) Traverse array from left to right.
2) If fruit changes:
      update lastPluckedFruit_startingIndex.
3) If fruit is neither f1 nor f2:
      → 3rd fruit found
      → reset window start to lastPluckedFruit_startingIndex
      → update baskets
4) At each step calculate window length:
      currentLength = i - firstPluckedFruit_startingIndex + 1
5) Keep track of max length.

------------------------------------------------------------

Time Complexity: O(n)
Space Complexity: O(1)

This works because:
We are effectively maintaining a sliding window
without explicitly storing frequencies.
*/