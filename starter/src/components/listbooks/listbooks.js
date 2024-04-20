import React from "react";
import BookShelf from "../bookshelf/bookshelf.js";

function ListBooks({ books, shelves, handleUpdateBook }) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {Object.keys(shelves).map((shelf) => (
            <BookShelf
              key={shelf}
              books={books.filter((book) => book.shelf === shelf)}
              shelf={shelves[shelf]}
              handleUpdateBook={(book, shelf) => handleUpdateBook(book, shelf)}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <a href="search">Add a book</a>
      </div>
    </div>
  );
}

export default ListBooks;
