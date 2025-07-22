# 🛍️ MERN Stack eCommerce Frontend

This is the **React.js frontend** for my full-stack MERN (MongoDB, Express, React, Node.js) eCommerce application. It interacts with a Node.js/Express REST API to provide a responsive, user-friendly shopping experience.

## 🖥️ Backend Repository

👉 [Express Backend Repository](https://github.com/akshoaib/express-shopping)

---

## 🚀 Features

- 🛒 Browse, search, and filter products
- 🧑 User registration & login with JWT auth
- 🔐 Protected routes for logged-in users
- 🛍️ Add to cart, remove from cart
- 🧾 Checkout & order placement *(if implemented)*
- 🛠️ Admin dashboard (product/category management)
- 📱 Fully responsive design using CSS / Bootstrap / Ant Design
- 🔁 Global state management using Redux
- 🎯 Form validation and error handling

---

## 🛠️ Tech Stack

- **React.js** (with Vite or CRA)
- **Redux Toolkit** for state management
- **Axios** for HTTP requests
- **React Router DOM** for routing
- **Ant Design / Bootstrap** 
- **JWT** for authentication
- **React Toastify** for alerts and notifications

---

## 📁 Folder Structure

```bash
.
├── public/
├── src/
│   ├── components/         # Reusable UI components (buttons, cards, modals, etc.)
│   ├── shared-components/  # Global shared layout components (navbar, footer, etc.)
│   ├── pages/              # Page-level components (Home, Login, ProductDetails, etc.)
│   ├── redux/              # Redux store, slices, actions, reducers
│   ├── services/           # Axios instances and API service functions
│   ├── hooks/              # Custom React hooks (e.g., useAuth, useFetch, useToggle)
│   ├── utils/              # Helper/utility functions (e.g., formatters, validators)
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── index.css

