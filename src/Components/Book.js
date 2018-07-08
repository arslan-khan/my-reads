import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';

const Book = ({ book, updateShelf }) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks &&
              book.imageLinks.smallThumbnail})`
          }}
        />

        <Dropdown book={book} updateShelf={updateShelf} />
      </div>

      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors && book.authors.map(author => author)}
      </div>
    </div>
  </li>
);

Book.propTypes = {
  book: PropTypes.shape({
    imageLinks: PropTypes.shape({
      smallThumbnail: PropTypes.string.isRequired
    }),
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  updateShelf: PropTypes.func.isRequired
};

Book.defaultProps = { imageLinks: null, authors: null };

export default Book;
