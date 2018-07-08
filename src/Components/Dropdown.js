import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {
  static propTypes = {
    book: PropTypes.shape().isRequired,
    updateShelf: PropTypes.func.isRequired
  };

  state = { option: '' };

  updateVal = e => {
    this.setState({ option: e.target.value }, this.updateShelf);
  };

  updateShelf = () => {
    const { updateShelf, book } = this.props;
    updateShelf(book, this.state.option);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.book.shelf || 'none'}
          onChange={this.updateVal}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default Dropdown;
