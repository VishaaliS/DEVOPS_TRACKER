# Project DevLog

## Day 1 - 18 Dec 2025

### Backend Progress
- [x] Initialized Node.js project
- [x] Created Express server
- [x] Built GET and POST APIs
- [x] Tested APIs using Thunder Client

### What I learned today
- How Express routing works
- Difference between GET and POST
- How middleware handles requests

### Tomorrow's goal
- Connect MongoDB
- Create User schema

---

## Day 2 - 20 Dec 2025

### Backend Progress
- [x] Connected to MongoDB Atlas cloud database
- [x] Created Log schema with Mongoose (action, message, level, createdAt)
- [x] Completed full CRUD API endpoints:
  - GET /api/logs - Get all logs
  - GET /api/logs/:id - Get single log
  - POST /api/logs - Create new log
  - PUT /api/logs/:id - Update log
  - DELETE /api/logs/:id - Delete log
- [x] Tested all API endpoints using curl
- [x] Fixed port conflict (changed from 5000 to 3000 due to macOS AirPlay)
- [x] Created comprehensive README.md documentation

### What I learned today
- How to connect Express to MongoDB Atlas
- Mongoose schema definition and validation
- RESTful API design patterns
- Environment variables with dotenv
- macOS uses port 5000 for AirPlay Receiver

### Tomorrow's goal
- Add authentication (JWT)
- Create User schema and login/register endpoints

---

## Day 2 - 20 Dec 2025 (Part 2)

### Project: User Authentication
- [x] Install new packages: bcryptjs, jsonwebtoken
- [x] Create models/User.js (name, email, password, role)
- [x] Create routes/userRoutes.js:
  - POST /api/users/register - Create new user
  - POST /api/users/login - Login and get token
  - GET /api/users/profile - Get user profile (Protected)
- [x] Create middleware/auth.js:
  - Validate JWT token
  - Protect routes
- [x] Password hashing with bcrypt
- [x] JWT token generation
- [x] Update server.js to use new routes
- [x] Protect log routes (only logged-in users can access)


