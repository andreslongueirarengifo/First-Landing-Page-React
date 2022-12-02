import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarPage=()=> {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container bg="secondary">
        <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="navbar-items">
            <Nav>
              <Nav.Link href="#Home">
                Home
              </Nav.Link>
              <Nav.Link href="#About">
                About
              </Nav.Link>
              <Nav.Link href="#Service">
                Service
              </Nav.Link>
              <Nav.Link href="#Contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;