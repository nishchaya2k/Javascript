/*

==============================================================
WEB CRAWLERS + SEO + SITEMAP — DETAILED NOTES
PART 1
==============================================================


💡 1. BASIC REAL ANALOGY
==============================================================

Website = A Shop
Web Pages = Different Rooms/Sections inside Shop
Web Crawler = Delivery Guy / Robot Explorer
Search Engine = Google’s Brain storing shop information
SEO = Making shop easy to find and attractive
Sitemap = A map given to delivery guy
robots.txt = Rules/instructions for delivery guy


COMPLETE FLOW:

You create shop
      ↓
Give map (sitemap.xml)
      ↓
Give rules (robots.txt)
      ↓
Delivery guy explores shop
      ↓
Google stores shop info
      ↓
SEO improves visibility
      ↓
Users discover shop



--------------------------------------------------------------
🔷 2. WHAT IS A WEB CRAWLER
--------------------------------------------------------------

A Web Crawler is a bot/program that automatically explores websites.

Other Names:
- Spider
- Bot
- Googlebot


PURPOSE:
- Discover pages
- Read content
- Follow links
- Send information to search engine



REAL ANALOGY:

Suppose Google sends a delivery guy to explore shops.

The delivery guy:
- enters shop
- checks rooms
- reads labels
- follows directions
- notes important information

That delivery guy is a Web Crawler.



FLOW:

Crawler visits homepage
        ↓
Reads HTML/content
        ↓
Finds links
        ↓
Visits more pages
        ↓
Collects information
        ↓
Sends data to Google



IMPORTANT:

If one page has NO links,
crawler may never discover it.


Same like:
If one room has no path,
delivery guy may never reach there.



--------------------------------------------------------------
🔷 3. WHAT IS A SEARCH ENGINE
--------------------------------------------------------------

Search Engine stores information collected by crawlers.


REAL ANALOGY:

Search Engine =
Google’s giant brain/database.


It stores:
- shop names
- products
- popularity
- reviews
- categories


When user searches:
"Best React Course"

Google checks stored information
and shows best results.



3 MAJOR PHASES:

------------------------------------------------
(A) CRAWLING
------------------------------------------------

Bots discover websites/pages.

------------------------------------------------
(B) INDEXING
------------------------------------------------

Google stores page data.

------------------------------------------------
(C) RANKING
------------------------------------------------

Google decides best pages for search.



FLOW:

Website
   ↓
Crawler
   ↓
Google Index
   ↓
Ranking
   ↓
Search Results



--------------------------------------------------------------
🔷 4. WHAT IS SEO
--------------------------------------------------------------

SEO = Search Engine Optimization


MEANING:

Making website/shop better so Google recommends it.



REAL ANALOGY:

Suppose there are many shops.

Google wants to recommend:
- best shop
- trusted shop
- easy to visit shop
- popular shop

SEO means:
making your shop better so it appears first.



GOOD SEO MEANS:
- clear labels
- easy navigation
- fast service
- good structure
- quality content



GOAL:

Better SEO
    ↓
Higher Ranking
    ↓
More Visitors
    ↓
More Traffic



--------------------------------------------------------------
🔷 5. TYPES OF SEO
--------------------------------------------------------------

------------------------------------------------
(A) ON-PAGE SEO
------------------------------------------------

Optimization INSIDE website.


Examples:
- Proper headings
- Good content
- Keywords
- Meta tags
- Semantic HTML


REAL ANALOGY:

Improving things INSIDE shop.


------------------------------------------------
(B) OFF-PAGE SEO
------------------------------------------------

Optimization OUTSIDE website.


Examples:
- Backlinks
- Mentions
- Social sharing


REAL ANALOGY:

Other people recommending your shop.


------------------------------------------------
(C) TECHNICAL SEO
------------------------------------------------

Technical improvements.


Examples:
- sitemap.xml
- robots.txt
- Fast loading
- Mobile friendly
- SSR


REAL ANALOGY:

Making shop easy for delivery guy to explore.



--------------------------------------------------------------
🔷 6. WHAT IS SITEMAP.XML
--------------------------------------------------------------

A sitemap is a file containing important page URLs.


Usually:

sitemap.xml



REAL ANALOGY:

Sitemap =
Map given to delivery guy.


Instead of randomly exploring,
delivery guy gets complete shop map.



EXAMPLE:

<urlset>
   <url>
      <loc>https://mysite.com/about</loc>
   </url>

   <url>
      <loc>https://mysite.com/blog</loc>
   </url>
</urlset>



WITHOUT SITEMAP:

Crawler discovers pages slowly.


WITH SITEMAP:

Crawler gets direct list of pages.



BEST FOR:
- Large websites
- React SPAs
- New websites
- Deep pages



--------------------------------------------------------------
🔷 7. WHAT IS ROBOTS.TXT
--------------------------------------------------------------

robots.txt gives rules to crawlers.


REAL ANALOGY:

robots.txt =
Instructions given to delivery guy.


Example:
"Do not enter private rooms."



EXAMPLE:

User-agent: *
Disallow: /admin
Allow: /
Sitemap: https://mysite.com/sitemap.xml



MEANING:

User-agent: *
→ rules for all crawlers

Disallow: /admin
→ crawler cannot access admin area

Allow: /
→ other pages allowed

Sitemap:
→ location of sitemap.xml



--------------------------------------------------------------
🔷 8. RELATION BETWEEN ROBOTS.TXT & SITEMAP
--------------------------------------------------------------

robots.txt can contain sitemap URL.


FLOW:

Crawler visits website
       ↓
Checks robots.txt
       ↓
Gets rules/permissions
       ↓
Finds sitemap
       ↓
Discovers pages
       ↓
Indexes pages



--------------------------------------------------------------
🔷 9. WHY HTML IS IMPORTANT FOR SEO
--------------------------------------------------------------

Crawlers mainly understand:
HTML


GOOD:

<h1>Learn React</h1>


BAD:

<div>Learn React</div>



Semantic HTML helps crawler understand page structure.


IMPORTANT TAGS:
- h1
- h2
- article
- section
- nav
- title
- meta



--------------------------------------------------------------
🔷 10. WHAT IS INDEXING
--------------------------------------------------------------

Indexing means:

Google stores webpage information inside database.


NOT ALL pages get indexed.


Google may reject pages because:
- duplicate content
- poor quality
- blocked by robots.txt
- noindex meta tag



--------------------------------------------------------------
🔷 11. WHAT IS RANKING
--------------------------------------------------------------

After indexing,
Google ranks pages.


Ranking depends on:
- content quality
- keywords
- website speed
- mobile friendly
- backlinks
- SEO structure
- user experience



==============================================================
END OF PART 1
==============================================================
*/




/*

Both web crawlers (like Googlebot) and web browsers (like Chrome, Safari, or Firefox) act as clients. They both send HTTP requests to web servers and download the data (HTML, CSS, JavaScript) that the server returns.

Here is how they compare:

Web Browser: An interactive client. It receives raw code, renders it visually, and relies on a human user to click links and navigate pages

Web Crawler: An automated client. It does not have a screen to render pages. Instead, it downloads the code, reads the text, extracts hyperlinks to discover new pages, and indexes the content for search engines.In short, while a browser is designed for human interaction, a crawler is designed for automated data processing.
 */