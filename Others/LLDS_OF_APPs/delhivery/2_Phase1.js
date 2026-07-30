/*
PHASE 1 – STEP 1: DELHIVERY PROBLEM & CORE MODEL

- Delhivery is a logistics orchestration system, not instant delivery
- Core problem: move millions of parcels reliably over days
- System is event-driven, not real-time

KEY DIFFERENCE FROM FOOD DELIVERY
- No continuous GPS tracking
- No live rider movement
- Updates happen only on confirmed events

CORE MENTAL MODEL
- Shipment is a state machine
- Each movement creates a discrete event
- Frontend always shows last confirmed state

SHIPMENT LIFECYCLE (HIGH LEVEL)
- Shipment created
- Pickup
- Origin hub
- Sorting
- Line haul
- Destination hub
- Out for delivery
- Delivered / Failed / RTO

FRONTEND IMPLICATIONS
- UI is state-based, not animation-based
- Polling preferred over WebSockets
- History & timestamps are more important than current position
- Must handle delayed or missing updates gracefully

KEY INSIGHT
- Delhivery is not a tracking app
- It is an event aggregation and state management system
*/
