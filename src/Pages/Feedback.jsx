import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Feedback = () => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.trim() === "") return;

    try {
      await addDoc(collection(db, "feedback"), {
        message,
        timestamp: serverTimestamp(),
      });

      setSubmitted(true);
      setMessage("");
    } catch (err) {
      console.error("Error submitting feedback:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl p-8 rounded-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">📢 Submit Feedback</h2>

        {submitted ? (
          <p className="text-green-600 text-lg font-medium">Thank you for your feedback!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full border p-3 rounded-md mb-4 resize-none"
              rows={5}
              placeholder="Type your feedback..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Feedback;
