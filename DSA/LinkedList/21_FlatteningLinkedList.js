/*
Flattening a Linked List

Problem Statement: Given a linked list containing ‘N’ head nodes where every node in the linked list contains two pointers:

‘Next’ points to the next node in the list
‘Child’ pointer to a linked list where the current node is the head

Each of these child linked lists is in sorted order and connected by a 'child' pointer. Your task is to flatten this linked list such that all nodes appear in a single layer or level in a 'sorted order'.
*/

const { llCreate2D } = require("./1_InsertAtHeadLinkedList");

let arr = [[3], [2, 10], [1, 7, 11, 12], [4, 9], [5, 6, 8]];
let head = null



function sortList(curr1, curr2) {
    let dummy = { child: null };
    let tail = dummy;

    while (curr1 && curr2) {
        if (curr1.data <= curr2.data) {
            tail.child = curr1;
            curr1 = curr1.child;
        } else {
            tail.child = curr2;
            curr2 = curr2.child;
        }
        tail = tail.child;
        tail.next = null; // important: next must die
    }

    tail.child = curr1 ? curr1 : curr2;
    return dummy.child;
}



// Approach 1, TC: O(N x 2M), SC:O(1)
function flatteningLL_1(head) {

    head = llCreate2D(arr);
    if (!head || !head.next) return head;

    let curr = head;
    let runner = head.next;   // 👈 NEW pointer

    while (runner) {
        let next = runner.next;
        curr = sortList(curr, runner);
        runner = next;
    }

    // preserve result
    let result = curr;

    while (curr) {
        console.log(curr.data, "->");
        curr = curr.child;
    }

    return result;
}


console.log("flattening", flatteningLL_1(head))


//Start debugging from start, by consoling
