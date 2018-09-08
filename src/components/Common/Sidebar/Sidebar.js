import React, { Component } from 'react';
import './Sidebar.css';
import { NavLink } from "react-router-dom";


class Sidebar extends React.Component {
  render() {
    return (
        <div className="sidebar">
          <div className="sidebar-wrapper">
            <div className="logo">

            </div>
            <div className="nav">
              <li><NavLink className="sidebar-link" activeClassName="select" exact to="/"><p>Home</p></NavLink></li>
              <li><NavLink className="sidebar-link" activeClassName="select" to="/movies"><p>Movies</p></NavLink></li>
              <li><NavLink className="sidebar-link" activeClassName="select" to="/shows"><p>Shows</p></NavLink></li>
            </div>
          </div>
        </div>
    )
  }
}

export default Sidebar;
