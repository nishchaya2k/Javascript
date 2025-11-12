/*
Delete the middle node in LL

Given the head of a non-empty singly linked list containing integers, delete the middle node of the linked list. Return the head of the modified linked list.

The middle node of a linked list of size n is the (⌊n / 2⌋ + 1)th node from the start using 1-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.
*/

const { llCreate } = require("./1_InsertAtHeadLinkedList")

let head = llCreate([1])

function deleteMiddle(head) {
    let dummy = llCreate([0])
    dummy.next = head;

    let slow = dummy;
    let fast = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return dummy.next;
}

console.log("Delete Node From Middle", deleteMiddle(head))