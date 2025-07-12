import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Feedback from "./Pages/Feedback";
import Services from "./Pages/Services";
import AdminDashboard from "./Pages/AdminDashboard";
import HelpUs from "./Pages/HelpUs";
import Search from "./Pages/Search";
import ProtectedRoute from "./ProtectedRoute";
import AdminLogin from "./Pages/AdminLogin";
import { Analytics } from "@vercel/analytics/next"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/services" element={<Services />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/help-us" element={<HelpUs />} />
      <Route path="/search" element={<Search />} />
      <Route path="/admin-login" element={<AdminLogin />} />
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

