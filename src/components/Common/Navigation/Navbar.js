import React, { Component } from 'react';
import './Navigation.css';
import { NavLink } from "react-router-dom";
import { Navbar , Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';


class Navigationbar extends React.Component {
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink exact to="/">Moo V</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={3} title="Discover" id="basic-nav-dropdown">
              <MenuItem><NavLink exact to="/discover">Discover</NavLink> </MenuItem>
              <MenuItem divider />
              <MenuItem><NavLink to="/movies">Movies</NavLink> </MenuItem>
              <MenuItem><NavLink to="/shows">TV Shows</NavLink> </MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Movies" id="basic-nav-dropdown">
              <MenuItem><NavLink exact to="/movies">Movies</NavLink> </MenuItem>
              <MenuItem divider />
              <MenuItem><NavLink to="/movies/popular">Popular</NavLink> </MenuItem>
              <MenuItem><NavLink to="/movies/toprated">Top Rated</NavLink> </MenuItem>
              <MenuItem><NavLink to="/movies/upcoming">Upcoming</NavLink> </MenuItem>
              <MenuItem><NavLink to="/movies/nowplaying">Now Playing</NavLink> </MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="TV Shows" id="basic-nav-dropdown">
              <MenuItem><NavLink exact to="/shows">TV Shows</NavLink> </MenuItem>
              <MenuItem divider />
              <MenuItem><NavLink to="/shows/popular">Popular</NavLink> </MenuItem>
              <MenuItem><NavLink to="/shows/toprated">Top Rated</NavLink> </MenuItem>
              <MenuItem><NavLink to="/shows/upcoming">On TV</NavLink> </MenuItem>
              <MenuItem><NavLink to="/shows/nowplaying">Airing Today</NavLink> </MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem>
              <ion-icon name="ios-search"></ion-icon>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigationbar;
