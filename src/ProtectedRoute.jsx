// src/Components/AdminProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

const AdminProtectedRoute = ({ children }) => {
  const user = auth.currentUser;

  // If no user is logged in, redirect to /admin
  if (!user) {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default AdminProtectedRoute;

