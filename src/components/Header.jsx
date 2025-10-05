import { BookIcon, BookOpenIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <h1 className="text-2xl font-bold text-blue-600">Library Manager</h1>

          <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <Link
              to="/"
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                location.pathname === "/"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <BookOpenIcon size={18} className="mr-2" />
              <span>Search Books</span>
            </Link>
            <Link
              to="/borrowed"
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                location.pathname === "/borrowed"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <BookIcon size={18} className="mr-2" />
              <span>My Borrowed Books</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
