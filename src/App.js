import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
// import $ from 'jquery';
// import { Col } from 'react-bootstrap';

import Home from './components/Home/Home.js';
import MoviesPage from './components/Movies/MoviesPage.js';
import ShowsPage from './components/Shows/ShowsPage.js';
import Error from './components/Error/Error';
import Navigationbar from './components/Common/Navigation/Navbar';
import DiscoverMovies from './components/Movies/DiscoverMovies';

class App extends Component {

  render() {
      return (
        <BrowserRouter>
          <div className="content-wrapper">
            <Navigationbar />
            <div>
              <div>
                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/movies" component={MoviesPage} exact />
                  <Route path="/shows" component={ShowsPage} exact/>

                  <Route path="/discover" component={ShowsPage} exact/>
                  <Route path="/discover/movies" component={DiscoverMovies} exact/>
                  <Route path="/discover/shows" component={ShowsPage} exact/>

                  <Route path="/movies/popular" component={MoviesPage} exact/>
                  <Route path="/movies/toprated" component={MoviesPage} exact/>
                  <Route path="/movies/upcoming" component={MoviesPage} exact/>
                  <Route path="/movies/nowplaying" component={MoviesPage} exact/>

                  <Route path="/shows/popular" component={ShowsPage} exact/>
                  <Route path="/shows/toprated" component={ShowsPage} exact/>
                  <Route path="/shows/upcoming" component={ShowsPage} exact/>
                  <Route path="/shows/nowplaying" component={ShowsPage} exact/>
                  <Route component={Error} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      )
    }
  }

    export default App;
