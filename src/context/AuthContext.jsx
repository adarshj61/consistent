import React, { createContext, useContext, useState, useEffect } from 'react';

const STORAGE_KEY = 'consistent_demo_student';

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (_) {}
    return null;
  });

  const login = (userData) => {
    const studentUser = {
      name: userData.name || 'Demo Student',
      email: userData.email || 'student@consistent.in',
      studentId: userData.studentId || `TCA-${Math.floor(1000 + Math.random() * 9000)}`,
      loginTime: new Date().toISOString(),
    };
    setUser(studentUser);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(studentUser));
    } catch (_) {}
    return studentUser;
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (_) {}
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: Boolean(user), login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
