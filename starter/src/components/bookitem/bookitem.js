import React from "react";
import BookShelfChanger from "../bookshelfchanger/bookshelfchanger.js";

const BookItem = ({ shelf, book, handleUpdateBook }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks && book.imageLinks.thumbnail
            })`,
          }}
        ></div>
        <BookShelfChanger
          book={book}
          shelf={shelf}
          handleUpdateBook={(book, shelf) => handleUpdateBook(book, shelf)}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors && book.authors.join(", ")}
      </div>
    </div>
  );
};

export default BookItem;
