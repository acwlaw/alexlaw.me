import React, { Component } from "react";
import "./App.css";
import ReactGA from "react-ga";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import About from "./pages/about";
import Experience from "./pages/experience";
import Projects from "./pages/projects";

class App extends Component {
  constructor() {
    super();
    ReactGA.initialize("UA-158142826-1", { standardImplementation: true });
  }

  render() {
    return (
      <div id="AppWrapper" style={{ userSelect: "none" }}>
        <NavBar />
        <div id="ContentWrapper">
          <SideBar />
          <div id="scroller">
            <About />
            <Experience />
            <Projects />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
