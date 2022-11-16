import React from "react";
// import CartWitget from './CartWitget';
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBarRafa() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src="./Assets/Icons/IconoR.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Brand href="#home">Shop Seeker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/category/Traditional">
              <Nav.Link href="#home">Traditional</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Filter By Style" id="basic-nav-dropdown">
              <LinkContainer to="/category/Traditional">
                <NavDropdown.Item href="#action/3.1">
                  Traditional
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/Digital">
                <NavDropdown.Item href="#action/3.2">
                    Digital
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/Photography">
                <NavDropdown.Item href="#action/3.3">
                  Photography
                </NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/">
                <NavDropdown.Item href="#action/3.4">
                  See all
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Filter By Shop" id="basic-nav-dropdown">
              <LinkContainer to="/category/Traditional">
                <NavDropdown.Item href="#action/3.1">
                  Traditional
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/Digital">
                <NavDropdown.Item href="#action/3.2">
                    Digital
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/Photography">
                <NavDropdown.Item href="#action/3.3">
                  Photography
                </NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/">
                <NavDropdown.Item href="#action/3.4">
                  See all
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarRafa;
