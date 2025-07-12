import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Feedback from "./Pages/Feedback";
import Services from "./Pages/Services";
import AdminDashboard from "./Pages/AdminDashboard";
import HelpUs from "./Pages/HelpUs";
import Search from "./Pages/Search";
import AdminLogin from "./Pages/AdminLogin";
import ProtectedRoute from "./Components/AdminProtectedRoute"; // renamed for clarity

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/services" element={<Services />} />
      <Route path="/help-us" element={<HelpUs />} />
      <Route path="/search" element={<Search />} />
      
      {/* Admin Login Page (Public) */}
      <Route path="/admin" element={<AdminLogin />} />

      {/* Protected Dashboard */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
