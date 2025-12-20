// Load environment variables FIRST
require('dotenv').config();

// Import express
const express = require('express');

// Import database connection
const connectDB = require('./config/db');

// Import routes
const logRoutes = require('./routes/logRoutes');
const userRoutes = require('./routes/userRoutes');

// Connect to MongoDB
connectDB();

// Create express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the DevOps Tracker API',
        endpoints: {
            logs: {
                getAllLogs: 'GET /api/logs',
                getOneLog: 'GET /api/logs/:id',
                createLog: 'POST /api/logs',
                updateLog: 'PUT /api/logs/:id',
                deleteLog: 'DELETE /api/logs/:id'
            },
            users: {
                register: 'POST /api/users/register',
                login: 'POST /api/users/login',
                getProfile: 'GET /api/users/profile',
                getAllUsers: 'GET /api/users'
            }
        }
    });
});

// Mount routes
app.use('/api/logs', logRoutes);
app.use('/api/users', userRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
});
