/*
Remove duplicates from sorted DLL

Problem Statement: Given the head of a doubly linked list with its values sorted in non-decreasing order. Remove all duplicate occurrences of any value in the list so that only distinct values are present in the list.
*/

const { doublyLLCreate } = require("./15_InsertAtHeadDoublyLinkedList");


let nums = [1];

let head = doublyLLCreate(nums)

//Approach 1, TC: O(n), SC: O(1)
function removeDuplicates_1(head) {

    if (!head) return head;
    let p1 = head, p2 = head;

    while (p2 && p2.next) {
        if (p2.next.data !== p1.data) {

            p2.next.prev = p1;
            p1.next = p2.next;
            p1 = p2.next

        }

        p2 = p2.next;
    }
    p1.next = null;

    return head;
}

console.log("Remove Duplicates", removeDuplicates_1(head))