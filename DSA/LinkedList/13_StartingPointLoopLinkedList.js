/*
Starting point of loop in a Linked List

Problem Statement: Given the head of a linked list that may contain a cycle, return the starting point of that cycle. If there is no cycle in the linked list return null.
*/

const { llCreate } = require("./1_InsertAtHeadLinkedList");

let head = llCreate([2, 3, 4, 5, 6])

function linkedListLoop(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next && slow !== fast) {     //asuming to have  acycle
        slow = slow.next;
        fast = fast.next.next
    }

    if (!fast || !fast.next) return null;

    slow = head;

    while (slow !== fast) {
        fast = fast.next
        slow = slow.next
    }

    return slow;
}

console.log("Linked List Loop", linkedListLoop(head))