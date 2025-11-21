/*
Next Permutation

A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr:

[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1].


The next permutation of an array of integers is the next lexicographically greater permutation of its integers.

More formally, if all the permutations of the array are sorted in lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted order.

If such arrangement is not possible (i.e., the array is the last permutation), then rearrange it to the lowest possible order (i.e., sorted in ascending order).

You must rearrange the numbers in-place and use only constant extra memory.
*/

let arr = [2, 4, 1, 7, 5, 0]

//Approach 1, Brute Force,

function nextPermutation1(arr) {

    let result = [];

    function permutations(arr, index, result) {
        if (index === arr.length) {
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

    result.sort((a, b) => {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return a[i] - b[i]
        }
    })

    const currentIndex = result.findIndex(p => p.join(',') === arr.join(','))

    return result[(currentIndex + 1) % result.length]
}

console.log("Next Permutation", nextPermutation1(arr))


//Approach 2, Optimal, TC: O(n), SC: O(1)
function nextPermutation2(arr) {
    let index = -1;

    // Find decreasing point
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) {
            index = i;
            break;
        }
    }

    // If no index found
    if (index === -1) {
        // Reverse full array
        arr.reverse();
        return;
    }

    // Find just larger element
    for (let i = arr.length - 1; i > index; i--) {
        if (arr[i] > arr[index]) {
            // Swap them
            [arr[i], arr[index]] = [arr[index], arr[i]];
            break;
        }
    }

    // Reverse part after index
    let left = index + 1, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr

}

console.log("Next Permutation", nextPermutation2(arr))