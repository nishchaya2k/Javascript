/*
- Why Offset Fails with Changing Data

1. You fetched:
GET -> /posts?limit=2&offset=0 -> returns [A, B]

2. Now, someone adds new post X at the top:
X, A, B, C, D

3. Now you request:
GET -> /posts?limit=2&offset=2 -> skips 2 -> [B, C]


Observation: B appears again, because now A is at offset 1 and B is at offset 2.



- Why Cursor Works Better
1. First request returns [A, B], and gives cursor = B.id
GET -> /posts?limit=2&cursor=B.id -> returns [C, D]


- Where does cursor = B.id come from?
1. Backend gives it explicitly in the response (recommended)
2. Or the frontend extracts it from the last item (not reliable)


*/