/*
There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.
*/

let ratings = [1, 0, 2]

//Approach 1, TC: O(n), SC: O(1)
function nChildren(ratings) {

    let n = ratings.length;

    if (n == 1) return 1;

    let lastNeighCandy = 1;
    let i = 0, j = 1;
    let minCandy = 1;

    while (j < n) {

        // increasing
        if (ratings[j] > ratings[i]) {
            lastNeighCandy += 1;
            minCandy += lastNeighCandy;
        }

        // equal
        else if (ratings[j] == ratings[i]) {
            lastNeighCandy = 1;
            minCandy += 1;
        }

        // decreasing
        else {

            let startCandy = lastNeighCandy;

            while (j < n - 1 && ratings[j + 1] < ratings[j]) {
                j++;
            }

            let decWindow = j - i;

            minCandy += (decWindow * (decWindow + 1)) / 2;

            if (decWindow >= startCandy) {
                minCandy += decWindow - startCandy + 1;
            }

            lastNeighCandy = 1;
        }

        i = j;
        j++;
    }

    return minCandy;
}

console.log(nChildren([0, 5, 5, 3, 3, 1, 3]));


console.log("n Children", nChildren(ratings))