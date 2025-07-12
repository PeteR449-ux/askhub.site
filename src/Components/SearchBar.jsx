import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(query);
    alert(`Searching for: ${query} (AI search to be connected...)`);
  };

  return (
    <div className="flex items-center gap-2 w-full max-w-xl mx-auto mt-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search with AI..."
        className="flex-1 px-4 py-2 rounded-xl border"
      />
      <button
        onClick={handleSearch}
        className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700"
      >
        Search
      </button>
    </div>
  );
}
