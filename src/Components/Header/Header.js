import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import image from "../../assets/images/logo-white.png";
import download from "../../assets/images/download.png";
const Header = () => {
  return (
    <Container fluid className="bg-dark">
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand className="logo-container w-30" href="#home">
            <img src={image} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-between ml20"
            id="responsive-navbar-nav"
          >
            <Nav className="text-white">
              <Nav.Link className="text-white mx-sm-3" href="#features">
                Home
              </Nav.Link>
              <Nav.Link className="text-white mx-sm-3">Driver</Nav.Link>
              <Nav.Link className="text-white mx-sm-3">Brands</Nav.Link>
              <Nav.Link className="text-white mx-sm-3">Blog</Nav.Link>
              <Nav.Link className="text-white mx-sm-3">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                style={{ maxWidth: "150px" }}
                eventKey={2}
                href="#memes"
              >
                <img src={download} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  );
};

export default Header;
