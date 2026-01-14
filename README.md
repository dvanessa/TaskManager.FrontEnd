# TaskManager Frontend

Modern frontend application for a Task Manager system, built with **React**, **TypeScript** and **Vite**, consuming a REST API with **JWT-based authentication**.

This project is part of a fullstack application, where the frontend and backend are maintained as independent repositories.

---

## 🚀 Tech Stack

- ⚛️ React
- 🟦 TypeScript
- ⚡ Vite
- 🌐 Axios
- 🔐 JWT Authentication
- 🧭 React Router
- 🎨 Bootstrap (styles)

---

## ✨ Features

- User authentication (login/logout)
- JWT token handling using localStorage
- Axios interceptor for authenticated requests
- Protected routes (only accessible when authenticated)
- Clean and scalable project structure
- Ready to connect with a .NET REST API backend

---

## 📂 Project Structure
src/
├── components/ # Reusable UI components
├── hooks/ # Custom hooks (useAuth, etc.)
├── pages/ # Pages (Login, Home, Tasks)
├── router/ # Routing configuration
├── services/ # Axios instance & interceptors
├── types/ # TypeScript types & interfaces
├── App.tsx
└── main.tsx


---

## 🔐 Authentication Flow

1. User logs in from `/login`
2. Backend returns a JWT token
3. Token is stored in `localStorage`
4. Axios interceptor attaches token to every request
5. Protected routes validate authentication status

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm
- Backend API running locally

---

### Installation

```bash
npm install

### Run the development server

npm run dev

The application will be available at:

http://localhost:5173


## 🔗 Backend Integration

Default backend URL:

http://localhost:5049


Make sure the backend:

- Is running
- Has CORS enabled for http://localhost:5173
- Exposes authentication endpoints


🌱 Environment Variables (optional)

Create a .env file in the project root:

VITE_API_URL=http://localhost:5049


🧪 Future Improvements

- Refresh token support
- Role-based authorization
- Form validation
- UI/UX improvements
- Unit and integration tests


## 👩‍💻 Author

Vanessa Duarte  
Frontend Developer | Fullstack .NET & React


## 📄 License

This project is for educational and portfolio purposes.
