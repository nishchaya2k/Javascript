/*
Find intersection of Two Linked Lists

Problem Statement: Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
*/
const { llCreate } = require("./1_InsertAtHeadLinkedList")

let l1 = llCreate([4, 1, 8, 4, 5])
let l2 = llCreate([5, 6, 1, 8, 4, 5])

//Approach 1, run 2 loops nested check for each node wether its a intersection or not
//Approach 2, use a visited array to track nodes & then if matches will ans


//Approach 3, Optimized
function intersection_3(l1, l2) {

    let head1 = headA;
    let head2 = headB;
    let count = 0;

    while (head1 && head2) {
        head1 = head1.next;
        head2 = head2.next;
    }


    if (head1) {
        while (head1) {
            head1 = head1.next;
            count++
        }
        head1 = headA
        head2 = headB
    }

    else {
        while (head2) {
            head2 = head2.next;
            count++
        }
        head1 = headB
        head2 = headA
    }



    while (count--) {
        head1 = head1.next;
    }


    while (head1 && head2) {
        if (head1 == head2) return head1

        head1 = head1.next
        head2 = head2.next
    }

    return null
}

console.log("Intersection of Linked List", intersection_3(l1, l2))