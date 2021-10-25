import axios from "axios";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { API_URL, NEXT_URL } from "../config";

const AuthContext = createContext<{
  user: { username: string };
  error: {};
  register: ({
    username,
    email,
    password,
    confirmPassword,
  }: {
    email: string;
    password: string;
    username: string;
    confirmPassword: string;
  }) => void;
  login: ({ email, password }: { email: string; password: string }) => void;
  logout: ({}) => void;
  checkUserLoggedIn: {};
} | null>(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [error, setError] = useState<{} | null>(null);
  const router = useRouter();

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  //Register User
  const register = async ({ username, email, password }) => {
    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      router.push("/");
    } else {
      setError(data.message);
      setError(null);
    }
  };
  //Login user
  const login = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      router.push("/");
    } else {
      setError(data.message);
      setError(null);
    }
  };

  //Logout

  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: "POST",
    });
    if (res.ok) {
      setUser(null);
      router.push("/");
    }
  };

  //Check if user log in

  const checkUserLoggedIn = async () => {
    const res = await fetch(`${NEXT_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, error, register, login, logout, checkUserLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
