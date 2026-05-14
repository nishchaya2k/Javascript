/*
Lemonade Change

Problem Statement: Given an array representing a queue of customers and the value of bills they hold, determine if it is possible to provide correct change to each customer. Customers can only pay with 5$, 10$ or 20$ bills and we initially do not have any change at hand. Return true, if it is possible to provide correct change for each customer otherwise return false.
*/

let bills = [5, 5, 5, 10, 20]

function bills_1(bills) {
    let count5 = 0;
    let count10 = 0;

    for (let bill of bills) {

        if (bill === 5) {
            count5++;

        } else if (bill === 10) {
            if (count5 === 0) return false;
            count5--;
            count10++;

        } else { // bill === 20

            if (count10 > 0 && count5 > 0) {
                count10--;
                count5--;
            } else if (count5 >= 3) {
                count5 -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
}

console.log("Change Settle", bills_1(bills))