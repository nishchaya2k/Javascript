/*
Windows Update Analogy — Full Flow with Roles

1. Microsoft Publishes an Update:  Publisher / Trigger source
2. Windows Checks for Update and Emits an Event: Event emitter / Publisher
3. System Modules Subscribe to the Event: Listeners / Subscribers, Anyone who subscribed to this event will now be notified, eg. Notification Center etc
4. Unsubscribe (Optional Cleanup): Stop Listening, Maybe the user disabled notifications

*/



class PubSub {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);

        // Return unsubscribe function
        return () => {
            this.events[eventName] = this.events[eventName].filter(fn => fn !== callback)
        }

    }


    publish(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => callback(data))
        }
    }


}

const system = new PubSub();

// Notification Center subscribes
const notificationUnsub = system.subscribe('updateAvailable', (version) => {
    console.log(` Notification Center: Ready to install version ${version}.`);
});


function microsoftReleasesUpdate(version) {
    console.log(` Microsoft released Windows update version ${version}`);
    windowsChecksForUpdate(version);  // Triggers Windows to emit event
}


function windowsChecksForUpdate(version) {
    console.log(' Windows is checking for updates...');
    system.publish('updateAvailable', version);  // Emit the event
}


microsoftReleasesUpdate('11.0.2345');
