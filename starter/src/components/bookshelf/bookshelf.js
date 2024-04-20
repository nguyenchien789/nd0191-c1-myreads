import React from "react";
import BookItem from "../bookitem/bookitem.js";

const BookShelf = ({ shelf, books, handleUpdateBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books?.map((book) => (
            <li key={book.id}>
              <BookItem
                book={book}
                shelf={shelf}
                handleUpdateBook={(book, shelf) =>
                  handleUpdateBook(book, shelf)
                }
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
