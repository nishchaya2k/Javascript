/*
==============================================================================
                    MUTATION OBSERVER - COMPLETE NOTES
==============================================================================

◆ 1. WHAT IS MUTATION OBSERVER?
------------------------------------------------------------------------------

Definition

- MutationObserver is a built-in JavaScript API.
- It watches the DOM for changes (mutations).
- Whenever the observed DOM changes, the browser automatically
  executes a callback.
- It follows an event-driven approach.
- It replaces the older DOM Mutation Events.

------------------------------------------------------------------------------
Guard Analogy
------------------------------------------------------------------------------

Imagine a security guard inside a shopping mall.

Without MutationObserver

The guard walks through every floor every few seconds asking:

- Did someone enter?
- Did someone leave?
- Did anything change?

Even if nothing changes, he keeps checking.

This is similar to using:

- setInterval()
- setTimeout()

to repeatedly inspect the DOM.

With MutationObserver

Instead of walking everywhere,
sensors are installed on every entrance.

Whenever someone enters or exits:

Door Sensor
     │
     ▼
Security Guard Gets Alert
     │
     ▼
Guard Takes Action

The guard reacts only when something changes.

MutationObserver behaves exactly the same.

DOM Changes
     │
     ▼
Browser Detects Mutation
     │
     ▼
Callback Executes


◆ 2. WHY DO WE NEED IT?
------------------------------------------------------------------------------

Without MutationObserver

- Continuous polling
- Higher CPU usage
- Poor performance
- Wasted work

With MutationObserver

- Browser detects DOM changes.
- Callback executes only when needed.
- Better performance.


◆ 3. BASIC FLOW
------------------------------------------------------------------------------

Create Observer
      │
      ▼
observe()
      │
      ▼
Browser Watches DOM
      │
      ▼
DOM Changes
      │
      ▼
MutationRecord Created
      │
      ▼
Array Of Records
      │
      ▼
Callback Executes


◆ 4. BASIC SYNTAX
------------------------------------------------------------------------------

new MutationObserver(callback)

observer.observe(target, config)

Where

callback
- Runs whenever mutations occur.

target
- DOM node to observe.

config
- Specifies which mutations to observe.


◆ 5. WHY DOES CALLBACK RECEIVE AN ARRAY?
------------------------------------------------------------------------------

Browser batches multiple DOM changes together.

Example

User types:

Hello

Browser may create

entries

├── MutationRecord
├── MutationRecord
└── MutationRecord

instead of calling callback multiple times.

Hence

entries.forEach(...)


◆ 6. TYPES OF MUTATIONS
------------------------------------------------------------------------------

childList

- Child added
- Child removed

--------------------------------

attributes

- class
- id
- style
- src
- href
- disabled

--------------------------------

characterData

- Text Node changes


◆ 7. subtree
------------------------------------------------------------------------------

Default

Observe only target node.

subtree: true

Observe

- Children
- Grandchildren
- Every descendant


◆ 8. CONFIG OPTIONS
------------------------------------------------------------------------------

childList

Observe child add/remove.

--------------------------------

attributes

Observe attribute changes.

--------------------------------

characterData

Observe text node changes.

--------------------------------

subtree

Observe entire descendant tree.

--------------------------------

attributeFilter

Observe only selected attributes.

--------------------------------

attributeOldValue

Store previous attribute value.

--------------------------------

characterDataOldValue

Store previous text value.


◆ 9. MutationRecord
------------------------------------------------------------------------------

Useful Properties

type

target

addedNodes

removedNodes

attributeName

oldValue


◆ 10. METHODS
------------------------------------------------------------------------------

observe()

Start observing.

--------------------------------

disconnect()

Stop observing.

--------------------------------

takeRecords()

Returns pending MutationRecords.


◆ 11. INTERVIEW POINTS
------------------------------------------------------------------------------

✓ Watches DOM mutations.

✓ Better than polling.

✓ Callback receives array.

✓ Browser batches mutations.

✓ childList

✓ attributes

✓ characterData

✓ subtree

✓ disconnect()

✓ takeRecords()

==============================================================================
*/