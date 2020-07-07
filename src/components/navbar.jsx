import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';
import "./navbar.css";

class NavBar extends Component {
  state = {};

  componentDidMount() {
    const { scrollSpy } = Scroll;
    scrollSpy.update();
  }

  render() {
    return (
      <div className="NavBar">
        <Link
          activeClass="active"
          to="about"
          spy
          smooth
          offset={-75}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy
          smooth
          offset={-75}
          duration={500}
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy
          smooth
          offset={-75}
          duration={500}
        >
          Projects
        </Link>
      </div>
    );
  }
}

export default NavBar;
