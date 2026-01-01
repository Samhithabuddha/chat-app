# 💬 Chat Application – React Frontend

A responsive and user-friendly chat application frontend built using **React** and **Chakra UI**, featuring a complete **authentication flow (Signup & Login)**, form validation, and smooth navigation.

---

## 🚀 Features Implemented

- 🔐 User **Signup and Login** functionality
- ✅ Client-side authentication flow
- 🧪 Secure credential handling using browser storage
- 🎨 Modern, responsive UI using Chakra UI
- 👁️ Show / Hide password functionality
- ⚠️ Real-time form validation with toast notifications
- 🧭 Page navigation using React Router
- ♻️ Reusable and well-structured React components

---

## 🛠️ Tech Stack

- **Frontend:** React, JavaScript (ES6+)
- **UI Library:** Chakra UI
- **Routing:** React Router DOM
- **State Management:** React Hooks
- **Auth Handling:** Client-side authentication logic

---

## 📂 Project Structure

```
src/
├── components/
│   └── Authentication/
│       ├── Login.js
│       └── Signup.js
│
├── pages/
│   ├── HomePage.js
│   └── Chats.js
│
├── App.js
├── index.js
```


---

## 🔐 Authentication Logic (Current)

> ⚠️ This project uses **mock authentication** for demonstration purposes.

- Signup stores user data in `localStorage`
- Login validates credentials from `localStorage`
- No backend or database is connected yet

---

## ▶️ How to Run Locally

### 1. Clone the repository
```
git clone https://github.com/your-username/mern-chat-frontend.git
```
### 2. Navigate to the project directory
```
cd mern-chat-frontend

```
### 3. Install dependencies
```
npm install
```
### 4. Start the application
```
npm start
```
### 5. Open in browser
```
http://localhost:3000
```
---
## 🔮 Future Enhancements

- 🔧 Backend with Node.js & Express

- 🗄️ MongoDB for user and chat data

- 🔑 JWT-based authentication

- 💬 Real-time messaging using Socket.IO

- 🖼️ Profile picture upload

- 🔒 Protected routes

