import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import BorrowedBooksPage from "./pages/BorrowedBooksPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="pt-4 pb-12">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/borrowed" element={<BorrowedBooksPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
