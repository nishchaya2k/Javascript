/*
====================================================
AUTHORIZATION — COMPLETE DEVELOPER NOTES
====================================================

🔷 1. WHAT IS AUTHORIZATION
----------------------------------------------------
Authorization is the process of deciding:

"What is this authenticated user allowed to do?"

Authentication answers:
- Who are you?

Authorization answers:
- What can you access?
- What actions are you allowed to perform?

----------------------------------------------------
🔷 2. AUTHENTICATION VS AUTHORIZATION
----------------------------------------------------
Authentication:
- Verifies identity
- Example: login, JWT validation

Authorization:
- Verifies permissions
- Example: admin vs user access

Rule:
Authorization ALWAYS comes AFTER authentication.

----------------------------------------------------
🔷 3. WHY AUTHORIZATION IS NEEDED
----------------------------------------------------
Without authorization:
- Any logged-in user could access any resource
- Security rules cannot be enforced
- Data leaks and privilege escalation occur

Authorization ensures:
- Least privilege access
- Controlled actions
- Role-based or policy-based access

----------------------------------------------------
🔷 4. WHERE AUTHORIZATION HAPPENS
----------------------------------------------------
Authorization is enforced at:
1. Backend APIs (most important)
2. Middleware / guards
3. Sometimes frontend (only for UX, not security)

Backend is the source of truth.

----------------------------------------------------
🔷 5. HOW AUTHORIZATION WORKS WITH JWT
----------------------------------------------------
Flow:
1. User logs in → gets JWT
2. JWT is verified (authentication)
3. Payload is read (userId, role, permissions)
4. Server checks access rules
5. Request is allowed or denied

Authorization decisions are made using JWT payload data.

----------------------------------------------------
🔷 6. AUTHORIZATION DATA IN JWT
----------------------------------------------------
JWT payload may contain:
- role (admin, user, manager)
- permissions (read, write, delete)
- scopes (OAuth style)

Important:
JWT payload is trusted ONLY after signature verification.

----------------------------------------------------
🔷 7. ROLE-BASED AUTHORIZATION (RBAC)
----------------------------------------------------
Access is based on user role.

Examples:
- admin → full access
- user → limited access
- guest → read-only

Rule:
If role does not match → deny access.

----------------------------------------------------
🔷 8. PERMISSION-BASED AUTHORIZATION
----------------------------------------------------
Access is based on specific actions.

Examples:
- can_create_user
- can_delete_order
- can_view_reports

More granular and flexible than roles.

----------------------------------------------------
🔷 9. POLICY-BASED AUTHORIZATION
----------------------------------------------------
Access depends on conditions.

Examples:
- User can edit ONLY their own data
- Access allowed only during business hours
- Access allowed only from certain regions

Uses dynamic rules instead of fixed roles.

----------------------------------------------------
🔷 10. AUTHORIZATION DECISION FLOW
----------------------------------------------------
1. Verify JWT signature
2. Extract payload
3. Identify role / permissions
4. Match against required access
5. Allow or reject request

If authentication fails → reject
If authorization fails → reject

----------------------------------------------------
🔷 11. WHAT AUTHORIZATION IS NOT
----------------------------------------------------
Authorization:
- Does NOT identify the user
- Does NOT validate JWT signature
- Does NOT encrypt data

It ONLY decides access.

----------------------------------------------------
🔷 12. FRONTEND AUTHORIZATION
----------------------------------------------------
Frontend may:
- Hide buttons
- Disable actions
- Redirect users

But:
Frontend checks are NOT secure.
Backend must always enforce authorization.

----------------------------------------------------
🔷 13. COMMON AUTHORIZATION FAILURES
----------------------------------------------------
1. Trusting frontend checks
2. Missing role checks on APIs
3. Overloading JWT with too much data
4. Not rechecking authorization on every request

----------------------------------------------------
🔷 14. DEVELOPER TAKEAWAYS
----------------------------------------------------
1. Authentication proves identity
2. Authorization controls access
3. Authorization happens after authentication
4. JWT payload helps make authorization decisions
5. Backend is the authority
6. Roles, permissions, and policies define access

----------------------------------------------------
🔷 15. ONE-LINE SUMMARY
----------------------------------------------------
Authentication says "who you are",
Authorization says "what you can do".

====================================================
END OF AUTHORIZATION NOTES
====================================================
*/
