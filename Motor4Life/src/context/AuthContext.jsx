import { createContext, useState, useEffect } from "react";
import {
  getUsers,
  saveUsers,
  saveSession,
  getSession,
  clearSession
} from "../utils/storage";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = getSession();
    if (session) setUser(session);
  }, []);

  function register({ name, email, password }) {
    const users = getUsers();

    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      throw new Error("Usuário já existe");
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password
    };

    const updatedUsers = [...users, newUser];
    saveUsers(updatedUsers);

    return newUser;
  }

  function login({ email, password }) {
    const users = getUsers();

    const userFound = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!userFound) {
      throw new Error("Email ou senha inválidos");
    }

    setUser(userFound);
    saveSession(userFound);
  }

  function logout() {
    setUser(null);
    clearSession();
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}