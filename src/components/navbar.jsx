import React, { Component } from 'react';
import "./navbar.css";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <div className="NavBar">
        <ul>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}


export default NavBar;
