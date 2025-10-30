/*
========================================================
🎯 Functional Requirements (FRs) — YouTube Shorts
========================================================

Overview:
---------
YouTube Shorts is a feature that allows users to create, upload, watch, 
and engage with short-form videos (≤ 60 seconds). 
The system must support video playback, discovery, and engagement 
at massive global scale.

--------------------------------------------------------
📹 Core Video Features
--------------------------------------------------------
1. Upload Short Video:
   - Users can record or upload videos up to 60 seconds.
   - Supports multiple formats (MP4, MOV, WebM).
   - Automatic compression, encoding, and thumbnail generation.
   - Background upload with resumable transfer.

2. Video Playback:
   - Instant start (<1 sec).
   - Adaptive Bitrate Streaming (HLS/DASH).
   - Seamless transitions between Shorts (swipe up/down).
   - Autoplay next Short when current one finishes.

3. Video Navigation:
   - Swipe up/down to move between Shorts.
   - Prefetch next and previous videos for smooth playback.
   - Infinite scroll feed.

--------------------------------------------------------
👥 User Interaction & Engagement
--------------------------------------------------------
1. Like / Dislike:
   - Users can like or dislike videos.
   - Likes/dislikes update asynchronously (optimistic UI).
   - Count visible and stored in Engagement Service.

2. Comment:
   - Users can view and post comments.
   - Nested threads (replies).
   - Real-time comment updates (WebSockets or polling).

3. Share:
   - Users can share Shorts via link or social media.
   - Generate unique tracking links for analytics.

4. Subscribe:
   - Users can subscribe/unsubscribe to a creator channel.
   - Updates personalized feed and notification preferences.

5. Analytics & Feedback:
   - Track views, likes, comments, watch time.
   - Feedback data feeds recommendation algorithms.

--------------------------------------------------------
🎵 Audio / Songs Integration
--------------------------------------------------------
1. Attach Song or Audio:
   - Creators can add licensed audio/music clips to Shorts.
   - Sync playback of video with selected audio.
   - Audio metadata displayed in UI.

2. Discover Shorts by Audio:
   - Users can view all Shorts associated with a specific song.
   - Display “Use this sound” CTA for reuse.

--------------------------------------------------------
🧭 Discovery & Recommendations
--------------------------------------------------------
1. Shorts Feed:
   - Personalized feed powered by ML ranking models.
   - Based on user history, likes, and trends.
   - Supports endless scrolling.

2. Trending / Category Feeds:
   - Region-based trending Shorts.
   - Hashtag or sound-based discovery.

3. Creator Profiles:
   - View all Shorts by a specific creator.
   - Subscribe, comment, and interact directly.

--------------------------------------------------------
🔍 Search & Filtering
--------------------------------------------------------
1. Search for Shorts:
   - Keyword-based search for videos, sounds, or creators.
   - Autocomplete suggestions and filters.

2. Filtering:
   - Filter Shorts by popularity, recency, or category.
   - “Sound”, “Hashtag”, “Creator” filters supported.

--------------------------------------------------------
🧑‍💼 Creator Tools
--------------------------------------------------------
1. Camera and Editor:
   - Built-in editing tools for trimming, adding text, filters.
   - Background music selection, captions, and AR effects.

2. Drafts & Publishing:
   - Save Shorts as drafts.
   - Schedule publishing time.

3. Creator Analytics:
   - Views, likes, retention, engagement rates.
   - Real-time dashboard via Analytics Service.

--------------------------------------------------------
💬 Notifications & Engagement Loops
--------------------------------------------------------
1. Notifications:
   - Push/email notifications for new Shorts by subscribed creators.
   - Alerts for likes, comments, and mentions.

2. Engagement Loops:
   - Encourage continuous user sessions through personalized feed and autoplay.

--------------------------------------------------------
📱 Device Support
--------------------------------------------------------
1. Platforms:
   - Android, iOS, Web, Smart TVs.
   - Consistent UI/UX across devices.

2. Responsiveness:
   - Adaptive layout for vertical viewing experience.
   - Optimized for touch gestures (swipe, tap).

--------------------------------------------------------
🧠 Personalization & ML
--------------------------------------------------------
1. Recommendations Engine:
   - Learns from user behavior (watch history, likes).
   - Real-time feed updates.

2. Content Moderation:
   - ML models detect inappropriate or copyrighted content.
   - Flagged videos go through human review.

========================================================
✅ Summary:
Functional Area | Key Features
-----------------|---------------------------
Video Core | Upload, Playback, Navigation
Engagement | Likes, Comments, Shares, Subscriptions
Discovery | Feed, Recommendations, Hashtags, Sounds
Audio | Attach/Discover Songs
Creator Tools | Editor, Drafts, Analytics
Notifications | Push & Engagement Loops
Search | Keyword, Filter, Trending
Personalization | ML-driven Recommendations
========================================================
*/
