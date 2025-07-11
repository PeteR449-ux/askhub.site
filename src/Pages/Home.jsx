import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to AskHub</h1>
      <p className="mb-8 text-lg">Ask. Search. Know.</p>
      <div className="flex gap-4">
        <Link to="/search" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Search</Link>
        <Link to="/services" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Services</Link>
        <Link to="/help-us" className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">Help Us</Link>
        <Link to="/admin" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900">Admin</Link>
      </div>
    </div>
  );
};

export default Home;
