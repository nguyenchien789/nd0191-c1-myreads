import { useState, useEffect } from "react";
import { search } from "../../BooksAPI.js";
import BookItem from "../bookitem/bookitem.js";

const SearchBook = ({ books, handleUpdateBook }) => {
  const [searchBooks, setSearchBooks] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => handleSearchBook(value), 1000);
    return () => clearTimeout(timeoutId);
  }, [value]);

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearchBook = (query) => {
    if (query.length > 0) {
      search(query)
        .then((books) => {
          setSearchBooks(books);
        })
        .catch(() => setSearchBooks([]));
    } else {
      setSearchBooks([]);
    }
  };

  const searchBooksResult =
    searchBooks?.length > 0
      ? searchBooks.map((searchedItem) => {
          books.forEach((book) => {
            if (book.id === searchedItem.id) {
              searchedItem.shelf = book.shelf;
            }
            return book;
          });
          searchedItem.shelf = searchedItem.shelf ? searchedItem.shelf : "none";

          return searchedItem;
        })
      : [];

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a href="/" className="close-search">
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleOnChange}
            value={value}
            autoFocus
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooksResult.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              shelf={book.shelf}
              handleUpdateBook={(book, shelf) => handleUpdateBook(book, shelf)}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchBook;
