import React from "react";
import "../../globals/fontawesome";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import {  Navbar, Nav, NavDropdown } from 'react-bootstrap';

const SiteHeader = () => {
  return (
  <Navbar collapseOnSelect variant="dark" expand="lg" fixed="top">
    <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="2x"
      />
  <Navbar.Brand href="/">TMDB</Navbar.Brand>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">

      <Nav.Item><Link className="nav-link text-dark" to="/"> HOME</Link></Nav.Item>

      <NavDropdown className="text-dark" title="MOVIES" id="basic-nav-dropdown">
        <NavDropdown.Item><Link className="nav-link text-dark" to="/movies/popular"> POPULAR</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className="nav-link text-dark" to="/movies/toprated"> TOP RATED</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className="nav-link text-dark" to="/movies/upcoming"> UPCOMING</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className="nav-link text-dark" to="/movies/favorites"> FAVOURITES</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className="nav-link text-dark" to="/movies/watchlist"> WATCH LIST</Link></NavDropdown.Item>
      </NavDropdown>

    <Nav.Link className="nav-link text-dark" href="/forum">FORUM</Nav.Link>
  </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default SiteHeader;