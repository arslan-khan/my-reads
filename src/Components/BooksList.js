import React from 'react';
import PropTypes from 'prop-types';

import Book from '../Components/Book';

const BooksList = ({ books, updateShelf }) => (
  <ol className="books-grid">
    {books.map(book => (
      <Book key={book.id} book={book} updateShelf={updateShelf} />
    ))}
  </ol>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default BooksList;
