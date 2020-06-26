import React, { Component } from 'react';
import './about.css';

class About extends Component {
  state = {};

  render() {
    return (
      <div className="about-section" id="about">
        <p id="nameText">
          Alex
          <br />
          Law.
        </p>
      </div>
    );
  }
}

export default About;
