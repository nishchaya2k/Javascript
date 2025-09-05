/*
- Rotate String

Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.

*/

let s = "mrnhanga", goal = "nganhamr"

//Approach 1

function rotateString(s, goal) {

    let n = s.length;

    for (let i = 0; i < n; i++) {
        if (s[i] == goal[0] && s[n - 1] == goal[n - 1 - i]) {
            let j = i;
            let k = 0;

            while (j < n && k <= (n - 1 - i)) {
                if (s[j] !== goal[k]) break;

                //keep on comparing
                j++;
                k++;
            }

            //successfully found the equal window 
            if (j == n) {
                j = 0;
                while (k < n) {
                    if (s[j] !== goal[k]) break;

                    k++;
                    j++;
                }

                if (k == n) return true;
            }
        }
    }
    return false;
}

console.log("is String Can be Rotated", rotateString(s, goal))