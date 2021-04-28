import React from "react";
import { Router } from "@reach/router";
import "../layout/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./about";
import Projects from "./projects";

export default () => (
  <Router path="/app">
    <Home path="/" />
    <About path="/about" />
    <Projects path="/projects" />
  </Router>
);
