import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: query }),
      });

      const data = await res.json();
      setResponse(data.answer || "No answer found.");
    } catch (err) {
      console.error(err);
      setResponse("⚠️ Failed to get answer from AI.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Search Anything</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 px-4 py-2 rounded-lg w-80 mb-4"
        placeholder="Ask a question..."
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Thinking..." : "Search"}
      </button>

      {response && (
        <p className="mt-6 text-lg text-green-600 bg-gray-100 p-4 rounded-lg w-full max-w-xl">
          {response}
        </p>
      )}
    </div>
  );
};

export default Search;
