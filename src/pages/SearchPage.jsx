import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import { getBooks } from "../api/api";

export default function SearchPage() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getBooks();
      setBooks(booksData);
      setLoading(false);
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      !searchQuery.trim() ||
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.isbn.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-5 py-10">
        <h2 className="text-2xl font-bold mb-6">Search Books</h2>
        <div className="text-center">Loading books...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-5 py-10">
      <h2 className="text-2xl font-bold mb-6">Search Books</h2>
      <SearchBar onSearch={handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {filteredBooks.map((item) => (
          <BookCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
