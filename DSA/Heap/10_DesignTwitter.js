/*
Design Twitter

Problem Statement: Create a simplified version of a social media platform similar to Twitter. Users should be able to post tweets, follow or unfollow other users, and view the 10 most recent tweets in their news feed.

Implement the Twitter class as follows:

Twitter(): Initializes the Twitter object.

void postTweet(int userId, int tweetId): Composes a new tweet with ID tweetId by the user userId. All tweetIds will be unique.

List<Integer> getNewsFeed(int userId): Retrieves the 10 most recent tweet IDs in the user's news feed. The news feed should only show posts from users the user follows or from the user themself, with tweets arranged from most recent to least recent.

void follow(int followerId, int followeeId): The user with ID followerId 
started following the user with ID followeeId.
Input will be given such that followerId is not already following followeeId at the time of function call.

void unfollow(int followerId, int followeeId): The user with ID followerId unfollowed the user with ID followeeId. Input will be given such that followerId is following followeeId at the time of function call.
*/

//Approach 1

class MinHeap {

    constructor() {
        this.h = [];
    }

    left(i) {
        return (2 * i) + 1;
    }

    right(i) {
        return (2 * i) + 2;
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    insert(tweet) {
        this.h.push(tweet);
        this.bubbleUp(this.h.length - 1);
    }

    bubbleUp(i) {

        while (
            i > 0 &&
            this.h[i].timestamp < this.h[this.parent(i)].timestamp
        ) {

            let p = this.parent(i);

            [this.h[i], this.h[p]] =
                [this.h[p], this.h[i]];

            i = p;
        }
    }

    bubbleDown(i) {

        let n = this.h.length;

        while (true) {

            let smallest = i;

            let l = this.left(i);
            let r = this.right(i);

            if (
                l < n &&
                this.h[l].timestamp <
                this.h[smallest].timestamp
            ) {
                smallest = l;
            }

            if (
                r < n &&
                this.h[r].timestamp <
                this.h[smallest].timestamp
            ) {
                smallest = r;
            }

            if (smallest === i) break;

            [this.h[i], this.h[smallest]] =
                [this.h[smallest], this.h[i]];

            i = smallest;
        }
    }

    extractMin() {

        if (this.h.length === 0) return null;

        if (this.h.length === 1) {
            return this.h.pop();
        }

        let min = this.h[0];

        this.h[0] = this.h.pop();

        this.bubbleDown(0);

        return min;
    }

    getMin() {
        return this.h[0];
    }

    size() {
        return this.h.length;
    }
}

class Twitter {

    static recentCount = 10;

    constructor() {
        this.users = {};
        this.tweets = {};
        this.time = 0;
    }

    checkFollower(userId, followeeId) {
        return this.users[userId]?.followIds.includes(followeeId);
    }

    addUser(userId) {

        if (!this.users[userId]) {

            this.users[userId] = {
                tweetIds: [],
                followIds: []
            };
        }
    }

    postTweet(userId, tweetId) {

        this.addUser(userId);

        this.users[userId].tweetIds.push(tweetId);

        this.tweets[tweetId] = {
            timestamp: this.time++,
            text: ""
        };
    }

    follow(followerId, followeeId) {

        this.addUser(followerId);
        this.addUser(followeeId);

        if (!this.checkFollower(followerId, followeeId)) {

            this.users[followerId]
                .followIds
                .push(followeeId);
        }
    }

    unFollow(followerId, followeeId) {

        if (this.checkFollower(followerId, followeeId)) {

            this.users[followerId].followIds =
                this.users[followerId].followIds.filter(
                    (id) => id !== followeeId
                );
        }
    }

    tenMostRecent(userId) {

        if (!this.users[userId]) return [];

        let heap = new MinHeap();

        let allUsers = [
            userId,
            ...(this.users[userId]?.followIds || [])
        ];

        for (let uid of allUsers) {

            let tweets =
                this.users[uid]?.tweetIds || [];

            for (let tid of tweets) {

                heap.insert({
                    tweetId: tid,
                    timestamp: this.tweets[tid].timestamp
                });

                if (
                    heap.size() >
                    Twitter.recentCount
                ) {
                    heap.extractMin();
                }
            }
        }

        return heap.h
            .sort(
                (a, b) =>
                    b.timestamp - a.timestamp
            )
            .map(
                (tweet) => tweet.tweetId
            );
    }
}

let t1 = new Twitter(1);
t1.postTweet(1, 'tid1')


//Approach 2

class Solution {
    constructor() {
        // Map userId -> list of [time, tweetId]
        this.tweets = new Map();
        // Map userId -> set of followees
        this.following = new Map();
        // Global time counter
        this.time = 0;
    }

    postTweet(userId, tweetId) {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }
        this.tweets.get(userId).push([this.time++, tweetId]);
    }

    getNewsFeed(userId) {
        let allTweets = [];

        // Add own tweets
        if (this.tweets.has(userId)) {
            allTweets.push(...this.tweets.get(userId));
        }

        // Add tweets from followees
        if (this.following.has(userId)) {
            for (let followee of this.following.get(userId)) {
                if (this.tweets.has(followee)) {
                    allTweets.push(...this.tweets.get(followee));
                }
            }
        }

        // Sort tweets by time descending and get top 10
        allTweets.sort((a, b) => b[0] - a[0]);

        return allTweets.slice(0, 10).map(x => x[1]);
    }

    follow(followerId, followeeId) {
        if (!this.following.has(followerId)) {
            this.following.set(followerId, new Set());
        }
        this.following.get(followerId).add(followeeId);
    }

    unfollow(followerId, followeeId) {
        if (this.following.has(followerId)) {
            this.following.get(followerId).delete(followeeId);
        }
    }
}

// Driver code
let twitter = new Solution();
twitter.postTweet(1, 2);
twitter.postTweet(2, 6);
console.log(twitter.getNewsFeed(1)); // [2]
twitter.follow(1, 2);
console.log(twitter.getNewsFeed(1)); // [6, 2]
twitter.unfollow(1, 2);
twitter.postTweet(1, 7);
console.log(twitter.getNewsFeed(1)); // [7, 2]