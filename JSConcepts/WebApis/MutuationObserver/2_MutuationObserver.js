/*
==============================================================================
              MUTATION OBSERVER - REAL LIFE USE CASES
==============================================================================

◆ 1. CHAT APPLICATION
------------------------------------------------------------------------------

Problem

New messages are inserted dynamically.

Without MutationObserver

We repeatedly check whether a new message exists.

With MutationObserver

Whenever a new message is added,

↓

Automatically

- Scroll to latest message
- Highlight message
- Play notification sound


==============================================================================
◆ 2. NOTIFICATION PANEL
------------------------------------------------------------------------------

Problem

Notifications arrive at random times.

MutationObserver detects

↓

New notification added

↓

Update notification badge

Example

Bell (3)

↓

Bell (4)


==============================================================================
◆ 3. INFINITE SCROLL
------------------------------------------------------------------------------

Problem

As user scrolls,

new cards are inserted into DOM.

MutationObserver detects

↓

New cards added

↓

Apply

- Animation
- Lazy loading
- Event listeners


==============================================================================
◆ 4. THIRD-PARTY LIBRARIES
------------------------------------------------------------------------------

Problem

Another library inserts

- Modal
- Tooltip
- Dropdown

Your code doesn't know when.

MutationObserver detects

↓

Initialize your own functionality.


==============================================================================
◆ 5. BROWSER EXTENSIONS
------------------------------------------------------------------------------

Example

- Grammarly
- Dark Reader

These extensions don't own the website.

Instead,

they watch the DOM.

Whenever a new input field appears,

↓

Inject grammar checker.

Whenever a new element appears,

↓

Apply dark theme.


==============================================================================
◆ 6. AUTO INITIALIZE COMPONENTS
------------------------------------------------------------------------------

Suppose

New Button

↓

Added dynamically.

MutationObserver detects

↓

Automatically

- Attach click event
- Attach tooltip
- Attach validation


==============================================================================
◆ 7. ANALYTICS
------------------------------------------------------------------------------

Whenever

- Popup opens
- Banner appears
- Advertisement loads

MutationObserver detects

↓

Send analytics event.


==============================================================================
◆ 8. LIVE DASHBOARD
------------------------------------------------------------------------------

Stock Market

Price

₹120

↓

₹123

↓

MutationObserver detects

↓

Update graph

↓

Animate value

↓

Highlight increase


==============================================================================
◆ 9. AUTO SAVE EDITORS
------------------------------------------------------------------------------

Example

Notion

Google Docs

Whenever editor content changes,

↓

MutationObserver detects

↓

Auto-save content.


==============================================================================
◆ 10. REACT / ANGULAR / VUE INTEGRATION
------------------------------------------------------------------------------

Sometimes third-party plugins modify the DOM directly.

MutationObserver can detect

↓

DOM updated

↓

Synchronize your own logic.


==============================================================================
Interview Summary
==============================================================================

Whenever someone says

"I need to know whenever the DOM changes."

Think

MutationObserver.

==============================================================================
*/