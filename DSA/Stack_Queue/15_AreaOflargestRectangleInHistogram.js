/*
Area of largest rectangle in Histogram

Problem Statement: Given an array of integers heights representing the histogram's bar height where the width of each bar is 1 return the area of the largest rectangle in histogram. .
*/

let heights = [6, 4, 10, 3, 3, 8, 4, 10];

//Approach 1, TC: O(n), SC: O(n)
function largestRectange_1(heights) {
    let n = heights.length;

    let pse_i = new Array(n);  //indeces
    let nse_i = new Array(n);  //indeces

    let stack = []


    //previous first smaller element index
    for (let i = 0; i < n; i++) {

        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }

        pse_i[i] = stack.length == 0 ? -1 : stack[stack.length - 1]
        stack.push(i)
    }

    stack = [];

    //previous first smaller element index
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }

        nse_i[i] = stack.length == 0 ? n : stack[stack.length - 1]
        stack.push(i)
    }


    let maxArea = 0;

    for (let i = 0; i < n; i++) {
        let currentBarArea = (nse_i[i] - pse_i[i] - 1) * heights[i]
        maxArea = Math.max(currentBarArea, maxArea)
    }
    return maxArea;

}

console.log("Largest Rectangle", largestRectange_1(heights));

//Approach 2, TC: O(n), SC: O(n)
function largestRectange_2(heights) {

    let stack = [];
    let maxArea = 0;
    let n = heights.length;

    for (let i = 0; i <= n; i++) {

        let currentHeight = (i === n) ? 0 : heights[i];

        while (stack.length && heights[stack[stack.length - 1]] > currentHeight) {

            let top = stack.pop();
            let height = heights[top];

            let width;

            if (stack.length === 0) {
                width = i;
            } else {
                width = i - stack[stack.length - 1] - 1;
            }

            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    }

    return maxArea;
}

console.log("Largest Rectangle", largestRectange_1(heights));
