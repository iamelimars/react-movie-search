import React, { Component } from 'react';
import './Search.css';
import MovieRow from '../Common/MovieRow.js';
import $ from 'jquery';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.performSearch()
  }

  performSearch(searchTerm) {
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&query=" + searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched Data Successfully");
        const results = searchResults.results;
        var movieRows = [];
        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow);
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    })
  }

  searchChangeHandler(event) {
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm);
  }

  render() {
      return (

        <div className="App">

          <input className="searchBar"  onChange={this.searchChangeHandler.bind(this)} placeholder="Movies & TV Shows . . ."/>

          {this.state.rows}

        </div>
      );
    }
}


export default Search;
