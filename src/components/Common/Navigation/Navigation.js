import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.css';
import $ from 'jquery';


class Error extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/shows">Shows</NavLink>
      </div>

    )
  }
}

export default Error;
