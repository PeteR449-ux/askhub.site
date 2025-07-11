import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const HelpUs = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!feedback.trim()) return;

    try {
      await addDoc(collection(db, "feedback"), {
        message: feedback,
        timestamp: new Date(),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error saving feedback:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Help Us Improve</h1>
      <textarea
        className="border border-gray-300 p-4 rounded-lg w-80 h-40"
        placeholder="Your feedback or report..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-700">
        Submit
      </button>
      {submitted && <p className="text-green-500 mt-4">Thanks for your feedback!</p>}
    </div>
  );
};

export default HelpUs;
