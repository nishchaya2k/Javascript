/*
Add two numbers represented as Linked Lists

Problem Statement: Given the heads of two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
*/

const { llCreate } = require("./1_InsertAtHeadLinkedList")

let ll1 = llCreate([1, 8])
let ll2 = llCreate([0])


//Approach 1, inplace Addition
function addTwoNumbers(ll1, ll2) {
    let head = ll2;
    let carry = 0;

    while (ll1 || ll2) {

        let sum = ((ll1?.data || 0) + (ll2?.data || 0) + carry);

        carry = Math.floor(sum / 10);

        if (ll1) ll1 = ll1.next;

        if (ll2) {
            if ((!ll2.next && (ll1 || carry))) {
                let newNode = llCreate([0])
                ll2.next = newNode
            }
            ll2.data = sum % 10;
            ll2 = ll2.next;

        }
    }


    while (head) {
        console.log(head.data);
        head = head.next
    }
    return head
}

console.log("Add Two Numbers", addTwoNumbers(ll1, ll2))