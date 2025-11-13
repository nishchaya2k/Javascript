/*
Add 1 to a number represented by LL

Problem Statement: Given the head of a singly linked list representing a positive integer number. Each node of the linked list represents a digit of the number, with the 1st node containing the leftmost digit of the number and so on. The task is to add one to the value represented by the linked list and return the head of a linked list containing the final value.

The number will contain no leading zeroes except when the value represented is zero itself.
*/

const { llCreate } = require("./1_InsertAtHeadLinkedList");

let head = llCreate([9, 9, 9]);

//Approach 1, Brute Force, (Could cause issue, as type mismatch)
function addANumber1(head) {
    let curr = head;
    let num = ''
    while (curr) {
        num += curr.data;
        curr = curr.next;
    }

    let sum = String(BigInt(num) + BigInt(1))
    let isLengthChanged = sum.length > num.length ? true : false;

    let dummy = llCreate([sum[0]]);
    dummy.next = head;
    let i = 0;
    if (isLengthChanged) {
        i = 1;
    }

    curr = head;
    while (curr) {
        curr.data = sum[i]
        curr = curr.next;
        i++;
    }
    return isLengthChanged == true ? dummy : head
}

console.log("Add a Number", addANumber1(head))


function reverseLL(head) {

    function reverse(curr, prev) {
        if (!curr) return prev;

        let next = curr.next
        curr.next = prev
        return reverse(next, curr)
    }
    return reverse(head, null)
}


//Approach 2, Brute Force, By Reversing LL, TC: O(3n) = O(n)
function addANumber2(head) {
    let curr = reverseLL(head)
    let temp = curr;


    let carry = 0

    while (curr) {
        let sum = curr.data + carry;

        curr.data = sum % 10;
        carry = Math.floor(sum / 10);

        if (!curr.next) {
            let newNode = llCreate([carry]);
            curr.next = newNode;
            curr = curr.next;
        }
        curr = curr.next;
    }

    return reverseLL(temp)
}

console.log("Add a Number", addANumber2(llCreate([1, 2, 3, 4])))



//Approach 3, Brute Force, By Reversing LL, TC: O(3n) = O(n)
function addANumber3(head) {
    let curr = head;
    let carry = { value: 1 }

    function add1(curr, carry) {
        //base case
        if (!curr) return;

        add1(curr.next, carry); //null - current, 
        let sum = curr.data + carry.value;
        curr.data = sum % 10;
        carry.value = Math.floor(sum / 10);
    }

    add1(curr, carry)

    if (carry.value > 0) {
        let newNode = llCreate([carry.value]);
        newNode.next = curr
        curr = newNode
    }
    while (curr) {
        console.log("v",curr.data)
        curr = curr.next;
    }

    return curr
}

console.log("Add a Number", addANumber3(llCreate([9])))