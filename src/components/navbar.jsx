import React, { Component } from 'react';
import { Link } from 'react-scroll';
import "./navbar.css";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <div className="NavBar">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}
        >
          Contact
        </Link>
      </div>
    );
  }
}


export default NavBar;
