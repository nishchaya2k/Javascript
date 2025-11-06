/*
Create a Linked List from an array
*/

class Node {
    constructor(data, next = null) {
        this.data = data;
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

    let current = head.next;
    head = null;

    let output = "";
    let count = 0;
    let search = 4;
    let isTargetPresent = false

    while (current) {
        output += current.data + (current.next ? " -> " : " -> null");
        count++;
        if (current.data = search) isTargetPresent = true
        current = current.next;
    }
    console.log(output, count, isTargetPresent);

    return head;
}

// Example:
llCreate([1, 2, 3, 4, 2, 5]);
