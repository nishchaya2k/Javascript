/*
Navigator: The navigator object in JavaScript is a built-in object that provides information about the user's web browser and its capabilities. It is a property of the window object and can be accessed as window.navigator or simply navigator

-  Properties:

Navigator – Useful Features for Frontend Developers (Complete Notes)

1. Browser / OS / Device Detection
- navigator.userAgentData, navigator.userAgent, navigator.platform
- Detects browser type, OS, mobile/desktop, touch support (navigator.maxTouchPoints)
- Helps handle browser-specific bugs and adjust UI for different devices

2. Online / Offline Status
- navigator.onLine, "online"/"offline" events
- Detect when user loses connection
- Helps show offline banners, queue requests, enable offline mode in PWAs

3. Service Workers
- navigator.serviceWorker
- Enables offline caching, background sync, push notifications, faster loads
- Core for building Progressive Web Apps (PWA)

4. Permissions API
- navigator.permissions.query()
- Check permissions for camera, mic, notifications, clipboard, geolocation, etc.
- Helps show permission prompts only when needed and improve UX

5. Clipboard API
- navigator.clipboard.read(), write(), writeText()
- Enables copy/paste features
- Useful for "Copy" buttons and rich clipboard interactions

6. Battery API (limited support)
- navigator.getBattery()
- Access battery level and charging status
- Helps reduce heavy tasks or animations when battery is low

7. Device Hardware Info
- navigator.hardwareConcurrency (CPU cores)
- navigator.deviceMemory (RAM)
- navigator.maxTouchPoints (touch support)
- Helps optimize performance based on device capabilities

8. Language & Region Info
- navigator.language, navigator.languages
- Detect user’s preferred language
- Helps with internationalization and auto-language selection

9. Geolocation API
- navigator.geolocation.getCurrentPosition()
- Get user’s location (with permission)
- Useful for maps, location-based suggestions, delivery zones

10. Web Share API
- navigator.share()
- Opens native share sheet on mobile (share text, links, images)
- Useful for sharing articles, posts, and app data easily

11. Web Bluetooth API
- navigator.bluetooth.requestDevice()
- Connect to Bluetooth devices (IoT, fitness devices, sensors)
- Useful for advanced hardware integrations

12. Web USB API
- navigator.usb.requestDevice()
- Communicate with USB devices (printers, barcode scanners, POS devices)

13. Serial API
- navigator.serial.requestPort()
- Communicate with serial devices (Arduino, microcontrollers, hardware tools)

14. Media Devices (Camera & Microphone)
- navigator.mediaDevices.getUserMedia()
- navigator.mediaDevices.enumerateDevices()
- Access camera/mic; useful for video apps, QR scanners, audio recording


etc...

Summary:
- navigator provides powerful access to browser, device, permissions, connectivity, and hardware.
- Helps frontend developers build smarter, offline-ready, device-aware, user-friendly web apps.

*/