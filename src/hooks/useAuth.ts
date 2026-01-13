import { useState } from "react";
import api from "../services/api";

export function useAuth() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    !!localStorage.getItem("token")
  );

  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post("/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true);
      return true;
    } catch (err: any) {
      setError(err.response?.data?.message || "Error al iniciar sesión");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return { login, logout, isLoggedIn, error, loading };
}



