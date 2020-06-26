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
            {/*<a id="name">Alex</a>*/}
            {/*<a id="name">Law.</a>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
