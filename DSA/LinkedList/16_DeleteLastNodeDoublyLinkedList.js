/*
Delete Last Node of a Doubly Linked List

Problem Statement: Given a Doubly Linked List, delete the last node of the Doubly Linked List.
*/

const { doublyLLCreate } = require("./15_InsertAtHeadDoublyLinkedList")

let head = doublyLLCreate([1, 2, 3, 4, 3, 4])

function deleteNode(head) {
    let current = head;

    if (!current || !current.next) {
        return null
    }

    while (current.next) {
        current = current.next;
    }

    current.prev.next = null;
    current.prev = null;
    return head
}

console.log(deleteNode(head))

