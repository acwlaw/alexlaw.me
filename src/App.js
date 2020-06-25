import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";

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
            <h1>scrossller</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
