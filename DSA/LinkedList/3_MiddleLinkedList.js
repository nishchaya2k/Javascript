const { llCreate } = require("./1_InsertAtHeadLinkedList");

let head = llCreate([1, 2, 3])

//Approch 1, Brute Force, TC: O(n)

function findMiddleElement1(head) {

    let current = head;
    let count = 0;

    while (current) {
        count++;
        current = current.next;
    }

    let middle = Math.floor(count / 2);

    while (middle--) {
        head = head.next;
    }

    return head.data
}

console.log("Middle of LL", findMiddleElement1(head))


//Approach 2, Optimize, TC: O(n)

function findMiddleElement2(head) {

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.data;
}

console.log("Middle of LL", findMiddleElement2(head))
