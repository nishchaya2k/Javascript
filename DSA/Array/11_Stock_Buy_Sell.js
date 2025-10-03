/*
Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

let prices = [7, 8, 9, 10, 0, 3, 6, 9];



//Approach 1, Brute Force, TC: O(n2)

function maximizeProfit1(prices) {
    let n = prices.length;
    let min = prices[0];
    let sum = 0;

    //base case
    if (n == 1) return 0;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (prices[j] - prices[i] > sum) {
                sum = prices[j] - prices[i]
            }
        }
    }

    return sum;
}

console.log("Maximum Profit", maximizeProfit1(prices))


//Approach 2, Optimal , TC: O(n)

function maximizeProfit2(prices) {

    let n = prices.length;
    let min = prices[0];
    let sum = 0;

    //base case
    if (n == 1) return 0;

    for (let i = 1; i < n; i++) {


        if (prices[i] > min && (prices[i] - min) > sum) {
            sum = prices[i] - min
        }

        else if (prices[i] < min) {
            min = prices[i]
        }
    }

    return sum
}

console.log("Maximum Profit", maximizeProfit2(prices))


/*
Approach 2 Working: 

- We will keep of updating the minimum and try to minimize it, & parallely we will keep on checking with each element as it is contributing in making maximum difference.
*/