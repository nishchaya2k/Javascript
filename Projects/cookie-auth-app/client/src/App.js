import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('john@gmail.com');
  const [password, setPassword] = useState('123456');
  const [message, setMessage] = useState('');
  const [orders, setOrders] = useState([]);

  const login = async () => {
    const res1 = await fetch('https://www.google.com/')
    const res = await fetch('http://localhost:4000/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  const getOrders = async () => {
    const res = await fetch('http://localhost:4000/orders', {
      method: 'GET',
      credentials: 'include',
    });

    const data = await res.json();
    if (res.ok) {
      setOrders(data.orders);
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div>
      <h2>Login to Shopwise</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <br />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
      <br />
      <button onClick={login}>Login</button>
      <button onClick={getOrders}>Fetch Orders</button>
      <p>{message}</p>
      <ul>
        {orders.map((o, i) => <li key={i}>{o}</li>)}
      </ul>
    </div>
  );
}

export default App;

/*

Notes:

- credentials: 'include' means:

  1. Send cookies (like authToken) along with the request even if it’s cross-origin.
     Accept cookies that the server sends and store them in the browser.

  Without it:
  Cookies from localhost:4000 won't be stored or sent when your React app (running on localhost:3000) makes requests.

  The authToken cookie would never reach the client or be sent back in the /orders request.


*/