/*
==================== HEAP ====================

1. PATTERN RECOGNITION

- K largest/smallest
- Top K
- Closest K
- Minimum/maximum repeatedly
- Priority
- Stream of numbers
- Merge K sorted arrays/lists
- Task scheduling
- Continuously updating min/max
- Need best element repeatedly
- Dynamic ordering
- Online processing

=> THINK HEAP

INTERVIEW HACK:
If sorting every time feels expensive,
heap is probably intended.

------------------------------------------------

2. WHEN TO USE HEAP?

- Repeated min/max
- Need fast insert + delete
- Streaming data
- Dynamic ordering
- Priority processing
- Continuously changing data
- Need partial sorting
- Need efficient retrieval of best element

------------------------------------------------

3. HEAP CORE IDEA

- Heap gives PARTIAL ordering
- Top element always reliable
- Remaining elements NOT sorted

MIN HEAP:
- Smallest at top

MAX HEAP:
- Largest at top

IMPORTANT:
Heap != fully sorted array

------------------------------------------------

4. TIME COMPLEXITIES

- Insert -> O(log n)
- Delete -> O(log n)
- Peek -> O(1)
- Build Heap -> O(n)

WHY O(log n)?
- Heap height = log n

------------------------------------------------

5. TOP K PATTERN

- K largest -> Min Heap
- K smallest -> Max Heap

WHY?
- Keep only useful K elements

FLOW:
- Push element
- If size > K
    remove top

QUESTIONS:
- Kth Largest
- Top K Frequent
- K Closest Points
- K Closest Numbers
- K Largest Elements

IMPORTANT:
Top K is one of the MOST common heap patterns.

------------------------------------------------

6. MERGE K SORTED PATTERN

- Keep K elements in heap
- O(N log K)

WHY?
- Need smallest among K lists repeatedly

FLOW:
- Put first element of all lists
- Remove smallest
- Insert next from same list

QUESTIONS:
- Merge K Sorted Lists
- Merge K Sorted Arrays
- Smallest Range Covering K Lists

------------------------------------------------

7. MEDIAN PATTERN

- Two Heaps
- Max Heap -> left side
- Min Heap -> right side

WHY?
- Need middle efficiently

RULE:
- Left side stores smaller half
- Right side stores larger half

QUESTIONS:
- Median From Data Stream
- Sliding Window Median

IMPORTANT:
Very common Google-level pattern.

------------------------------------------------

8. PRIORITY PATTERN

USED IN:
- Scheduling
- Twitter Feed
- Task Processing
- CPU Scheduling
- Event Systems

WHY?
- Need highest priority quickly

IMPORTANT:
Heap is basically Priority Queue internally.

------------------------------------------------

9. FREQUENCY + HEAP

FLOW:
- Build frequency map
- Push into heap
- Extract useful elements

QUESTIONS:
- Top K Frequent Elements
- Sort Characters By Frequency
- Reorganize String

IMPORTANT:
HashMap + Heap is VERY common.

------------------------------------------------

10. GREEDY + HEAP

WHY?
- Greedy often needs best element repeatedly

QUESTIONS:
- IPO
- Task Scheduler
- Minimum Cost To Connect Sticks

IMPORTANT:
Google problems often combine Greedy + Heap.

------------------------------------------------

11. GRAPH + HEAP

WHY?
- Need smallest distance repeatedly

QUESTIONS:
- Dijkstra Algorithm
- Network Delay Time

IMPORTANT:
Graph + Min Heap is VERY important.

------------------------------------------------

12. SLIDING WINDOW + HEAP

WHY?
- Window changes dynamically
- Need efficient min/max/median

QUESTIONS:
- Sliding Window Median
- Sliding Window Maximum

IMPORTANT:
Hard pattern.
Very common in top companies.

------------------------------------------------

13. COMMON MISTAKES

- Heap array != sorted
- Wrong heap choice
- Forget heap size control
- Forget re-heapify
- Using sorting instead of heap
- Forget balancing in two heaps

------------------------------------------------

14. IMPORTANT OBSERVATIONS

- Heap is better than sorting repeatedly
- Heap is efficient for dynamic data
- Heap works best when only top element matters
- Heap is NOT good for full ordering
- Heap internally uses array
- Heap height always log n

------------------------------------------------

15. GOOGLE-LEVEL IMPORTANT QUESTIONS

- Kth Largest Element
- Top K Frequent Elements
- Merge K Sorted Lists
- Median From Data Stream
- Sliding Window Median
- IPO
- Task Scheduler
- Reorganize String
- Dijkstra Algorithm
- Smallest Range Covering K Lists

------------------------------------------------

16. FINAL INTERVIEW THINKING FLOW

Question ->
Pattern Recognition ->
Why Heap? ->
Min or Max Heap? ->
Fixed Size or Dynamic? ->
Need One Heap or Two Heaps? ->
Code

================================================
*/