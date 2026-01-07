/*
Delete all occurrences of a key in DLL

Problem Statement: Given the head of a doubly linked list and an integer target. Delete all nodes in the linked list with the value target and return the head of the modified linked list.
*/

const { doublyLLCreate } = require("./15_InsertAtHeadDoublyLinkedList")

let head = doublyLLCreate([2, 5, 2, 4, 8, 10, 2, 2]), target = 2;

function deleteAllOccurance(head, target) {
    let dummy = doublyLLCreate([-1]);
    dummy.next = head;
    let current = head;
    current.prev = dummy;

    while (current) {
        if (current.data == target) {
            current.prev.next = current.next;
            if (current.next) current.next.prev = current.prev
        }
        current = current.next;
    }
    head = dummy.next;
    head.prev = null;

    while (head) {
        console.log(head.data);
        head = head.next
    }
}
console.log("Delete All Occurance", deleteAllOccurance(head, target))