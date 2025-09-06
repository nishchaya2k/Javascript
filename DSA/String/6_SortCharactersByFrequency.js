/*
Problem: Sort Characters by Frequency

You are given a string s. Return the array of unique characters, sorted by highest to lowest occurring characters.

If two or more characters have same frequency then arrange them in alphabetic order.
*/

let s = "tree"

// Approach 1, Brute Force, TC: O(n2) , bcoz of bubble sort

function swap(arr, i, j) {
    let temp;

    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sortCharactersByFrequency1(s) {
    let freq = {};
    let arr = [];

    for (let i = 0; i < s.length; i++) {
        if (!freq[s[i]] || freq[s[i]] == 0) {
            arr.push(s[i])
        }

        freq[s[i]] = (freq[s[i]] || 0) + 1;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (freq[arr[i]] < freq[arr[j]]) swap(arr, i, j)
            else if (freq[arr[i]] === freq[arr[j]] && arr[i] > arr[j]) swap(arr, i, j)
        }
    }

    return arr;
}

console.log("Sort Characters By Frequency", sortCharactersByFrequency1(s))


// Approach 2, Brute Force, TC: O(nlogn)

function sortCharactersByFrequency2(s) {
    let freq = {};

    for (let i = 0; i < s.length; i++) {
        freq[s[i]] = (freq[s[i]] || 0) + 1;
    }

    let arr = Object.keys(freq)

    arr.sort((a, b) => {
        if (freq[a] !== freq[b]) {
            return freq[b] - freq[a]
        }

        return a.localeCompare(b)
    })

    return arr;
}

console.log("Sort Characters By Frequency", sortCharactersByFrequency2(s))
