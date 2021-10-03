import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="info" variant="info" expand="lg">
      <Container>
        <NavLink className="navbar-brand" activeClassName="active" to="/">
          MealShop
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink exact className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/about"
            >
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
