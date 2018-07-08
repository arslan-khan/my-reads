import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { DASHBOARD } from '../Constants/PageURLs';
import { search } from '../APIs/BooksAPI';
import BooksList from '../Components/BooksList';

class Search extends Component {
  static propTypes = {
    Books: PropTypes.arrayOf(PropTypes.object),
    updateShelf: PropTypes.func.isRequired
  };

  static defaultProps = { books: null };

  state = { query: '', booksCollection: [] };

  clearBooksCollection = () => this.setState({ booksCollection: [] });

  updateQuery = e => this.setState({ query: e.target.value }, this.searchBooks);

  searchBooks = async () => {
    const { query } = this.state;
    if (!query) return this.clearBooksCollection();

    const booksCollection = await search(query);
    if (booksCollection === undefined || booksCollection.error)
      return this.clearBooksCollection();

    this.setState({
      booksCollection: booksCollection.map(bc => {
        this.props.books.forEach(book => {
          if (book.id === bc.id) {
            bc.shelf = book.shelf;
          }
        });
        return bc;
      })
    });
  };

  render() {
    const { query, booksCollection } = this.state;

    return (
      <div className="app">
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to={DASHBOARD}>
              Close
            </Link>

            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={this.updateQuery}
              />
            </div>
          </div>

          <div className="search-books-results">
            <BooksList
              books={booksCollection}
              updateShelf={this.props.updateShelf}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
