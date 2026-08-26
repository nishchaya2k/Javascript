/*
Partition Labels

You are given a string s. We want to partition the string into as many parts as possible so 
that each letter appears in at most one part. For example, the string "ababcc" can be 
partitioned into ["abab", "cc"], but partitions such as ["aba", "bcc"] or ["ab", "ab", "cc"] 
are invalid.
*/

let s = "ababcbacadefegdehijhklij";

function partitionLabel(s){
    let n = s.length;
    let lastIndex={},res = [];

    for(let i=0;i<n;i++){
        lastIndex[s[i]] = i;
    }

    let partsIndex=0,maxLastIndex = 0;

    for(let i=0;i<n;i++){

        maxLastIndex = Math.max(lastIndex[s[i]], maxLastIndex)

        if(lastIndex[s[i]] == maxLastIndex){
            res.push(i-partsIndex);
            partsIndex = i+1;
        }
    }

    return res;

}

console.log("Partition Label",partitionLabel(s))