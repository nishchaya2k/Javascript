/*
Celebrity Problem

Problem Statement: A celebrity is a person who is known by everyone else at the party but does not know anyone in return. Given a square matrix M of size N x N where M[i][j] is 1 if person i knows person j, and 0 otherwise, determine if there is a celebrity at the party. Return the index of the celebrity or -1 if no such person exists.
*/

let m = [[0, 1], [1, 0]];

//Approach 1, Brute Force, TC: O(n^2), SC:O(1)
function findCelebrity_1(m) {

    let n = m.length;

    for (let j = 0; j < n; j++) {

        let i = 0;
        for (; i < n; i++) {

            if (i == j) continue;

            if (m[j][i] == 1 || m[i][j] == 0)
                break;
        }
        if (i == n) return j;
    }
    return -1;
}

console.log("Find Celebrity", findCelebrity_1(m))


//Approach 2, Optimal, TC: O(n), SC:O(n)
function findCelebrity_2(m) {

    let n = m.length;
    let stack = [];

    //push all people assuming all are celebrity
    for (let i = 0; i < n; i++) {
        stack.push(i);
    }

    while (stack.length > 1) {
        let a = stack.pop();
        let b = stack.pop();

        if (m[a][b] === 1) {
            stack.push(b);
        } else {
            stack.push(a);
        }
    }


    let candidate = stack.pop();

    for (let i = 0; i < n; i++) {
        if (i === candidate) continue;

        if (m[candidate][i] === 1 || m[i][candidate] === 0)
            return -1;
    }
    return candidate;
}

console.log("Find Celebrity", findCelebrity_2(m))

//Approach 3, Can be done by two pointers also, TC: O(n), SC:O(1)


function findCelebrity_3(m) {

    let n = m.length;

    let left = 0;
    let right = n - 1;

    while (left < right) {

        if (m[left][right] === 1) {
            left++;
        } else {
            right--;
        }
    }

    let candidate = left;

    for (let i = 0; i < n; i++) {

        if (i === candidate) continue;

        if (m[candidate][i] === 1 || m[i][candidate] === 0)
            return -1;
    }

    return candidate;
}

console.log("Find Celebrity", findCelebrity_3(m))



/*
============================================================
 Celebrity Problem = Tournament Winner Elimination
============================================================

Core Idea

The celebrity problem works exactly like a tournament elimination process.

Initially:
Everyone is considered a possible celebrity.

Each comparison between two people eliminates one candidate.

After N - 1 eliminations,
only ONE potential candidate remains.

But this candidate is not guaranteed to be a celebrity,
so we must verify them at the end.


------------------------------------------------------------
Key Elimination Rule
------------------------------------------------------------

Compare two people A and B:

If A knows B  → A cannot be celebrity
If A does NOT know B → B cannot be celebrity

Reason:

Celebrity conditions:
1) Celebrity knows nobody
2) Everyone knows the celebrity


------------------------------------------------------------
Tournament Analogy
------------------------------------------------------------

Each comparison acts like a match:

A vs B
↓
Loser eliminated
↓
Winner continues

After repeating:

N people
↓
N - 1 eliminations
↓
1 candidate remains

This remaining person is the potential celebrity.


------------------------------------------------------------
Final Verification Step
------------------------------------------------------------

Let candidate = C

For every person i ≠ C:

M[C][i] === 0   // celebrity knows nobody
M[i][C] === 1   // everyone knows celebrity

If either condition fails
→ No celebrity exists → return -1


------------------------------------------------------------
Complexity
------------------------------------------------------------

Elimination Phase   → O(N)
Verification Phase  → O(N)

Total Time → O(N)

Space:
O(1) → two pointer approach
O(N) → stack approach


------------------------------------------------------------
One-Line Intuition
------------------------------------------------------------

Every comparison removes exactly one non-celebrity candidate.

*/