/*
Minimum Window Substring

Given two strings s and t. Find the smallest window substring of s that includes all characters in t (including duplicates) , in the window. Return the empty string "" if no such substring exists.
*/

let s = "ADOBECODEBANC", t = "ABC";

//Approach 1, TC: O(n), SC: (k)
function minimumWindowSub_1(s, t) {
    let m = s.length, n = t.length;

    //edge case
    if (n > m) return "";

    //freq for t
    let map = new Map();
    for (let i = 0; i < n; i++) {
        map.set(t[i], (map.get(t[i]) || 0) + 1)
    }

    let l = 0, r = 0, count = 0, minWindow = Infinity, minL = -1, minR = -1;
    while (l <= r && r < m) {

        if (map.has(s[r])) {
            map.set(s[r], map.get(s[r]) - 1)
            if (map.get(s[r]) >= 0) count++; //avoid -, as they are extra ones
        }

        //shorten the window
        while (l <= r && count == n) {

            //store min window
            if (minWindow > (r - l + 1)) {
                minWindow = r - l + 1;
                minR = r;
                minL = l;
            }

            //update count
            if (map.has(s[l])) {
                map.set(s[l], map.get(s[l]) + 1)
                if (map.get(s[l]) > 0) count--; // means we dont have s[l] in window now
            }
            l++;
        }
        r++;
    }

    return minWindow == Infinity ? "" : s.substring(minL, minR + 1);
}

console.log("Minimum Window Substring", minimumWindowSub_1(s, t))



/*
1. We need the smallest substring of s that contains all characters of t
   (including duplicates).

2. Use a sliding window [l, r]. Expand the window by moving r until
   all characters of t are present inside the window.

3. Store frequencies of t in a map. As characters enter the window,
   decrease their frequency in the map.

4. Maintain a count variable to track how many characters from t
   have been matched so far. Increment count only when a needed
   character is found (frequency remains >= 0 after decrement).

5. Once count == t.length, the current window contains all required
   characters, so it is a valid window.

6. Try to shrink the window from the left (move l) to remove extra
   characters and make the window as small as possible while still
   remaining valid.

7. Whenever a smaller valid window is found, store its boundaries.
   Continue expanding and shrinking until the entire string is processed.
*/