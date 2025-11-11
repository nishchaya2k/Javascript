/*
Remove Nth node from the back of the LL


Given the head of a singly linked list and an integer n. Remove the nth node from the back of the linked List and return the head of the modified list. The value of n will always be less than or equal to the number of nodes in the linked list.
*/

const { llCreate } = require("./1_InsertAtHeadLinkedList")

let head = llCreate([1, 2, 3, 4, 5, 6])


//Approach 1, Brute Force

function removeNthNode1(head, target) {
    let current = head
    let length = 0;

    while (current && current.next) {
        current = current.next.next;
        length += 2;
    }

    if (current) length += 1;

    if (target == length) {
        head = head.next;
        return head;
    }

    target = length - target;
    current = head

    while (target > 1) { //4,3,2,1
        current = current.next;
        target--;
    }

    current.next = current.next.next;

    return head
}

console.log("Remove Nth Node", removeNthNode1(head, 2))



//Approach 2, Optimize

function removeNthNode2(head, target) {
    let dummy = llCreate([0]);
    dummy.next = head;

    let slow = dummy;
    let fast = dummy;

    for (let i = 0; i <= target; i++) {
        fast = fast.next;
    }

    while (fast) {
        slow = slow.next;
        fast = fast.next
    }

    slow.next = slow.next.next;

    return dummy.next
}

console.log("Remove Nth Node", removeNthNode2(llCreate([1, 2, 3, 4, 5, 6]), 2))