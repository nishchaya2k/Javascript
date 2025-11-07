/*
Problem Statement: Problem Statement: Given the head of a singly linked list, write a program to reverse the linked list, and return the head pointer to the reversed list.
*/
const { llCreate } = require("./1_InsertAtHeadLinkedList")

let head = llCreate([1, 3, 4, 3, 2, 5, 6])

//Approach 1, Recursive
function reverseLL1(head) {

    function recursivelyReverse(prev, current) {
        if (!current) return prev;

        const next = current.next;
        current.next = prev;

        return recursivelyReverse(current, next)
    }

    head = recursivelyReverse(null, head)
    let output = "";
    while (head) {
        output += head.data + (head.next ? "-> " : "-> null")
        head = head.next
    }
    return output;
}

console.log("reverseLL", reverseLL1(head))

