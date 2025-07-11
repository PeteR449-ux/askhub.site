import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;
    setResponse(`You searched for: "${query}" — Smart answers coming soon!`);
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
      <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Search
      </button>
      {response && <p className="mt-6 text-lg text-green-600">{response}</p>}
    </div>
  );
};

export default Search;
