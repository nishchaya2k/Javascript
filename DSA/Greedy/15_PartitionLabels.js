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
    let freq={};

    for(let i=0;i<n;i++){
        freq[i] = (freq[i]||0)+1
    }
    let i=0,j=0;


}

console.log("Partition Label",partitionLabel(s))