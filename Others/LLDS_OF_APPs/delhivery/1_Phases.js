/*
SYSTEM DESIGN NOTES — DELHIVERY (LOGISTICS PLATFORM)

PHASE 1: DOMAIN & BASICS
- Understand what Delhivery solves (logistics, not instant delivery)
- Learn core logistics concepts (shipment, hub, leg, manifest)
- Identify actors (customer, ops, delivery partner)
- High-level system flow (no tech yet)

PHASE 2: FRONTEND ARCHITECTURE
- Different frontend apps (tracking, ops dashboard, delivery app)
- Page flows & user journeys
- Component structure & module separation
- State management strategy (local vs global)
- Handling large tables, filters, pagination

PHASE 3: API & DATA FLOW
- Shipment lifecycle APIs
- How frontend consumes shipment status
- Polling vs events (why polling is common)
- Handling delayed / inconsistent data
- Error handling & retries

PHASE 4: SCALE & PERFORMANCE
- Millions of shipments handling
- Frontend performance optimization
- Caching & stale data strategy
- Pagination vs infinite scroll
- Offline-first strategy (delivery app)

PHASE 5: ADVANCED & INTERVIEW DEPTH
- Real-time tracking (limited scope)
- Proof of delivery uploads (images, OTP)
- Security & role-based access
- Audit logs & traceability
- Trade-offs & design decisions
*/
