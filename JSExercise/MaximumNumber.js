// Write a JavaScript program to find the maximum number in an array.

let input = [2, 4, 11, 43, 22, 9, 33];


let ans = Number.MIN_SAFE_INTEGER - 1;
input.forEach(element => {
    (element > ans) && (ans = element)
})


console.log(ans);