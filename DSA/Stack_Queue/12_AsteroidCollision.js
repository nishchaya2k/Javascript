/*
Asteroid Collision

Problem Statement: Given an array of integers asteroids, where each integer represents an asteroid in a row, determine the state of the asteroids after all collisions. In this array, the absolute value represents the size of the asteroid, and the sign represents its direction (positive meaning right and negative meaning left). All asteroids move at the same speed.

When two asteroids meet, the smaller one will explode. If they are the same size, both will explode. Asteroids moving in the same direction will never meet.
*/

let asteroids = [2, -2]

//Approach 1, Optimal, TC: O(n), SC: O(n)
function asteroidCollision_1(asteroids) {
    let n = asteroids.length;
    let stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length && stack[stack.length - 1] > 0 && asteroids[i] < 0 && -asteroids[i] > stack[stack.length - 1]) {
            stack.pop();
        }

        if (
            stack.length &&
            stack[stack.length - 1] > 0 &&
            asteroids[i] < 0 &&
            -asteroids[i] === stack[stack.length - 1]
        ) {
            stack.pop();
            continue;
        }

        if (
            stack.length &&
            stack[stack.length - 1] > 0 &&
            asteroids[i] < 0 &&
            -asteroids[i] < stack[stack.length - 1]
        ) {
            continue;
        }
        stack.push(asteroids[i]);
    }

    return stack;

}

console.log("Asteroid Collision", asteroidCollision_1(asteroids))

