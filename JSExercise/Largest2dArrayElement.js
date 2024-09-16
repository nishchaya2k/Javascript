// Find the largest Element from the 2d Array

let a = [[1, 2, 32, 3, 22], [22, 3, 4, 111, 3, 2]];


function LargestElement(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            max = Math.max(max, arr[i][j]);
        }
    }

    return max;
}

console.log(LargestElement(a))
