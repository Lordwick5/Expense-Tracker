# Expense Tracker Frontend

A modern React application for managing personal expenses. Users can securely register, log in, and manage their own expenses through a REST API provided by the backend.

## Features

- 🔐 User registration and login
- 🔑 JWT-based authentication
- 👁️ Password visibility toggle
- 🛡️ Protected routes
- 💰 Add, edit, and delete expenses
- ✅ Form validation using React Hook Form and Zod
- 📱 Responsive user interface

---

## Tech Stack

- React
- Vite
- React Router
- Axios
- React Hook Form
- Zod
- Lucide React

---

## Project Structure

```
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── errorboundary.jsx
│   ├── home.jsx
│   ├── loginform.jsx
│   ├── register.jsx
│   ├── main.jsx
│   └── ...
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm
- Running Expense Tracker Backend

### Clone the repository

```bash
git clone https://github.com/Lordwick5/Expense-Tracker-Frontend.git
cd Expense-Tracker-Frontend
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
VITE_API_URL=http://localhost:4000
```

Replace the URL if your backend is deployed elsewhere.

### Start the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## Backend Repository

The frontend communicates with the Expense Tracker Backend API.

Backend Repository:

https://github.com/Lordwick5/Expense-Tracker-Backend

---

## Future Improvements

- Expense categories
- Search & filtering
- Monthly analytics
- Charts and reports
- Dark mode
- CSV export

---

## License

Copyright (c) 2026 Prashant Chaudhary. All rights reserved. 

This project was created for personal and educational purposes. You may view and reference the code for learning purposes, but copying, redistributing, or using it for commercial purposes without permission is not allowed.
