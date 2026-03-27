/*
Next Smaller Element

Problem Statement: Given an array of integers arr, your task is to find the Next Smaller Element (NSE) for every element in the array.
The Next Smaller Element for an element x is defined as the first element to the right of x that is smaller than x.
If there is no smaller element to the right, then the NSE is -1.
*/

let nums = [4, 8, 5, 2, 25]

//Approach 1, TC: O(n), SC: O(n)

function nextSmallerElement(nums) {
    let st = [];
    let res = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        if (st.length === 0) {
            st.push(nums[i]);
            res.push(-1);
        } else {
            if (st[st.length - 1] < nums[i]) {
                res.push(st[st.length - 1])
            } else {
                while (st.length !== 0 && nums[i] <= st[st.length - 1]) {
                    st.pop();
                }
                if (st.length == 0) {
                    res.push(-1);
                } else {
                    res.push(st[st.length - 1])
                }
            }
            st.push(nums[i]);
        }
    }
    res.reverse();

    return res;

}

console.log("Next Smaller Element", nextSmallerElement(nums))