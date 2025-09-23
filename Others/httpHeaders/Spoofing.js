/*
- 🔹 Spoofing:

1. What is it?
   - Spoofing means **faking HTTP headers** (like User-Agent, Referer, etc.) to pretend to be a different user, device, or browser.

2. How it works:
   - Since HTTP headers are **client-controlled**, attackers can manually set them.
   - Servers may read these headers to make decisions (device type, region, source, etc.).
   - Spoofing tricks the server by **lying** through those headers.

3. Real Life:
   - Like someone wearing a police uniform to skip security — the clothes (headers) are fake, but people may still trust them.

4. Common Spoofed Headers:
   - `User-Agent` → Pretend to be a mobile device or specific browser.
   - `Referer` → Fake the source website of a request.
   - `Accept-Language` → Pretend to be from a different region.
   - `Cookie` → Steal someone’s session (if exposed).

5. Real-World Examples:

   - Ad Fraud:
     - A bot sends:
         User-Agent: Mozilla/5.0 (iPhone ...)
     -> Tricks the ad platform into thinking a **real mobile user** saw an ad.
     -> Fraudsters earn money by faking ad impressions.

   - Price Manipulation:
     - An attacker spoofs:
         Referer: https://trusted-partner.com
     -> Triggers **special affiliate pricing** or discounts.

   - Geo Bypass:
     - Spoofing:
         Accept-Language: en-US
     -> Access **region-locked content**, like streaming libraries or pricing.

   - Scraping:
     - Bots spoof:
         User-Agent, Referer, Cookie
     -> Makes them look like real users and avoid **bot detection**.

6. Why it’s a problem:
   - Headers are **not trustworthy by default**.
   - Spoofing can cause:
     - Analytics corruption
     - Revenue loss
     - Bypassed access controls
     - Fake traffic and abuse

7. Detection & Defense:
   - Use fingerprinting (screen size, JS behavior)  
   - Log inconsistencies (e.g., User-Agent vs. actual device)  
   - Combine with rate limits and CAPTCHAs  
   - Never rely solely on headers for security or decisions

8. Key Point:
   - Any header sent by the client can be faked.
   - Always validate or verify sensitive behavior on the **server side**.
*/
