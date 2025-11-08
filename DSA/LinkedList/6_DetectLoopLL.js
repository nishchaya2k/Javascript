/*
Detect a loop in LL
Given the head of a singly linked list. Return true if a loop exists in the linked list or return false.



A loop exists in a linked list if some node in the list can be reached again by continuously following the next pointer.
*/


//Apprach 1, Brute Force, Hashing(store visited nodes)
//Approach 2, Optimize, 

function findCycle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast == slow) {
            return true;
        }
    }

    return false;
}

console.log("is Cycle Exists", findCycle(head))

