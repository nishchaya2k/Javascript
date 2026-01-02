/*
Generate all binary strings

Problem Statement: Given an integer n, return all binary strings of length n 
A binary string is a string consisting only of characters '0' and '1'.
*/

let n = 3;

//Approach 1, TC: O(2^n), SC: O(n * 2^n)

function generatAllBinaryStrings_1(n) {

    let res = [];
    let str = [];

    function generate(i, n, str, res) {

        //base case
        if (i >= n) {
            res.push([...str])
            return;
        }
        str.push(0)
        generate(i + 1, n, str, res)
        str.pop();

        str.push(1)
        generate(i + 1, n, str, res)
        str.pop();

    }

    generate(0, n, str, res)
    return res;
}

console.log("generatAllBinaryStrings", generatAllBinaryStrings_1(n))



//Approach 2, TC: O(2^n), SC: O(n * 2^n)

function generatAllBinaryStrings_2(n) {

    let res = [];
    let str = '';

    function generate(i, n, str, res) {

        //base case
        if (i >= n) {
            res.push(str)
            return;
        }
        generate(i + 1, n, str + '0', res)
        generate(i + 1, n, str + '1', res)
    }

    generate(0, n, str, res)
    return res;
}

console.log("generatAllBinaryStrings", generatAllBinaryStrings_2(n))



/*
Notes on Generating All Binary Strings

1. Approaches:
   1.1 Using an array (`str = []`)
       - Mutable array
       - Use push/pop for backtracking
       - Must copy before storing results: res.push([...str])
       - Example: [0,1,0], etc.
   1.2 Using a string (`str = ''`)
       - Immutable string
       - No push/pop needed
       - No copy needed: res.push(str)
       - Example: "010", etc.

2. Why array requires copy:
   - Arrays are stored by reference in JS
   - Backtracking mutates the same array
   - Without copying, all stored results point to same array
   - Copying freezes the current state: [...str]

3. Why string doesn't require copy:
   - Strings are immutable in JS
   - Each recursive call creates a new string value
   - No other call can mutate it
   - Safe to push directly into results

4. Recursion / Backtracking Rules:
   - Mutable state (array) → push → recurse → pop → copy at base case
   - Immutable state (string) → pass new value → recurse → automatically backtracks

5. Tree Visualization (n = 3):
   - Array version: nodes are arrays, backtracking ensures correct path
   - String version: nodes are strings, each branch independent
   - Both generate 2^n leaf nodes

6. Key Takeaways:
   - Mutable objects need manual backtracking + copy
   - Immutable objects simplify recursion and avoid reference bugs
   - Conceptually, recursion depth = position in string/array
   - Each node in recursion tree = one choice (0 or 1)
*/
