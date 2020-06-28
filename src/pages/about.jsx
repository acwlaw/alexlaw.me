import React, { Component } from 'react';
import './about.css';

class About extends Component {
  state = {};

  render() {
    return (
      <div className="about-section" id="about">
        <div id="nameColumn">
          <svg width="420" height="40" viewBox="0 0 420 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H223.34M196.66 36H419M101.794 18.5H309.312" stroke="#E8DBC5" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="4 16 14 4 16 14" />
          </svg>
          <p id="nameText">
            Alex
            <br />
            Law.
          </p>
          <p id="subtitleText">
            Software Engineer
          </p>
          <svg width="420" height="40" viewBox="0 0 420 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H223.34M196.66 36H419M101.794 18.5H309.312" stroke="#E8DBC5" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="4 16 14 4 16 14" />
          </svg>
        </div>
      </div>
    );
  }
}

export default About;
