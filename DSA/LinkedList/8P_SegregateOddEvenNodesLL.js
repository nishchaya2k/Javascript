/*
Segregate odd and even nodes in LL

Given the head of a singly linked list. Group all the nodes with odd indices followed by all the nodes with even indices and return the reordered list.

Consider the 1st node to have index 1 and so on. The relative order of the elements inside the odd and even group must remain the same as the given input.
*/

const { llCreate } = require("./1_InsertAtHeadLinkedList");

let head = llCreate([2, 1, 3, 5, 6, 4, 7]);

//Approach 1, Did for Value, DO for Indeces in 2nd Approach 2
function segregateEvenOdd_1(head) {
    if (!head) return head;

    let dummy = llCreate([-1])
    dummy.next = head;

    let left = dummy;
    let right = dummy;

    while (right && right.next) {
        if (left.next && left.next.data % 2 != 0) {
            left = left.next;
            if (right.next == left) right = right.next
        }

        if (right.next && right.next.data % 2 == 0) {
            right = right.next;
        }

        if (right !== left && right.next && right.next.data % 2 != 0) {

            let temp1 = right.next.next;
            let temp2 = left.next;

            left.next = right.next;
            left = left.next;
            left.next = temp2;
            right.next = temp1
        }

    }

    head = dummy.next;
    return head;
}

console.log("Segregate Even Odd", segregateEvenOdd_1(head))


//Approach 2, Did for Value, DO for Indeces in 2nd Approach 2
function segregateEvenOdd_2(head) {
    if (!head) return head;

    let dummy = llCreate([-1])
    dummy.next = head;

    let left = dummy;
    let right = dummy;

    while (right && right.next) {
        if (left.next && left.next.data % 2 != 0) {
            left = left.next;
            if (right.next == left) right = right.next
        }

        if (right.next && right.next.data % 2 == 0) {
            right = right.next;
        }

        if (right !== left && right.next && right.next.data % 2 != 0) {

            let temp1 = right.next.next;
            let temp2 = left.next;

            left.next = right.next;
            left = left.next;
            left.next = temp2;
            right.next = temp1
        }

    }

    head = dummy.next;
    return head;
}

console.log("Segregate Even Odd", segregateEvenOdd_2(llCreate([2, 1, 3, 5, 6, 4, 7])))