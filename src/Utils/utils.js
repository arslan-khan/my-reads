const filteredBooks = (books, type) => {
  if (!type) return books;

  let shelf = '';
  switch (type) {
    case 'Want To Read':
      shelf = 'wantToRead';
      break;
    case 'Read':
      shelf = 'read';
      break;
    default:
      shelf = 'currentlyReading';
      break;
  }

  return books.filter(book => book.shelf === shelf);
};

export { filteredBooks };
