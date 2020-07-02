import React, { Component } from 'react';
import './about.css';
// import headshot from "../../public/assets/headshot.png";

class About extends Component {
  state = {};

  render() {
    return (
      <div className="about-section" id="about">
        <div id="nameColumn">
          <div id="name-components">
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
        <div id="infoColumn">
          <div id="info-components">
            <div id="headshot">
              {/*<img id="headshot-img" src={headshot} alt="headshot" width="500" />*/}
              <svg width="500" height="414" viewBox="0 0 500 414" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M414.474 207C414.474 321.323 321.691 414 207.237 414C92.7831 414 0 321.323 0 207C0 92.6771 92.7831 0 207.237 0C321.691 0 414.474 92.6771 414.474 207Z" fill="#E8DBC5" />
                <path d="M500 54.2143C500 84.156 475.7 108.429 445.724 108.429C415.748 108.429 391.447 84.156 391.447 54.2143C391.447 24.2726 415.748 0 445.724 0C475.7 0 500 24.2726 500 54.2143Z" fill="#E8DBC5" />
              </svg>
            </div>
            <div id="info-description-wrapper">
              <p id="info-description">
                {/* eslint-disable-next-line max-len */}
                Computer Science and Microbiology & Immunology grad from the University of British Columbia. Currently a software development engineer at Amazon in Vancouver.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
