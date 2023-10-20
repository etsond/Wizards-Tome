import React from 'react';
import Book from './Book';

class BookList extends React.Component {
  render() {
    return (
      <div className="book-list">
        <h2>List of Harry Potter Books</h2>
        {this.props.books.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            characters={book.characters}
            summary={book.summary}
          />
        ))}
      </div>
    );
  }
}

export default BookList;
