/*
Permutations
*/

let arr = [1, 2, 3];

function permutationOfNumber(arr) {
    let result = [];

    function permutations(arr, index, result) {
        if (index === arr.length) {
            console.log(arr)
            result.push([...arr])
            return;
        }

        for (let i = index; i < arr.length; i++) {
            let temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
            permutations(arr, index + 1, result)
            temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }

    }

    permutations(arr, 0, result)
    return result;
}

console.log("Permutations", permutationOfNumber(arr))