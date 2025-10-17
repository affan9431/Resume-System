# Resume System

## 🎯 Overview

Welcome to the Resume System—a secure MERN stack application designed to help users build, manage, and share their professional resumes. With robust authentication, encrypted data storage, and a user-friendly interface, this platform ensures your career profile is both impressive and protected.

---

## 🧱 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcrypt
- **Environment Variables**: dotenv
- **Data Validation**: express-validator
- **File Uploads**: multer (for handling resume uploads)

---

## 🚀 Features

- **User Authentication**: Secure login and registration with JWT-based sessions.
- **Profile Management**: Users can create, update, and delete their resume profiles.
- **Resume Upload**: Upload and store resumes in PDF format.
- **Data Validation**: Ensure all inputs are validated and sanitized.
- **Error Handling**: Graceful error messages and status codes for a smooth user experience.

---

## 🛠️ Project Structure
```
/Resume-System
├── /config
│   └── db.js           # Database connection
├── /controllers
│   └── authController.js # Authentication logic
│   └── resumeController.js # Resume CRUD operations
├── /middleware
│   └── authMiddleware.js # JWT verification
├── /models
│   └── User.js         # User schema
│   └── Resume.js       # Resume schema
├── /routes
│   └── authRoutes.js   # Authentication routes
│   └── resumeRoutes.js # Resume routes
├── .env                # Environment variables
├── .gitignore          # Git ignore rules
├── package.json        # Project metadata and dependencies
└── server.js           # Entry point for the application
```


## ⚙️ Setup Instructions

### Clone the repository:

```bash
git clone https://github.com/affan9431/Resume-System.git
cd Resume-System
```


## Install dependencies:
```bash
npm install
```

## Configure environment variables:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## Start the server:

```bash
node server.js
```

### The application will be running on http://localhost:5000

# 🧪 API Endpoints

## Authentication
- POST /api/auth/register : Register a new user.
- POST /api/auth/login : Login and receive a JWT.

## Resumes
- GET /api/resumes : Retrieve all resumes.
- POST /api/resumes : Create a new resume.
- PUT /api/resumes/:id : Update an existing resume.
- DELETE /api/resumes/:id : Delete a resume.

# Note: All resume endpoints require JWT authentication.  







