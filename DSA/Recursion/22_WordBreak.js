/*
Word Break

Problem Statement: Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words otherwise return false.
*/

let s = "abcda", wordDict = ["ab", "bcd", "a"]

function wordBreak_1(s, wordDict) {

    let wordMap = new Map()
    for (let i = 0; i < wordDict.length; i++) {
        if (!wordMap.has(wordDict[i][0])) {
            wordMap.set(wordDict[i][0], [])
        }
        wordMap.get(wordDict[i][0]).push(wordDict[i])
    }

    let visited = {}

    function isStringPresent(i) {
        if (i == s.length) return true;
        if (visited[i] !== undefined) return visited[i]

        let charAt_i = s[i];
        let dictArrayAt_i = wordMap.get(charAt_i)

        if (dictArrayAt_i) {
            for (let j = 0; j < dictArrayAt_i.length; j++) {
                let dictStringLengthAt_j = dictArrayAt_i[j].length;

                if ((i + dictStringLengthAt_j) <= s.length) {
                    let substr = s.substring(i, i + dictStringLengthAt_j);

                    if (substr === dictArrayAt_i[j]) {
                        if (isStringPresent(i + dictStringLengthAt_j)) {
                            visited[i] = true;
                            return true;
                        }
                        else continue;
                    }
                }
            }
        }
        visited[i] = false;
        return false;
    }

    return isStringPresent(0);
}

console.log("Word Break", wordBreak_1(s, wordDict))


function wordBreak_2(s, wordDict) {

    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
}

console.log("Word Break", wordBreak_2(s, wordDict))