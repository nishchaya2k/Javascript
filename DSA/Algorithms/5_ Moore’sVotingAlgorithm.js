/*
Moore’s Voting Algorithm is used to find the majority element —
an element that appears more than ⌊N/2⌋ times in an array of size N.

arr = [3, 3, 4, 2, 3, 3, 5] → Majority element is 3, since it appears > N/2 times.



- Core Idea (the Intuition)

1. magine you have votes for different candidates —
and you want to find who might be winning, but without counting everyone’s votes upfront., You can do this by a pairwise elimination process.

2. If we cancel out one occurrence of the majority element with one occurrence of any other element,
the majority element will still remain the majority among the remaining ones.


- Algorithm:

1. We maintain: A candidate (potential majority element)
2. A count (its net “vote strength”)
3. We iterate through the array:
4. If the count is 0, we assume the current element as a new candidate.
5. If the current element equals the candidate, increment count (count++).
6. Else, decrement count (count--).
7. Every time you see a different element, you "cancel out" one vote of the current candidate.
8. If the candidate truly is the majority, even after all cancellations, it will survive till the end. (yes, leading Votes will let us know that)



- Summary:

1. In the context of Moore’s Voting Algorithm, “net strength” (or net vote strength) simply means:  The effective lead or advantage a candidate currently holds over all other elements combined.

2. Imagine you have a running election tally, but instead of counting exact votes, you do this:
   - When the candidate gets a vote → +1
   - When any other element appears → –1
   - This +1 / –1 process measures: ➝ How far ahead the candidate is after canceling out all opposing votes.
   - This remaining value is the candidate’s net strength.
   - Net strength = how many more times the candidate has appeared compared to all other elements seen so far (after cancellations).
 
*/

