import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './assets/logo.png'

const MobileFriendlyNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expanded={expanded} expand="md" className="Navbar-color">
      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Navbar.Brand>
      <Navbar.Toggle onClick={toggleNavbar} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#about" className="nav-link">About</Nav.Link>
          <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
          <Nav.Link href="https://whop.com/escape-with-enzo/?planId=plan_fef7GA5wif7bR" className="nav-link">Pricing</Nav.Link>
          <Nav.Link href="https://discord.gg/gF6CewTxa7" className="nav-link">Server</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MobileFriendlyNavbar;

