/*
Reverse Linked List in groups of Size K

Problem Statement: Given the head of a singly linked list containing integers, reverse the nodes of the list in groups of k and return the head of the modified list. If the number of nodes is not a multiple of k, then the remaining nodes at the end should be kept as is and not reversed.
*/

const { llCreate } = require("./1_InsertAtHeadLinkedList");

let head = llCreate([1, 2, 3, 4, 5, 6]), k = 3;

function reverseLink(curr, prev) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
    return { curr, prev };
}   


function reverseLinkedList(head, k) {
    let curr = head, prev = null, i = k;
    let length = 0;

    while (curr) {
        length++;
        curr = curr.next;
    }

    let groups = Math.floor(length / k);
    let leftGroup = (groups * k) !== length;


    if (groups == 0) return head;
    curr = head;

    //separately handled first group, as heads needs to update
    while (i--) {
        ({ curr, prev } = reverseLink(curr, prev));
    }
    groups--;

    let leftGroup_first = head;
    head = prev;

    while (groups > 0) {
        i = k;
        let start = curr;
        while (i--) {
            ({ curr, prev } = reverseLink(curr, prev));
        }
        leftGroup_first.next = prev;
        leftGroup_first = start;
        groups--;
    }

    if (groups == 0 && leftGroup) {
        leftGroup_first.next = curr;
    } else {
        leftGroup_first.next = null;
    }

    while (head) {
        console.log(head.data, "->");
        head = head.next;
    }
}

console.log("Reverse Linked of K Group", reverseLinkedList(head, k))