/*
Insert at the head of a Linked List

Problem Statement: Given a linked list and an integer value val, insert a new node with that value at the beginning (before the head) of the list and return the updated linked list.
*/


class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

function doublyLLCreate(arr) {
    if (arr.length === 0) return null;

    let head = new Node(arr[0]);
    let temp = head;
    let prev = null

    for (let i = 1; i < arr.length; i++) {
        temp.next = new Node(arr[i]);
        temp.next.prev = temp;
        prev = temp
        temp = temp.next;
    }

    // Print the linked list
    return head;
}
module.exports = { doublyLLCreate };
// Example:
// llCreate([1, 2, 3, 4, 2, 5]);
