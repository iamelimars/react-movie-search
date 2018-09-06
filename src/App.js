import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import $ from 'jquery';

import Home from './components/Home/Home.js';
import MoviesPage from './components/Movies/MoviesPage.js';
import ShowsPage from './components/Shows/ShowsPage.js';
import Error from './components/Error/Error';
import Navigation from './components/Common/Navigation/Navigation';

class App extends Component {

  render() {
      return (
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/movies" component={MoviesPage} />
              <Route path="/shows" component={ShowsPage} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      )
    }
  }

    export default App;
