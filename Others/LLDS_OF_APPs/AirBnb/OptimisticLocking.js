/*

========================================================
OPTIMISTIC LOCKING — COMPLETE NOTES WITH EXPLANATIONS
========================================================


◆ 1. WHAT IS OPTIMISTIC LOCKING
--------------------------------------------------------

- Optimistic Locking is a concurrency control mechanism.

- It prevents race conditions and stale updates
  when multiple requests modify the same database row.

- Instead of locking the row beforehand,
  system assumes conflicts are rare.

- At update time, system checks:
  
  "Did this row change after client read it?"


========================================================
◆ 2. WHY WE NEED IT
========================================================

Suppose:

| roomType | count |
|-----------|-------|
| Deluxe    | 1     |

Two customers try booking same room simultaneously.

Both requests read:

count = 1

Without concurrency control:

- Both think room is available
- Both decrement count
- Overselling happens

This is called:

RACE CONDITION


========================================================
◆ 3. VERSION COLUMN
========================================================

We add:

| roomType | count | version |
|-----------|-------|---------|
| Deluxe    | 1     | 5       |

version is NOT business data.

It only tracks:

"How many times this row changed."


========================================================
◆ 4. FLOW OF OPTIMISTIC LOCKING
========================================================

STEP 1:
Frontend fetches inventory.

Response:

{
  roomType: "Deluxe",
  count: 1,
  version: 5
}

Frontend stores:

version = 5


--------------------------------------------------------

STEP 2:
User clicks BOOK.

Frontend sends:

{
  roomType: "Deluxe",
  version: 5
}


--------------------------------------------------------

STEP 3:
Backend executes query:

UPDATE inventory
SET count = count - 1,
    version = version + 1
WHERE roomType = 'Deluxe'
AND version = 5;


--------------------------------------------------------

CASE 1:
Nobody modified row.

Current DB version = 5

Update succeeds.

DB becomes:

| count | version |
|-------|---------|
| 0     | 6       |


--------------------------------------------------------

CASE 2:
Another customer already booked room.

DB version already became:

version = 6

So:

WHERE version = 5

fails.

Result:

0 rows updated

Backend returns:

"Room already booked"


========================================================
◆ 5. IMPORTANT UNDERSTANDING
========================================================

userId identifies:

"WHICH ROW"

version identifies:

"DID ROW CHANGE AFTER READING?"


========================================================
◆ 6. WHY NOT USE COUNT DIRECTLY
========================================================

We CAN do:

UPDATE inventory
SET count = count - 1
WHERE count > 0;

or:

WHERE count = frontendCount


This can work for inventory systems.

BUT...


========================================================
◆ 7. PROBLEM WITH USING COUNT
========================================================

count is BUSINESS DATA.

Meaning:

- available seats
- stock quantity
- available rooms

Business fields can naturally change.

Using them for locking mixes:

- business logic
- concurrency logic

together.


========================================================
◆ 8. WHY VERSION IS BETTER
========================================================

version is dedicated concurrency metadata.

It works for ANY row:

- inventory
- payments
- orders
- profile updates
- carts
- settings

because it only means:

"row changed"


========================================================
◆ 9. OPTIMISTIC VS PESSIMISTIC LOCKING
========================================================

OPTIMISTIC LOCKING
------------------

- No lock initially
- Faster
- Better scalability
- Detects conflict later
- Retry on failure


PESSIMISTIC LOCKING
-------------------

- Row locked immediately
- Other requests wait
- Safer
- Slower
- Reduced scalability


========================================================
◆ 10. CORE IDEA
========================================================

Optimistic Locking does NOT merge updates.

It simply checks:

"Was this data modified after I read it?"

If YES:
- reject update
- refresh data
- retry transaction


========================================================
◆ 11. COMMON USE CASES
========================================================

- Hotel booking
- Flight seat booking
- Ecommerce inventory
- Ticket booking
- Banking systems
- Payment systems
- Order management


========================================================
◆ 12. MOST IMPORTANT INTERVIEW LINE
========================================================

Optimistic Locking uses a version field
to detect stale writes and concurrent
modifications without locking rows upfront.

========================================================

*/