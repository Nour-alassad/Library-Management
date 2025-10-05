import { useState } from "react";
import { SearchIcon } from "lucide-react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative flex items-center mb-2">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon size={18} className="text-gray-400" />
      </div>

      <input
        type="text"
        placeholder="Search for books by title, author, or ISBN..."
        value={query}
        onChange={handleInputChange}
        className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:border-none focus:ring-blue-500 focus:ring-1 transition-colors duration-200"
      />
    </div>
  );
}
