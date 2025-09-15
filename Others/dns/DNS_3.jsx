/*
- 🔹 Breakdown of: www.google.com/subfolder?a=2&b=3#footer

1. https:// -> Protocol -> Communication method
2. www.google.com -> Website's domain name -> Domain / Host
3. /subfolder -> Specific resource or folder -> Path
4. ?a=2&b=3 -> Parameters passed to the server -> Query String
5. #footer -> Specific part of the page (used in frontend only) -> Fragment / Hash



- 🔹 Protocol: https://

1. Stands for HyperText Transfer Protocol Secure.
2. Tells the browser to use HTTPS to communicate securely (encrypted).
3. Common values: http://, https://, ftp://

- 🔹 Domain (Host): www.google.com

1. The domain name (converted to IP using DNS)
2. www is a subdomain.
3. google.com is the registered domain.

- 🔹 Path: /subfolder

1. Refers to a specific resource or folder on the server.
2. Often maps to a route handled by a server (e.g., /products, /login, etc.).
3. Note: It doesn't have to be a real folder — could be handled by backend routing logic.

- 🔹 Query String: ?a=2&b=3

1. Begins with a ?.
2. Contains key-value pairs, separated by &.
3. Used to send data to the server (GET parameters).


- 🔹 Fragment / Hash: #footer

1. Starts with #
2. Refers to an anchor or element ID on the page (used by browser).
3. Used only on the client side, not sent to the server.
4. Common in single-page applications (SPAs) for navigation.


*/