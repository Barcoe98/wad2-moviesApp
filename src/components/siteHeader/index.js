import React from "react";
import "../../globals/fontawesome";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import {  Navbar, Nav, NavDropdown } from 'react-bootstrap';
//import {useAuth} from "../../contexts/authContext"

const SiteHeader = () => {
  
  //const context = useAuth();

  //return context.isLoggedIn ? (
  return <Navbar collapseOnSelect variant="dark"expand="lg" fixed="top">
    <FontAwesomeIcon
        className="navbar-text text-dark"
        icon={["fas", "film"]}
        size="3x"
        to ="/"
      />
  <Navbar.Brand className="text-dark brand " href="/">TMDB</Navbar.Brand>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Item><Link className="nav-link text-dark" to="/"> HOME</Link></Nav.Item>

      <NavDropdown className="text-dark" title="MOVIES" id="responsive-nav-dropdown">
        <NavDropdown.Item><Link className="text-dark" to="/movies/nowplaying"> NOW PLAYING</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className="text-dark" to="/movies/popular"> POPULAR</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className="text-dark" to="/movies/toprated"> TOP RATED</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className="text-dark" to="/movies/upcoming"> UPCOMING</Link></NavDropdown.Item>
      </NavDropdown>

      <NavDropdown className="text-dark" title="PEOPLE" id="responsive-nav-dropdown">
        <NavDropdown.Item><Link className="text-dark" to="/actors/popular"> POPULAR</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className="text-dark" to="/actors/popular"> LATEST</Link></NavDropdown.Item>
      </NavDropdown>

      <NavDropdown className="text-dark" title="MY TMDB" id="responsive-nav-dropdown">
        <NavDropdown.Item><Link className="text-dark" to="/movies/favorites"> FAVOURITES</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className="text-dark" to="/movies/watchlist"> WATCH LIST</Link></NavDropdown.Item>
      </NavDropdown>

  </Nav>

  <Nav className="mr-sm-2">
    <Nav.Item><Link className="nav-link text-dark" to="/login"> LOGIN</Link></Nav.Item>
    <Nav.Item><Link className="nav-link text-dark" to="/signup"> SIGN UP</Link></Nav.Item>
    <Nav.Item ><Link className="nav-link text-dark" to="/dashboard"> DASHBOARD</Link></Nav.Item>
  </Nav>
  
  </Navbar.Collapse>
</Navbar>

//   ) : (

//     <Navbar collapseOnSelect variant="dark"expand="lg" fixed="top">
//     <FontAwesomeIcon
//         className="navbar-text text-dark"
//         icon={["fas", "film"]}
//         size="3x"
//         to ="/"
//       />
//   <Navbar.Brand className="text-dark brand " href="/">TMDB</Navbar.Brand>
  
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="ml-auto">
//     <Nav.Item><Link className="nav-link text-dark" to="/"> HOME</Link></Nav.Item>
//     <Nav.Item><Link className="nav-link text-dark" to="/login"> LOGIN</Link></Nav.Item>
//     <Nav.Item><Link className="nav-link text-dark" to="/signup"> SIGN UP</Link></Nav.Item>
//   </Nav>

  
  
//   </Navbar.Collapse>
// </Navbar>
  
//   )
}

export default SiteHeader;