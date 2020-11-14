import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const SiteHeader = () => {
  return (
  <Navbar collapseOnSelect variant="dark" bg="" expand="lg" fixed="top">
  <Navbar.Brand href="#home">TMDB</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link className="nav-link text-white" href="/">Home</Nav.Link>

      <NavDropdown className="text-white" title="Movies" id="basic-nav-dropdown">
        <NavDropdown.Item href="/movies/popular">Popular</NavDropdown.Item>
        <NavDropdown.Item href="/movies/toprated">Top Rated</NavDropdown.Item>
        <NavDropdown.Item href="/movies/upcoming">Upcoming</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Tv Shows" id="basic-nav-dropdown">
        <NavDropdown.Item href="/tvshows/upcoming">Popular</NavDropdown.Item>
        <NavDropdown.Item href="/tvshows/toprated">Top Rated</NavDropdown.Item>
      </NavDropdown>

      <Nav.Link href="/forum">Forum</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default SiteHeader;