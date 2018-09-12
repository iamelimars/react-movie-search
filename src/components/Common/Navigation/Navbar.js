import React, { Component } from 'react';
import './Navigation.css';
import { NavLink } from "react-router-dom";
import { Navbar , Nav, NavItem, NavDropdown, MenuItem, Modal, Button} from 'react-bootstrap';

import Search from '../../Search/Search.js'


class Navigationbar extends Component {

  constructor(props, context) {
    super(props, context);

    this.searchShow = this.searchShow.bind(this);
    this.searchClose = this.searchClose.bind(this);

    this.state = {
      show: false
    };
  }

  searchShow() {
    console.log("clicked");
    this.setState({
      show: true
    })
  }

  searchClose() {
    this.setState({
      show: false
    })
  }

  render () {
    return (
      <div>
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
              <MenuItem componentClass='span'><NavLink exact to="/discover">Discover</NavLink> </MenuItem>
              <MenuItem divider />
              <MenuItem componentClass='span'><NavLink to="/discover/movies">Movies</NavLink> </MenuItem>
              <MenuItem componentClass='span'><NavLink to="/discover/shows">TV Shows</NavLink> </MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Movies" id="basic-nav-dropdown">
              <MenuItem componentClass='span'><NavLink exact to="/movies">Movies</NavLink> </MenuItem>
              <MenuItem divider />
              <MenuItem componentClass='span'><NavLink to="/movies/popular">Popular</NavLink> </MenuItem>
              <MenuItem componentClass='span'><NavLink to="/movies/toprated">Top Rated</NavLink> </MenuItem>
              <MenuItem componentClass='span'><NavLink to="/movies/upcoming">Upcoming</NavLink> </MenuItem>
              <MenuItem componentClass='span'><NavLink to="/movies/nowplaying">Now Playing</NavLink> </MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="TV Shows" id="basic-nav-dropdown">
              <MenuItem componentClass='span'><NavLink exact to="/shows">TV Shows</NavLink> </MenuItem>
              <MenuItem divider />
              <MenuItem componentClass='span'><NavLink to="/shows/popular">Popular</NavLink> </MenuItem>
              <MenuItem componentClass='span'><NavLink to="/shows/toprated">Top Rated</NavLink> </MenuItem>
              <MenuItem componentClass='span'><NavLink to="/shows/upcoming">On TV</NavLink> </MenuItem>
              <MenuItem componentClass='span'><NavLink to="/shows/nowplaying">Airing Today</NavLink> </MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem>
              <ion-icon name="ios-search" onClick={this.searchShow}></ion-icon>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={this.state.show} onHide={this.searchClose} bsSize="large"
        aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Search</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Search />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.searchClose}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>


    )
  }
}

export default Navigationbar;
