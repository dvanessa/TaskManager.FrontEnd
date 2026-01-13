import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import PrivateRoute from "../components/PrivateRoute";
import { useAuthContext } from "../auth/AuthContext";

import Home from "../pages/Home";
import Login from "../pages/Login";
import TaskList from "../pages/Tasks/TaskList";

export default function AppRouter() {
  const { isLoggedIn } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute isAuthenticated={isLoggedIn} />}>
            <Route path="/tasks" element={<TaskList />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

