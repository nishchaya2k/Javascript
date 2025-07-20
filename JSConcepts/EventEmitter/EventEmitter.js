/*
- EventEmitter: Its a class which manages the events

1. By using this class we can subscribe the events and trigger/emitt them when they actually happen

2. An emitter object has methods to "emit" (or trigger) named events, and other objects can register functions (listeners or subscribers) to be executed when those specific events are emitted. 

3. Imagine a button click on a webpage. The button could be an emitter, and when clicked, it emits a "click" event. Any part of the application interested in button clicks (like a function that updates a counter) can register as a listener for that "click" event. 

4. Event emitters facilitate asynchronous operations, improve code organization, and make applications more responsive to changes. 

5. An Event Emitter in programming is a mechanism that enables objects to emit (or broadcast) named events and allows other objects or functions to listen for and respond to those events. It's a foundational concept in event-driven programming, commonly used in Node.js applications, but also in other contexts like frontend development with JavaScript

- Breakdown of how it functions:

1. Events: These are signals or named occurrences within an application, like a user clicking a button, a file finishing loading, or a change in application state.

2. Emitters: These are the objects that trigger or "emit" these named events when a specific action or condition occurs.

3. Listeners/Subscribers: These are functions or objects that register interest in particular events. When an event is emitted, all registered listeners are notified and execute their associated callback functions


- Benefits

1. Decoupling: Components can interact without directly referencing each other, making applications more modular and maintainable.

2. Responsiveness: Allows for asynchronous execution, preventing the application from blocking while waiting for events.

3. Scalability: Facilitates building scalable systems where multiple components can react to events independently. 

*/