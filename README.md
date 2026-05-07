# Full Stack Social Media App (MERN)

This is a full stack social media application built using the MERN stack (MongoDB, Express, React, Node.js).  
It is a learning-based project where I implemented core backend and frontend concepts step by step while building a basic Instagram-like system.

---

## 🚀 Features

### 👤 User System
- User Registration
- User Login (JWT Authentication)
- Get logged-in user profile
- Profile page with username, bio, and profile image

### 📝 Posts System
- Create posts (image + caption)
- View global feed (all users posts)
- Posts appear with user info (username + profile image)

### ❤️ Like System
- Like / Unlike posts
- Real-time UI update

### 🔖 Save System
- Save / Unsave posts
- Each user has their own saved posts

### 📄 Feed System
- Global feed shows all posts
- Sorted by latest posts

### 👤 Profile System
- Shows logged-in user details
- Displays saved posts (personal data)
- Individual user experience

---

## 🏗️ Project Structure

### Backend (Node.js + Express)

Organized in MVC pattern:

- `routes/` → API routes
- `controllers/` → business logic
- `models/` → MongoDB schemas
- `middleware/` → authentication and helpers
- `config/` → database connection and setup

---

### Frontend (React)

Structured in layered architecture:

- `ui / components` → reusable UI components
- `hooks/` → custom hooks for logic handling
- `context/state` → global state management
- `services/api` → API calls (axios layer)

---

## 🔄 Application Flow

1. User registers / logs in
2. JWT token is stored and used for authentication
3. Feed loads all posts from all users
4. User can:
   - Like posts
   - Save posts
   - Create new posts
5. Profile page shows:
   - User details
   - Personal saved posts

---

## 🧠 What I Learned

- MERN stack architecture
- REST API design
- JWT authentication
- State management in React
- Context API usage
- Clean frontend layering (UI → Hooks → State → API)
- MongoDB relationships (User ↔ Posts ↔ Saves)
- Populate and relational data handling

---

## ⚙️ Tech Stack

### Frontend
- React
- Context API
- Axios
- SCSS

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication

---

## 📌 Project Type

This is a **learning + practice project** focused on understanding real-world full stack architecture by building a simplified social media platform.

---

## 💡 Future Improvements

- Comments system
- Follow / unfollow users
- Notifications
- Image optimization (Cloud storage)
- Infinite scroll feed
- Better UI animations

---

## 📷 UI Concept

Inspired by Instagram-like social media layout with feed, profile, and saved posts system.

---

## 👨‍💻 Author

Built by a developer learning full stack development step by step through practice projects.
