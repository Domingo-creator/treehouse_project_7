import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import PhotoList from './Components/PhotoList';
import CategoryButtons from './Components/CategoryButtons';

//API-KEY:  0d30191c3892a3471c792f8d46187db9
//Secret:  0856ff9ea8b87cdf

export default class App extends Component {
  

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
    }
  }

  componentDidMount () {
    this.performSearch();
  }

  performSearch = (query = 'forest') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0d30191c3892a3471c792f8d46187db9&tags=${query}&format=json&nojsoncallback=1`)
    .then( response => {
      this.setState({
        photos: response.data.photos,
        loading: false,
        query: query
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
          <h1 className="main-title">PhotoSearch</h1>
          <SearchForm onSearch={this.performSearch} />
          <CategoryButtons Clicked={this.performSearch}/>
          </header>
        </div>
        <div className="main-content">
          <h2 className="query-header">Images of: {this.state.query}</h2>
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <PhotoList data={this.state.photos} />
          }
        </div>
      </div>
    );
  }
}

