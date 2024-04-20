import "./App.css";
import { useEffect, useState } from "react";
import ListBooks from "./components/listbooks/listbooks.js";
import { getAll, update } from "./BooksAPI.js";
import { Route, Routes } from "react-router-dom";
import { bookShelves } from "./constants.js";
import SearchBook from "./components/searchbooks/searchbooks.js";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    handleGetAllBooks().then();
  }, []);

  const handleGetAllBooks = async () => {
    const books = await getAll();
    setBooks(books);
  };

  const handleUpdateBook = async (book, shelf) => {
    await update(book, shelf);

    const books = await getAll();

    setBooks(books);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path={"/"}
          element={
            <ListBooks
              books={books ?? []}
              shelves={bookShelves}
              handleUpdateBook={(book, shelf) => handleUpdateBook(book, shelf)}
            />
          }
        />
        <Route
          path={"search"}
          element={
            <SearchBook
              books={books ?? []}
              handleUpdateBook={(book, shelf) => handleUpdateBook(book, shelf)}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
