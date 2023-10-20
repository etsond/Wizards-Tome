

import React from 'react';

class Book extends React.Component {
  render() {
    return (
      <div className="book">
        <h2>{this.props.title}</h2>
        <p>Author: {this.props.author}</p>
        <p>Main Characters: {this.props.characters.join(', ')}</p>
        <p>{this.props.summary}</p>
      </div>
    );
  }
}

export default Book;
