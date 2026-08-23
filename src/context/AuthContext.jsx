import { createContext, useContext, useEffect, useState } from "react";
import { login as apiLogin } from "../lib/api";

const AuthContext = createContext(null);
const STORAGE_KEY = "ma_portal_auth";

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (auth) localStorage.setItem(STORAGE_KEY, JSON.stringify(auth));
    else localStorage.removeItem(STORAGE_KEY);
  }, [auth]);

  const signIn = async ({ email, password, presetRole }) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiLogin({ email, password, presetRole });
      setAuth(data);
      return data;
    } catch (err) {
      setError(err.message || "Unable to sign in.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => setAuth(null);

  return (
    <AuthContext.Provider
      value={{ user: auth?.user ?? null, token: auth?.token ?? null, signIn, signOut, error, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
