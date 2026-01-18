/*
Reverse a Doubly Linked List

Problem Statement: Given a doubly linked list of size ‘N’ consisting of positive integers, your task is to reverse it and return the head of the modified doubly linked list.
*/

const { doublyLLCreate } = require("./15_InsertAtHeadDoublyLinkedList");

let head = doublyLLCreate([1, 2, 3, 4, 5])


//Approach 1, Brute Force, TC: O(n), SC: O(n)

function ReverseDLL_1(head) {
    let stack = [];
    let curr = head;

    while (curr) {
        stack.push(curr)
        curr = curr.next
    }

    curr = head;
    let n = stack.length
    head = stack[stack.length - 1]
    let prev = null

    while (n--) {
        let temp = stack.pop();
        temp.next = stack.length ? stack[stack.length - 1] : null;
        temp.prev = prev
        prev = temp;
    }
    return head
}
console.log("Reverse Doubly Linked List", ReverseDLL_1(head))

//Approach 2, Optimal, TC: O(N), SC: O(1)

function ReverseDLL_2(head) {
    let curr = head;
    let newHead;

    while (curr) {
        // swap next and prev
        let temp = curr.next;
        curr.next = curr.prev;
        curr.prev = temp;

        // update new head when at last node
        newHead = curr;

        // move to next node (original next)
        curr = temp;
    }
    return newHead
}
console.log("Reverse Doubly Linked List", ReverseDLL_2(head))