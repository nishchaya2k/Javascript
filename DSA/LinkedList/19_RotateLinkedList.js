/*
Rotate a Linked List

Problem Statement: Given the head of a singly linked list containing integers, shift the elements of the linked list to the right by k places and return the head of the modified list. Do not change the values of the nodes, only change the links between nodes.
 */

const { llCreate } = require("./1_InsertAtHeadLinkedList");

let arr = llCreate([10, 20, 30, 40, 50]);

//Approach 1, Brute Force, TC: O(k*n), SC: O(1)

function rotateLinkedList_1(head, k) {

    if (!head.next) return head;

    while (k--) {
        let current = head;
        let prev = head

        while (current.next) {
            current = current.next;
            if (!current.next) {
                current.next = head;
                prev.next = null;
                head = current
                break;
            }
            prev = prev.next;
        }
    }

    return head;

}

console.log("Rotate Linked List", rotateLinkedList_1(arr, 4))

//Approach 2, Optimized, TC: O(n), SC: O(1)
function rotateLinkedList_2(head, k) {

    if (!head.next) return head;

    let length = 0, tail = null, curr = head;

    while (curr) {
        if (!curr.next) tail = curr;
        curr = curr.next;
        length++;
    }

    curr = head;
    let kStart = length - (k % length);
    if (kStart == length) return head

    while (kStart--) {
        prev = curr
        curr = curr.next;
    }

    prev.next = null;
    tail.next = head;
    head = curr;

    return head;

}

console.log("Rotate Linked List", rotateLinkedList_2(llCreate([10, 20, 30, 40, 50, 60]), 90))