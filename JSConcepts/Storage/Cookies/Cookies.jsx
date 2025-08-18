/* 
Cookies: A cookie (also known as a web cookie or browser cookie) is a small piece of data a server sends to a user's web browser. The browser may store cookies, create new cookies, modify existing ones, and send them back to the same server with later requests. Cookies enable web applications to store limited amounts of data and remember state information; by default the HTTP protocol is stateless.

Cookies play a significant role in web development, enabling developers to store and manage user data on the client-side. These small pieces of data, stored as key-value pairs, facilitate user authentication, session management, and personalized experiences. In this article, we’ll dive into the world of cookies in JavaScript, exploring their purpose, creation, manipulation, and security considerations.

Cookies are small pieces of data stored on a user’s web browser. They are used to remember stateful information (such as items added in the shopping cart in an online store) or to record the user’s browsing activity (like recording which pages were visited in the past).


- There are different types of cookies:

1. Session cookies: Temporary cookies that expire once you close your browser. They are used to track user activity during a single session like e-com websites use session cookies to track users’ shopping cart items as they browse different pages of the site.

2. Persistent cookies: These remain on your device for a set period specified in the cookie. They are used to remember your preferences like news websites use persistent cookies to store preferred language, region, or layout settings.

3. Third-party cookies: Placed by a website other than the one you are currently visiting, these are often used for advertising and tracking across multiple websites. Ever searched for Ipad on Amazon and started seeing ads on other websites? That’s third party cookies


- Advantages of Cookies:

1. Session Management: Cookies are commonly used for session management. They allow websites to recognize users and maintain their login state across different pages or visits.

2. Personalization: Cookies enable websites to remember user preferences, such as language settings, theme choices, and customized content, enhancing the user experience.

3. Tracking and analytics: Websites use cookies to gather data about user behavior, such as the pages visited, time spent on the site, and interaction with content. This information helps website owners understand how users interact with their site, allowing for improvements and more targeted content or advertisements.


4. Shopping Carts and E-commerce: Cookies are often used to store information about items in a user’s shopping cart, making the online shopping experience seamless and user-friendly.

5. Targeted Advertising: Cookies play a role in targeted advertising by tracking users’ interests and behaviors. This allows advertisers to deliver more relevant ads to specific user segments.

6. Cross-Site Requests: Cookies facilitate communication between different web pages or domains, enabling the sharing of information across sites, which can be useful for various functionalities.


- Disadvantages of Cookies:

1. Privacy Concerns: Cookies can be seen as an invasion of privacy because they track user behavior. Users may be uncomfortable with the idea of websites collecting and storing data about their activities.

2. Security Risks: Cookies are susceptible to theft or exploitation, leading to security risks. For example, if an attacker gains access to a user’s cookies, they may impersonate the user or access sensitive information.

3. Limited Storage: Cookies have size limitations (usually around 4 KB), which can be a constraint when trying to store large amounts of data. For extensive data storage, alternative mechanisms like Web Storage or IndexedDB may be more suitable.

4. Cross-Site Scripting (XSS) Vulnerabilities: Cookies can be vulnerable to XSS attacks where malicious scripts inject unauthorized content into web pages, potentially compromising the integrity of cookies and user data.

5. Cross-Site Request Forgery (CSRF) Vulnerabilities: Cookies can be exploited in CSRF attacks, where an attacker tricks a user’s browser into performing actions on a website without the user’s consent.

6. User Control: Users may not have complete control over cookies, and managing them might be challenging for non-technical users. This lack of transparency can contribute to privacy concerns.

7. Browsers are generally limited to a maximum number of cookies per domain (varies by browser, generally in the hundreds), and a maximum size per cookie (usually 4KB). Storage APIs can store larger amounts of data.

8.Cookies are sent with every request, so they can worsen performance (for example on slow mobile data connections), especially if you have a lot of cookies set.

*/


/*

- Cookies vs Local Storage: Cookies and local storage are both used to store data on the client’s side in web applications, but they serve different purposes and have different characteristics:

1. Storage Size: Local storage can hold more data compared to cookies.
2. Lifespan: Cookies can be set to expire; local storage data stays until it is cleared.
3. Server Interaction: Cookies are sent with every request to the server, whereas local storage data stays on the client-side.
4. Scope: Cookies are accessible by both client and server; local storage is strictly client-side.


In summary, cookies are better suited for smaller amounts of data that need to be sent to the server with each request, while local storage is more appropriate for storing larger amounts of data that don’t need to be sent to the server and should persist beyond the session.

*/