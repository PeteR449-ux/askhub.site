import React, { useEffect, useState } from "react";
import { db, auth } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const AdminDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const querySnapshot = await getDocs(collection(db, "feedback"));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setFeedbacks(data);
    };

    fetchFeedbacks();
  }, []);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">🧠 Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {feedbacks.length === 0 ? (
        <p className="text-gray-600 text-lg">No feedback submitted yet.</p>
      ) : (
        <ul className="space-y-4">
          {feedbacks.map((item) => (
            <li
              key={item.id}
              className="border border-gray-300 bg-white rounded-xl shadow p-5"
            >
              <p className="text-gray-800 text-lg">{item.message}</p>
              {item.timestamp?.toDate && (
                <p className="text-sm text-gray-500 mt-2">
                  🕒 {item.timestamp.toDate().toLocaleString()}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;

