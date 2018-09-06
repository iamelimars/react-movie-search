import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import './App.css';
import $ from 'jquery';
import Home from './components/Home/Home.js'

class App extends Component {

  render() {
      return (
        <BrowserRouter>
          <Route path="/" component={Home} />
        </BrowserRouter>
      )
    }
  }

    export default App;
