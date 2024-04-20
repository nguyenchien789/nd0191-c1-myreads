import React from "react";
import { useRef } from "react";

const BookShelfChanger = ({ book, handleUpdateBook }) => {
  const bookshelfRef = useRef(book.shelf);

  const handleChangeShelf = () => {
    handleUpdateBook(book, bookshelfRef?.current.value);
  };

  return (
    <div className="book-shelf-changer">
      <select
        ref={bookshelfRef}
        value={book.shelf}
        onChange={handleChangeShelf}
      >
        <option value={""} disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
