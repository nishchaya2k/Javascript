/*
Insert at the head of a Linked List for 1D and 2D Array

Problem Statement: Given a linked list and an integer value val, insert a new node with that value at the beginning (before the head) of the list and return the updated linked list.
*/


class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Node2D {
    constructor(data, child = null, next = null) {
        this.data = data;
        this.child = child;
        this.next = next;
    }
}

function llCreate(arr) {
    if (arr.length === 0) return null;

    let head = new Node(arr[0]);
    let temp = head;

    for (let i = 1; i < arr.length; i++) {
        temp.next = new Node(arr[i]);
        temp = temp.next;
    }

    // Print the linked list

    let current = head;
    let output = "";


    while (current) {
        output += current.data + (current.next ? " -> " : " -> null");
        current = current.next;
    }
    // console.log(output);

    return head;
}

function llCreate2D(arr) {
    if (arr.length === 0) return null;
    let curr = null;
    let head = null;

    for (let i = 0; i < arr.length; i++) {
        let currChild = null;
        for (j = 0; j < arr[i].length; j++) {
            if (i == 0 && j == 0) {
                curr = new Node2D(arr[i][j])
                head = curr
                currChild = curr
            } else if (j == 0) {
                curr.next = new Node2D(arr[i][j])
                curr = curr.next;
                currChild = curr
            } else {
                currChild.child = new Node2D(arr[i][j])
                currChild = currChild.child
            }
        }
    }
    // Print the linked list
    // let temp = head;

    // while (temp) {
    //     let curr = temp;
    //     while (curr) {
    //         console.log(curr.data, "|")
    //         curr = curr.child
    //     }
    //     console.log("->")
    //     temp = temp.next;
    // }

    return head;
}

module.exports = { llCreate, llCreate2D };

// Example:
// llCreate([1, 2, 3, 4, 2, 5]);
// llCreate2D([[3], [2, 10], [1, 7, 11, 12], [4, 9], [5, 6, 8]]);
