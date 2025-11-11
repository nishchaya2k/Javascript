/*
Segregate odd and even nodes in LL

Given the head of a singly linked list. Group all the nodes with odd indices followed by all the nodes with even indices and return the reordered list.

Consider the 1st node to have index 1 and so on. The relative order of the elements inside the odd and even group must remain the same as the given input.
*/

const { llCreate } = require("./1_InsertAtHeadLinkedList");

let head = llCreate([1, 2, 3, 4]);


function segregateEvenOdd(head) {
    if (!head) return head;

    let dummy = llCreate([-1])
    dummy.next = head;

    let left = head;
    let right = head.next;

    let prevL = dummy;
    let prevR = head;


    while (right) {

        let isLeftEven = ((left.data % 2) == 0);
        let isRightOdd = ((right.data % 2) != 0);


        if (isLeftEven && !isRightOdd) { //both even
            left = left.next;
            right = right.next;

            prevL = prevL.next
            prevR = prevR.next
        }

        else if (!isLeftEven && !isRightOdd) { //left odd, right even
            console.log("left:", left, "right:",right)

            prevL.next = right;
            prevR.next = left;

            let temp = right.next;
            right.next = left.next;
            left.next = temp.next;
        
            temp = right;
            right = left;
            left = temp
            
            left = left.next;
            right = right.next;

            prevL = prevL.next
            prevR = prevR.next
        }

        else if (isLeftEven && isRightOdd) { // left even, right odd
            right = right.next
            left = left.next;

            prevL = prevL.next
            prevR = prevR.next
        }
        else if (isRightOdd) { // right odd
            right = right.next; 
            prevR = prevR.next
        }
    }
    // console.log(head)

    return head;
}

console.log("Segregate Even Odd", segregateEvenOdd(head))