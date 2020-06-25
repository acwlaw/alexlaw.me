import React from 'react';
import email from "../assets/email.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import "./sidebar.css";

const SideBar = () => (
  <div className="SideBar">
    <div id="logoColumn">
      <a id="logo" href="https://www.google.com">
        <img src={email} alt="email" width="25" />
      </a>
      <a id="logo" href="https://www.github.com/acwlaw">
        <img src={github} alt="github" width="25" />
      </a>
      <a id="logo" href="https://www.linkedin.com/in/alexcwlaw">
        <img src={linkedin} alt="linkedin" width="25" />
      </a>
    </div>
  </div>
);

export default SideBar;
