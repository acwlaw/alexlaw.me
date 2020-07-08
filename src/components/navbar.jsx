import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';
import "./navbar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTitle: false,
      aboutPageLoaded: false,
    };
  }

  componentDidMount() {
    const { scrollSpy } = Scroll;
    scrollSpy.update();
  }

  hideNavBarTitle = () => {
    this.setState({
      showTitle: false,
    });
  };

  showNavBarTitle = () => {
    this.setState({
      showTitle: true,
      aboutPageLoaded: true,
    });
  };

  handleTitleStyles = () => {
    const { showTitle, aboutPageLoaded } = this.state;

    if (showTitle) {
      return { animation: 'show-title 0.5s', opacity: 1 };
    } if (aboutPageLoaded) {
      return { animation: 'hide-title 0.5s', opacity: 0 };
    }

    return { opacity: 0 };
  };

  render() {
    return (
      <div className="NavBar">
        <p
          id="navbar-title"
          style={this.handleTitleStyles()}
        >
          Alex Law
        </p>
        <div id="navbar-link-wrapper">
          <Link
            activeClass="active"
            to="about"
            spy
            smooth
            offset={-75}
            duration={500}
            onSetActive={this.hideNavBarTitle}
            onSetInactive={this.showNavBarTitle}
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
      </div>
    );
  }
}

export default NavBar;
