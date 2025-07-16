/*.  ...........Debouncing Vs Throttling...........



- Debouncing: (Wait until user stops acting, then respond)

1. Best for: input fields, search, resize, filters, etc.
2. Google Search – Suggestions show after user stops typing
3. Amazon Filters – Price sliders or brand filters apply after input settles
4. LinkedIn Search Bar – Delays fetching results until typing stops
5. Netflix Search – Shows suggestions after pause, not every keystroke
6. Flipkart Product Filters – Debounced filter application
7. Twitter Mentions – Autocomplete triggers after you stop typing @
8. Notion – Auto-save happens after typing stops
9. Medium Editor – Word count or suggestions update after typing pause
10.Zomato Search – Debounced restaurant suggestions based on input
11.Gmail Compose – Auto-save draft after typing pauses


- Throttling: (Limit how often a function runs)
1. Meta Facebook Feed – Infinite scroll API triggers once per few seconds
2. YouTube Comments – Load more comments on scroll, throttled
3. Instagram Reels Scroll – Loads next chunk with scroll throttling
4. Canva Resize Events – Throttled UI update when window resizes
5. Twitter Timeline – Updates tweets once every few seconds


-->Use debounce for: search, form auto-save, text input, resize end, filter apply
-->Use throttle for: scroll, resize, drag, mousemove, analytics ping




*/