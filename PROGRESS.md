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

## Day 2 - 19 Dec 2025

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

## Day 3 - 20 Dec 2025 

### Backend Progress (User Authentication)
- [x] Installed authentication packages: bcryptjs, jsonwebtoken
- [x] Created User model (name, email, password, role)
- [x] Implemented Auth Routes:
  - POST /api/users/register - Register new user
  - POST /api/users/login - Login and get JWT token
  - GET /api/users/profile - Get user profile (Protected route)
- [x] Created Authentication Middleware (auth.js):
  - Validates JWT tokens in request headers
  - Protects routes from unauthorized access
- [x] Implemented Security Features:
  - Password hashing with bcrypt before saving
  - JWT token generation upon login/register
  - Protected Log API endpoints (CRUD operations now require login)
- [x] Updated server.js to mount user routes

### What I learned today
- How to implement JWT (JSON Web Token) authentication
- Password hashing using bcryptjs middleware in Mongoose
- Protecting Express routes using custom middleware
- Bearer token authentication flow
- Handling HTTP headers for Authorization

### Tomorrow's goal
- Frontend integration (React/Next.js)
- Build Login/Register UI
- Connect Frontend to Backend APIs



