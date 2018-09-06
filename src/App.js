import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    // const movies = [
    //   {id: 0, poster_src: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UY1200_CR90,0,630,1200_AL_.jpg", title: "Avengers: Infinity", overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum praesentium, totam reiciendis dolore, repellendus nesciunt reprehenderit facere, ipsum perferendis eius, aperiam natus enim ex distinctio nam! Provident doloribus quidem fugiat."},
    //   {id: 1, poster_src: "https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg", title: "The Avengers", overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab velit, nemo vel rerum, iure consequuntur adipisci reiciendis quo deleniti placeat officia nulla aut amet recusandae provident in eveniet saepe cumque."}
    // ];
    // var movieRows = [];
    //
    // movies.forEach((movie) => {
    //   console.log(movie.title);
    //   const movieRow = <MovieRow movie={movie} />
    //   movieRows.push(movieRow)
    // })
    // this.state = {rows: movieRows}
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

          <table className="titleBar">
            <tbody>
              <tr>
                <td>
                  <img width="50" src="green_app_icon.svg" alt="App icon"/>
                </td>
                <td className="nav_title">
                  <h3>MoviesDB Search</h3>
                </td>
              </tr>
            </tbody>
          </table>

          <input className="searchBar" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter Search Term"/>

          {this.state.rows}

        </div>
      );
    }
  }

    export default App;
