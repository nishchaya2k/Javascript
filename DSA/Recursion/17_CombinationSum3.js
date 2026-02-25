/*
Combination Sum III

Problem Statement: Determine all possible set of k numbers that can be added together to equal n while meeting the following requirements:
1. There is only use of numerals 1 through 9.
2. A single use is made of each number.
Return list of every feasible combination that is allowed. The combinations can be returned in any order, but the list cannot have the same combination twice.
 */

let k = 3, n = 9

//Approach 1, TC: O(2^9 * k), SC: O(k)

function combinationSum_1(k, n) {

    let res = [];

    function generate(i, temp, sum) {

        //base cases
        if (i > 9 || sum > n) return;

        if ((temp.length == k) && sum == n) {
            res.push([...temp]);
            return;
        }

        temp.push(i + 1)
        generate(i + 1, temp, sum + i + 1)
        temp.pop();
        generate(i + 1, temp, sum)
    }

    generate(0, [], 0)
    return res;
}

console.log("Combination Sum", combinationSum_1(k, n))


//Approach 2, TC: O(2^9 * k), SC: O(k)
function combinationSum_2(k, n) {

    let res = [];

    function generate(i, temp, sum) {

        //base cases
        if (temp.length > k || i > 9 || sum > n) return;

        if ((temp.length == k) && sum == n) {
            res.push([...temp]);
            return;
        }

        for (let num = i; num <= 9; num++) {
            if ((num + sum) > n) break;

            temp.push(num)
            generate(num + 1, temp, sum + num);
            temp.pop();
        }
    }

    generate(1, [], 0)
    return res;
}

console.log("Combination Sum", combinationSum_2(k, n)) 