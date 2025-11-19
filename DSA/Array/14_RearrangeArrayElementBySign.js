/*
Rearrange Array Elements by Sign

There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.
*/


let arr = [1, 2, -4, -5]

//Approach 1
function rearrangeArrayElements(arr) {
    let n = arr.length;

    let posIndex = 0;
    let negIndex = 1;

    let ans = new Array(n).fill(0);
    let i = 0;

    while (i < n) {
        if (arr[i] < 0) {
            ans[negIndex] = arr[i];
            negIndex += 2;
        } else {
            ans[posIndex] = arr[i];
            posIndex += 2;
        }
        i++;
    }
    return ans
}

console.log("rearrangeArrayElements", rearrangeArrayElements(arr))