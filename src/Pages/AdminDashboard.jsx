import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
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

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {feedbacks.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <ul className="space-y-4">
          {feedbacks.map((item) => (
            <li key={item.id} className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
              <p>{item.message}</p>
              <p className="text-xs text-gray-500 mt-2">🕒 {item.timestamp?.toDate?.().toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;
