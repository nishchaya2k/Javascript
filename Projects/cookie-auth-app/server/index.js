import express from 'express';
import { WebSocketServer } from 'ws'
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
const port = 4000;

// Login route - sets cookie
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'john@gmail.com' && password === '123456') {
        res.cookie('authToken', 'dummy_token', {
            httpOnly: true,
            sameSite: 'Lax',
            maxAge: 3600000, // 1 hour
        });
        return res.status(300).json({ message: 'Login successful' });
    }
    res.setHeader('access-control-allow-origin', '*')
    res.setHeader('x-powered-by', '')
    res.status(401).json({ message: 'Invalid credentials' });
});

// Protected route - requires cookie
app.get('/orders', (req, res) => {
    console.log('logs141', req.cookies);

    if (req.cookies.authToken === 'dummy_token') {
        return res.json({ orders: ['Order 1', 'Order 2'] });
    }
    res.status(401).json({ message: 'Unauthorized' });
});

const server = app.listen(port, () => console.log('Server running on http://localhost:4000'));

const wss = new WebSocketServer({ server })
wss.on("connection", (ws) => {
    ws.on("message", (data) => {
        console.log("Data from client", data)
        ws.send("Sent")
    })
})


/*
Summary

1. express -> Framework to build the server and routes.

2. cookie-parser -> Middleware to parse cookies from the request.

3. cors -> Allows your frontend (probably on `http://localhost:3000`) to talk to this backend

4. const app = express(); -> You create an Express app, which is your server instance. This app will handle requests.

5. app.use(express.json()); -> Enables the server to read **JSON data** from the request body.
 Without this, `req.body` would be `undefined`.

6. app.use(cookieParser()); -> This middleware parses cookies in incoming requests and populates req.cookies.

7. app.use(cors({ origin: 'http://localhost:3000', credentials: true })); -> This tells the server:  Allow requests from `http://localhost:3000` (your React app) , Accept **cookies** from cross-origin requests (`credentials: true` is required for that)

8. app.post('/login', (req, res) => {const { email, password } = req.body; -> When a client (like your React app) sends a POST request with an email & password, Express reads them from req.body.
 

9. credentials: 'include' -> This tells the browser to send cookies with cross-origin requests.

If it's missing, the browser won't accept the Set-Cookie header, even if credentials: 'include' is set on the frontend.

*/