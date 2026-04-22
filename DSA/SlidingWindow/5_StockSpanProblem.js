/*
Stock span problem

Problem Statement: Given an array arr of size n, where each element arr[i] represents the stock price on day i. Calculate the span of stock prices for each day.

The span Sᵢ for a specific day i is defined as the maximum number of consecutive previous days (including the current day) for which the stock price was less than or equal to the price on day i.
*/


//Approach 1,
let arr = [120, 100, 60, 80, 90, 110, 115]

function stockSpan_1(arr) {
    let n = arr.length;
    let stack = [];
    let pfse = new Array(n);  //previous first greater element

    for (let i = 0; i < n; i++) {
        while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop()
        }

        pfse[i] = stack.length ? stack[stack.length - 1] : -1

        stack.push(i)
    }

    console.log(pfse)
    stack = [];

    for (let i = 0; i < n; i++) {
        stack.push(i - pfse[i]);
    }

    return stack;
}

console.log("stockSpan_1", stockSpan_1(arr))
