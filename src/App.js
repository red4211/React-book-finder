import React, { Component } from 'react';
import axios from 'axios';
import InputField from './InputField.js';
import BooksList from './BooksList.js';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {results: [], searchQuery: ''};

    this.inputBook = this.inputBook.bind(this);
    this.bookRequest = this.bookRequest.bind(this);
  }

  inputBook(e){
    this.setState({searchQuery: e.target.value});
  }

  bookRequest(){
    //change spaces to +
    var changedSearch = this.state.searchQuery.replace(/\s/g, "+");
     axios.get('https://www.googleapis.com/books/v1/volumes?q=' + changedSearch)
      .then(res => {
        if(res.data.items){
          var result = res.data.items.map(function(current,index){
          return current.volumeInfo;
        })
        this.setState({results: result});
        } 
      })
  }

  render(){
    return (
    <div className="App">
      <InputField inputBook={this.inputBook} prop2={this.bookRequest} />
      <BooksList list={this.state.results} />
    </div>
  );
  }
}

export default App;