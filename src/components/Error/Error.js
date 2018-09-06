import React, { Component } from 'react';
import './Error.css';
import $ from 'jquery';


class Error extends Component {
  render() {
    return (
      <div>
        <h1>404</h1>
        <h2>Path does not exist</h2>
      </div>

    )
  }
}

export default Error;
