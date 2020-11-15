import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const SiteHeader = () => {
  return (
  <Navbar collapseOnSelect variant="dark" bg="" expand="lg" fixed="top">
    <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="2x"
      />
  <Navbar.Brand href="#home">TMDB</Navbar.Brand>
  

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
 
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <Nav.Link className="nav-link text-white" href="/">HOME</Nav.Link>

      <NavDropdown className="text-white" title="MOVIES" id="basic-nav-dropdown">
        <NavDropdown.Item href="/movies/popular">POPULAR</NavDropdown.Item>
        <NavDropdown.Item href="/movies/toprated">TOP RATED</NavDropdown.Item>
        <NavDropdown.Item href="/movies/upcoming">UPCOMING</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="TV SHOWS" id="basic-nav-dropdown">
        <NavDropdown.Item href="/tvshows/upcoming">POPULAR</NavDropdown.Item>
        <NavDropdown.Item href="/tvshows/toprated">TOP RATED</NavDropdown.Item>
      </NavDropdown>

      <Nav.Link href="/forum">FORUM</Nav.Link>
      <Nav.Link href="/forum">FAVOURITES</Nav.Link>
      <Nav.Link href="/forum">WATCH LIST</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default SiteHeader;