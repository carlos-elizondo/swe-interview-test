# 🛒 Simple Card List Application

A full-stack application for managing product cards, featuring a React/MUI frontend and an Express.js backend.

## 🚀 Getting Started

To run this project, you will need to open **two separate terminals**: one for the backend and one for the frontend.

### 1\. Backend Setup (Express)

The backend serves the product data and handles the DELETE API logic.

- **Path:** /backend (or your root folder)
- **Port:** 5001

```bash
# Navigate to the backend folder
cd backend

# Install dependencies
npm install

# Start the server  node
server.js
```

> **Note:** Ensure the backend is running on [http://localhost:5001](https://www.google.com/search?q=http://localhost:5001).

### 2\. Frontend Setup (React)

The frontend displays the product cards and communicates with the backend API.

- **Path:** /frontend
- **Port:** 3000

```bash
# Navigate to the frontend folder
cd frontend

# Install dependencies
npm install

# Start the React development
server  npm start
```

> **Note:** The app will automatically open at [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000).

## 🛠 Features & Requirements

### Frontend

- **Responsive Layout:** Uses Material UI (MUI) Container and Box with flex-wrap to ensure cards fit all screen sizes.
- **Product Cards:** Displays images, pricing, and descriptions using a custom ProductCard component.
- **Dynamic Deletion:** Implements onDelete logic that updates the UI immediately using React State (filter).

### Backend

- **CORS Enabled:** Configured to allow requests from the port 3000 frontend.

- **RESTful API:** Provides a GET /api/products and DELETE /api/products/:id endpoint.
- **State Management:** Uses an in-memory array with filter() to handle product removal.

## 📂 Project Structure

```bash
   ├── backend/
   │   ├── server.js        # Express server & API routes
   │   └── package.json
   ├── frontend/  │
   ├── src/  │
   │   ├── App/Page      # Main state & Map logic
   │   │   └── ProductList.jsx
   ├── package.json
   ├── README.md
```

## ⚠️ Common Troubleshooting

- **JSON Parse Error:** Ensure the **Backend** is running before clicking delete. If the backend is off, the frontend might receive an HTML 404 page instead of JSON.
- **CORS Errors:** If the console shows a "Cross-Origin" error, ensure app.use(cors()) is included in your server.js.
- **Port Mismatch:** This project expects the backend at port 5001. If your backend port changes, update the fetch URL in App.js.
