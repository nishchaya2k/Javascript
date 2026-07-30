/*
PHASE 1 – STEP 2: SHIPMENT LIFECYCLE (DEEP DIVE)

- Shipment is a long-living entity, not a one-time transaction
- Identified by a unique tracking ID (AWB)
- Evolves over days with multiple state changes

STATUS VS SUB-STATUS
- Status: high-level, customer-friendly (In Transit, Delivered, Exception)
- Sub-status: operational, detailed (At hub, Line haul dispatched, Delivery failed)
- Frontend decides what to expose based on user role

STATE MACHINE CONCEPT
- Shipment follows valid state transitions
- Cannot jump between unrelated states
- Ensures data consistency and predictable UI

EVENT-DRIVEN MODEL
- Real-world actions create events
- Events update shipment state
- Each event includes time, location, actor, metadata
- Frontend never sets state, only renders it

TIMELINE-BASED TRACKING
- System shows last confirmed event
- No continuous real-time location
- UI focuses on status history with timestamps

FAILURES ARE NORMAL
- Delays, retries, and exceptions are expected
- Includes failed pickups, failed deliveries, RTO
- Frontend must communicate failures clearly and accurately

KEY INSIGHT
- Shipment lifecycle is about tracking certainty, not guessing movement
- Frontend shows verified facts, not assumptions
*/
