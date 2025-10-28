/*
- 🔹 Database: (Where you store data permanently)

1. Choose based on data type:
   - SQL (e.g., PostgreSQL) → Structured data (users, comments, likes)
   - NoSQL (e.g., MongoDB) → Flexible data (feeds, messages, media refs)

🔸 Example:
- Users → SQL (id, name, email)
- Messages → NoSQL (senderId, text, timestamp)
- Posts → SQL or NoSQL depending on scale

---

- 🔹 Basic Table Design (Relational):

users(id, username, email, password)
posts(id, user_id, caption, created_at)
likes(id, user_id, post_id)
comments(id, user_id, post_id, comment, created_at)

---

- 🔹 Indexing:

1. Improves query speed.
2. Add indexes to:
   - `user_id` in posts table → get all posts by user
   - `post_id` in comments → fetch comments on a post

---

- 🔹 Caching: (Fast, temporary storage in memory)

1. Reduces load on database.
2. Use Redis or Memcached.
3. Ideal for:
   - Frequently accessed data
   - Slowly changing data

🔸 Example:
- Profile info (bio, follower count)
- Trending posts
- Feed data for homepage

---

- 🔹 Read Flow Example (with cache):

1. User opens profile
2. System checks Redis cache:
   - If data found → return it
   - Else → query DB → save result in cache → return it

🔸 Code (pseudo):
if (cache.has("user:123:profile")) return cache.get();
else {
   const data = db.query("SELECT * FROM users WHERE id = 123");
   cache.set("user:123:profile", data);
   return data;
}

---

- 🔹 Write Flow:

1. Always write to DB first.
2. Then clear or update cache (to avoid stale data).

🔸 Example:
- User updates bio → update DB → invalidate "user:123:profile" cache.

---

- 🔹 When to Cache:

✅ Feeds (for non-logged-in users)
✅ User profiles
✅ Popular posts, reels
✅ Like & comment counts (update periodically)

---

- 🔹 Expiry:

1. Always set expiry time on cache (e.g., 5–10 mins).
2. Avoid using old/stale data.

---

- 🔹 Asynchronous Updates:

1. For expensive updates (e.g., follower count), use background job.
2. Example:
   - Add follower → queue a job to update follower count later.

---

- 🔹 Denormalization (Optional):

1. Duplicate some data to make reads faster.
2. Example:
   - Store `username` in post object (avoid extra join).

---

- 🔹 Summary:

✅ Use SQL for structured data  
✅ Use Redis/Memcached for fast reads  
✅ Cache things users see often  
✅ Invalidate cache on writes  
✅ Use indexes in DB  
✅ Keep cache size + expiry under control
*/
