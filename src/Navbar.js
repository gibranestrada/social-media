import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class AppNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
        <Link to={"/"} className="nav-link">
          <Navbar.Brand>GNetwork</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link to={"/profile"} className="nav-link">
              Profile
            </Link>
            <Link to={"/signout"} className="nav-link">
              Sign Out
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AppNavbar;
