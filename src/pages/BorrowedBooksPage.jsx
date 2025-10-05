import { useState, useEffect } from "react";
import BorrowedBoodCard from "../components/BorrowedBoodCard";
import { getBorrowedBooks } from "../api/api";

export default function BorrowedBooksPage() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      const booksData = await getBorrowedBooks();
      setBorrowedBooks(booksData);
      setLoading(false);
    };

    fetchBorrowedBooks();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            My Borrowed Books
          </h2>
        </div>
        <div className="text-center">Loading borrowed books...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">My Borrowed Books</h2>
        <p className="text-gray-600 mt-2">
          You have {borrowedBooks.length} borrowed book
          {borrowedBooks.length !== 1 ? "s" : ""}
        </p>
      </div>

      {borrowedBooks.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-medium text-gray-700 mb-2">
            No borrowed books
          </h3>
          <p className="text-gray-500">You haven't borrowed any books yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {borrowedBooks.map((book, index) => (
            <BorrowedBoodCard key={book.id} item={book} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
