// AuthProvider.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('user'));
  const navigate = useNavigate();

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem()
    setIsAuthenticated(true);
    navigate('/'); // Redirect to homepage after login
  };

  const logout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/'); // Redirect to sign-in page after logout
    window.location.reload()
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
