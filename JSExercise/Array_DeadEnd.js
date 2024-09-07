//Find the Dead End Destination, which is not a Starting for any journey?  Solution -> [ 'Austin', 'Houston' ]

//1.
let paths = [
    ["NewYork", "Washington"],
    ["Washington", "Chicago"],
    ["Chicago", "Austin"],
    ["Chicago", "NewYork"],
    ["Washington", "Houston"],
];


let temp1 = new Set();
let temp2 = new Set();

let result = [];

for (let i = 0; i < paths.length; i++) {
    temp1.add(paths[i][1]);
    temp2.add(paths[i][0]);
}

for (let x of temp1) {
    if (!temp2.has(x)) {
        result.push(x)
    }
}

console.log(result)


//1.1

let start = {};
let deadEnd = [];

for (let i = 0; i < paths.length; i++) {   //O(n)
    start[paths[i][0]] = true;
}

for (let i = 0; i < paths.length; i++) {                     //O(n)
    if (!start[paths[i][1]]) deadEnd.push(paths[i][1]);
}

console.log(deadEnd)            // Final Complexity - O(n)
