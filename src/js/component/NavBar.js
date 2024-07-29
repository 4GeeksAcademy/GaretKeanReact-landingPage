// src/NavBar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
const NavBar = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <a className="navbar-brand" href="#">BrandName</a>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNav">
    //     <ul className="navbar-nav ml-auto">
    //       <li className="nav-item active">
    //         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">About</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">Services</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">Contact</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#services">Services</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default NavBar;
