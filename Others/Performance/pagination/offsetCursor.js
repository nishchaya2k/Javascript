/*
- Offset: When data is not changing frequently

- Cursor: When data changes often (like social media feeds, chat messages, comments),
          and you want stable, consistent pagination without missing or repeating items.

Example:

Initial data: A, B, C, D
Request 2 posts → returns: [A, B]

Now someone adds a new post X at the top.

New data: X, A, B, C, D

Offset Pagination:
  - Page 1: offset = 0 → [A, B]
  - Page 2: offset = 2 → [B, C]
  - B is shown again (duplicate), or in some cases skipped

Cursor Pagination:
  - Page 1: cursor = null → [A, B], last item ID = B
  - Page 2: cursor = B → [C, D]
  - You continue from where you left off, no duplicate, no skip
*/


/*
- Doubt: When data is changing in real time, and we update it live, will offset pagination also update correctly?


- it should, bcoz react polling concept we have, will lead to update data on screen, & keep the things in sync again
*/

























/*
No — offset pagination doesn't update correctly in real-time when new data is added or removed, because it's based on a shifting index.
*/