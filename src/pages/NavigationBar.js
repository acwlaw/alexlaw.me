import React from "react";
import { Link } from "gatsby";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => (
  <header>
    <Container>
      <Navbar expand="sm">
        <Navbar.Brand href="/">alex law</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive" className="justify-content-end">
          <Nav as="ui" className="ml-auto">
            <Nav.Item as="li">
              <Link to="/about" className="nav-link" activeClassName="active">about</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/projects" className="nav-link" activeClassName="active">projects</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>

  </header>
);

export default NavigationBar;
