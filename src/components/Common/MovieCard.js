import React from 'react'
import './MovieCard.css';

class MovieCard extends React.Component {
  viewMovie() {
    console.log(this.props.movie.title);
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return (
      <div>
        <img src={this.props.movie.poster_src} width="80" alt="poster"/>
        <img src={this.props.movie.backdrop_src} width="80" alt="poster"/>
        <h3>{this.props.movie.title}</h3>
        <p>{this.props.movie.vote_average}%</p>
        <p>{this.props.movie.overview}</p>
        <hr />



      </div>

    )
  }
}

export default MovieCard
