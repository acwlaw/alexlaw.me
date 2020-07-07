import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import About from "./pages/about";
import Experience from "./pages/experience";
import Projects from "./pages/projects";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="AppWrapper">
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
