/*
Trapping Rainwater

Problem Statement: Given an array of non-negative integers representation elevation of ground. Your task is to find the water that can be trapped after rain .
*/

let height = [4, 2, 0, 3, 2, 5]


//Approach 1, TC: (n), SC(n)
function trapRainWater_1(height) {

    let n = height.length;
    let leftSum = [];
    let rightSum = new Array(n).fill(0);
    let maxVal = 0;
    let trappedWater = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (i == n - 1) {
            rightSum[i] = height[i]
            maxVal = height[i]
        } else {
            maxVal = Math.max(maxVal, height[i])
            rightSum[i] = maxVal
        }
    }
    maxVal = 0;
    for (let i = 0; i < n; i++) {
        if (i == 0) {
            leftSum[i] = height[i]
            maxVal = height[i]
        } else {
            maxVal = Math.max(maxVal, height[i])
            leftSum[i] = maxVal
        }
    }

    for (let i = 1; i < n - 1; i++) {
        let minBarSize = Math.min(leftSum[i], rightSum[i]);
        if (minBarSize > height[i]) trappedWater += minBarSize - height[i]
    }

    return trappedWater;
}

console.log("Trap Rainwater", trapRainWater_1(height))


//Approach 2, TC: (n), SC(1)
function trapRainWater_2(height) {

    let n = height.length;
    let leftMax = 0;
    let rightMax = 0;
    let l = 0, r = n - 1;

    let trappedWater = 0;

    while (l < r) {

        leftMax = Math.max(leftMax, height[l]);
        rightMax = Math.max(rightMax, height[r])


        if (leftMax < rightMax) {
            trappedWater += (leftMax - height[l]);
            l++
        } else {
            trappedWater += (rightMax - height[r]);
            r--;
        }
    }
    return trappedWater;

}
console.log("Trap Rainwater", trapRainWater_2(height))



/*
Intuition Behind Two Pointer Approach (O(1) Space)

Water trapped at any index depends on:
minimum of (maximum height on left, maximum height on right)

Instead of storing leftMax[] and rightMax[] arrays,
we use two pointers from both ends.

Key Idea:
Water level is always limited by the smaller boundary.

So:

- If leftMax < rightMax
    → left side is the limiting wall
    → water at left index = leftMax - height[left]
    → move left pointer forward

- If rightMax <= leftMax
    → right side is the limiting wall
    → water at right index = rightMax - height[right]
    → move right pointer backward

Why this works:
Because when one side’s max is smaller,
we are guaranteed that the other side has a taller wall,
so water can safely be calculated using the smaller boundary.

This allows us to compute trapped water
in a single pass without extra arrays.

Time Complexity: O(n)
Space Complexity: O(1)
*/
