import React from 'react';
import email from "../assets/email.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import "./sidebar.css";

const SideBar = () => (
  <div className="SideBar">
    <div id="logoColumn">
      <a id="logo" href="mailto:alex.law96@gmail.com">
        <img src={email} alt="email" width="40" />
      </a>
      <a id="logo" href="https://www.github.com/acwlaw" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="github" width="40" />
      </a>
      <a id="logo" href="https://www.linkedin.com/in/alexcwlaw" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="linkedin" width="40" />
      </a>
    </div>
  </div>
);

export default SideBar;
