// server.js

// 1. Import Express
const express = require('express');

// 2. Create an Express application
const app = express();

// 3. Define the port number
const PORT = 3000;

// 4. Create a test route
app.get('/', (req, res) => {
    res.send('🚀 Server is running! Welcome to Developer Journey Tracker!');
});

// 5. Start the server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
