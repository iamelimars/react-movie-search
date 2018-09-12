import React, { Component } from 'react';
import './DiscoverMovies.css';
import $ from 'jquery';

import MovieCard from '../Common/MovieCard.js';


class DiscoverMovies extends Component {
  constructor(props) {
    super(props);
    this.state ={}
    this.performDiscovery()
  }

  performDiscovery() {
    const urlString = "https://api.themoviedb.org/3/discover/movie?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&sort_by=popularity.desc";
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log(searchResults.results);
        const results = searchResults.results;
        var movieCards = [];
        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          movie.backdrop_src = "https://image.tmdb.org/t/p/w185" + movie.backdrop_path;
          movie.vote_average = movie.vote_average * 10;
          const movieCard = <MovieCard key={movie.id} movie={movie} />
          movieCards.push(movieCard);
        })

        this.setState({rows: movieCards})

      },
      error: (xhr, status, err) => {
        console.log("error");
      }


    })
  }

  render() {
    return (
      <div>
        <h1> Discover Movies</h1>
        {this.state.rows}
      </div>

    )
  }
}

export default DiscoverMovies;
