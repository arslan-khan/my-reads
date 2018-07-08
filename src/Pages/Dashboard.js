import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { SEARCH } from '../Constants/PageURLs';
import BooksList from '../Components/BooksList';
import { filteredBooks } from '../Utils/utils';

const Dashboard = ({ books, updateShelf }) => {
  const types = ['Currently Reading', 'Want To Read', 'Read'];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      {books.length > 0 && (
        <div className="list-books-content">
          <div>
            {types.map(type => (
              <div className="bookshelf" key={type}>
                <h2 className="bookshelf-title">{type}</h2>
                <div className="bookshelf-books">
                  <BooksList
                    books={filteredBooks(books, type)}
                    updateShelf={updateShelf}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="open-search">
        <Link to={SEARCH}>Add a book</Link>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default Dashboard;
