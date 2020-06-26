import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import About from "./pages/about";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavBar />
        <div id="ContentWrapper">
          <SideBar />
          <div id="scroller">
            <About />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
