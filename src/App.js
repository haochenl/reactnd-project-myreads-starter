import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'

class BooksApp extends React.Component {
  state = {
    shelfBooks: []
  }

  componentWillMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({shelfBooks: books})
    })
  }

  componentDidUpdate() {
    BooksAPI.getAll().then((books) => {
      this.setState({shelfBooks: books})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            shelfBooks={this.state.shelfBooks}
          />
        )}/>
        <Route exact path='/search' render={() => (
          <SearchBooks
            shelfBooks={this.state.shelfBooks}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
