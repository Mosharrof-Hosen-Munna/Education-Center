import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.webp";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faSearch} />;

const Header = () => {
  return (
    <>
      <Navbar className="bg_green" expand="lg">
        <Container>
          <NavLink className="navbar-brand" activeClassName="active" to="/">
            <img src={logo} alt="" />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                exact
                className="nav-link mx-1 fw-bold fs-6 text-white"
                activeClassName="active bg_light_green rounded"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                exact
                className="nav-link mx-1 fw-bold fs-6 text-white"
                activeClassName="active bg_light_green rounded"
                to="/services"
              >
                Services
              </NavLink>
              <NavLink
                exact
                className="nav-link  mx-1 fw-bold fs-6 text-white"
                activeClassName="active bg_light_green rounded"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                exact
                className="nav-link mx-1 fw-bold fs-6 text-white"
                activeClassName="active bg_light_green rounded"
                to="/contact"
              >
                Contact us
              </NavLink>
              <div className="d-flex align-items-center text-white fw-bold fs-6 rounded p-2 bg_light_green">
                {element}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
