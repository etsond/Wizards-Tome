import React from 'react';
import BookList from './BookList';
import './App.css'; 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          title: 'Harry Potter and the Philosopher\'s Stone',
          author: 'J.K. Rowling',
          characters: ['Harry Potter', 'Hermione Granger', 'Ron Weasley'],
          summary: 'The story follows a young wizard, Harry Potter, who discovers his magical heritage on his eleventh birthday when he receives a letter of acceptance to attend Hogwarts School of Witchcraft and Wizardry. The movie adaptation was released in 2001.'
        },
        {
          title: 'Harry Potter and the Chamber of Secrets',
          author: 'J.K. Rowling',
          characters: ['Harry Potter', 'Hermione Granger', 'Ron Weasley'],
          summary: 'The plot follows Harry\'s second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school\'s corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" will kill all pupils who do not come from all-magical families. The movie adaptation was released in 2002.'
        },
        // TODO
        // Add more books
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <h1>Magical Adventures in the Wizarding World</h1>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
