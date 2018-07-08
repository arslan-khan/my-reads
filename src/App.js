import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './Pages/Dashboard';
import Search from './Pages/Search';
import { DASHBOARD, SEARCH } from './Constants/PageURLs';
import { getAll, update } from './APIs/BooksAPI';

class App extends Component {
  state = { books: [] };

  componentDidMount = async () => {
    const books = await getAll();
    this.setState({ books });
  };

  updateShelf = (book, shelf) => {
    update(book.id, shelf);

    if (!book.shelf) {
      book.shelf = shelf;
      return this.setState(currentState => ({
        books: currentState.books.concat(book)
      }));
    }

    this.setState(currentState => ({
      books: currentState.books.map(b => {
        if (b.id === book.id) b.shelf = shelf;
        return b;
      })
    }));
  };

  render() {
    const { books } = this.state;

    return (
      <Switch>
        <Route
          exact
          path={DASHBOARD}
          render={() => (
            <Dashboard books={books} updateShelf={this.updateShelf} />
          )}
        />

        <Route
          path={SEARCH}
          render={() => <Search books={books} updateShelf={this.updateShelf} />}
        />
      </Switch>
    );
  }
}

export default App;
