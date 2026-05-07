/*
Assign Cookies

Problem Statement: Consider a scenario where a teacher wants to distribute cookies to students, with each student receiving at most one cookie. Given two arrays, student and cookie, the ith value in the student array describes the minimum size of cookie that the ith student can be assigned. The jth value in the cookie array represents the size of the jth cookie. If cookie[j] >= student[i], the jth cookie can be assigned to the ith student. Maximize the number of students assigned with cookies and output the maximum number.
*/


let student = [1, 2, 3], cookie = [1, 1];

//Approach 1. TC: O(n*logn + m*logm), SC: O(1)
function assignCookies_1(student, cookie) {
    student = student.sort((a, b) => a - b)
    cookie = cookie.sort((a, b) => a - b)

    let i = 0, j = 0, count = 0;


    while (i < student.length && j < cookie.length) {
        if (student[i] <= cookie[j]) {
            count++;
            i++;
        }
        j++;
    }
    return count;
}

console.log("Assign Cookies", assignCookies_1(student, cookie))

