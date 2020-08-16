import React, { Component } from 'react';
import './about.css';
import headshot from "../assets/headshot.png";

class About extends Component {
  state = {};

  render() {
    return (
      <div className="about-section" id="about">
        <div id="name-column">
          <div id="name-components">
            <svg width="420" height="40" viewBox="0 0 420 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H223.34M196.66 36H419M101.794 18.5H309.312" stroke="#E8DBC5" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="4 16 14 4 16 14" />
            </svg>
            <p id="name-text">
              Alex
              <br />
              Law.
            </p>
            <p id="subtitle-text">
              Software Engineer
            </p>
            <svg width="420" height="40" viewBox="0 0 420 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H223.34M196.66 36H419M101.794 18.5H309.312" stroke="#E8DBC5" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="4 16 14 4 16 14" />
            </svg>
          </div>
        </div>
        <div id="info-column">
          <div id="info-components">
            <div id="headshot">
              <img id="headshot-img" src={headshot} alt="headshot" width="500" />
            </div>
            <div id="info-description-wrapper">
              <p id="info-description">
                {/* eslint-disable-next-line max-len */}
                Computer Science and Microbiology & Immunology grad from the University of British Columbia. Currently a software development engineer at Amazon in Vancouver.
                <br />
                <br />
              </p>
              <pre style={{ fontSize: '30px', textAlign: 'center' }}>🏒    🏂    🏔    🛹</pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
