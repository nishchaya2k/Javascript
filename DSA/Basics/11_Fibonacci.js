/*
Print Fibonacci Series up to Nth term
*/

let n = 5

//Approach 1
function fibonacci(n) {

    if (n === 0) return []
    if (n === 1) return [0]

    let arr = [0, 1]

    function generate(n) {
        if (n == 0) return;

        let len = arr.length
        arr.push(arr[len - 1] + arr[len - 2])
        generate(n - 1)
    }

    generate(n - 2)
    return arr;
}

console.log("fibonacci Series", fibonacci(n))