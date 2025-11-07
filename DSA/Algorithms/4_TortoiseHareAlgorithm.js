const { llCreate } = require("../LinkedList/1_InsertAtHeadLinkedList");

let head = llCreate([1, 2, 3])

function findMiddleElement(head) {

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.data;
}

console.log("Middle of LL", findMiddleElement(head))
