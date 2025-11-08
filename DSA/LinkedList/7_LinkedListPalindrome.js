/*
Check if the given Linked List is Palindrome
*/

const { llCreate } = require("./1_InsertAtHeadLinkedList");

let head = llCreate([1, 2, 2, 1])

//Approach 1, Brute Force, TC: O(n), SC: O(n)

function PalindromeLL1(head) {
    let temp = [];
    let current = head;

    while (current) {
        temp.push(current.data)
        current = current.next;
    }

    let n = temp.length - 1;
    while (head) {
        if (head.data !== temp[n]) return false
        head = head.next;
        n--;
    }
    return true;
}

// console.log("is Palindrome", PalindromeLL1(head))


//Approach 2, Optimized, TC: O(n), SC: O(1)
function PalindromeLL2(head) {
    let current = head;
    let length = 0;

    while (current) {
        current = current.next;
        length += 1;
    }

    let mid = (length % 2) == 0 ? (Math.floor(length / 2) + 1) : (Math.ceil(length / 2) + 1)

    current = head;
    let prev = null;
    let next = null;
    let tail = null;

    while (mid > 1) {
        tail = current
        current = current.next;
        mid--;
    }

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }


    tail.next = prev;
    tail = tail.next;

    while (tail && tail.data == head.data) {
        tail = tail.next;
        head = head.next;
    }


    return tail == null ? true : false;
}


// console.log("is Palindrome", PalindromeLL2(head))



//Approach 3, Optimized, TC: O(n), SC: O(1), Using Slow and Fast Pointer
function PalindromeLL3(head) {
    let current = head;
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    if (fast) { //odd length of node
        slow = slow.next;
    }

    current = slow;
    let prev = null;
    let next = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    current = prev;


    while (current && current.data == head.data) {
        current = current.next;
        head = head.next;
    }


    return current == null ? true : false;
}


console.log("is Palindrome", PalindromeLL3(head))