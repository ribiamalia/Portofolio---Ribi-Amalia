import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function App() {
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar fixed="top" expand="md" className={`navbar-custom ${navbarScrolled ? 'navbar-scrolled' : ''}`}>
      <Container fluid>
        <Navbar.Brand href="#" className='navbar-brand'>Ribi Amalia</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Ribi Amalia</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="navigasi justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#header">Beranda</Nav.Link>
              <Nav.Link href="#tentang">Tentang Saya</Nav.Link>
              <NavDropdown title="Skills" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#soft">Soft Skills</NavDropdown.Item>
                <NavDropdown.Item href="#hard">Hard Skills</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Sertif">Sertifikat</Nav.Link>
              <Nav.Link href="#projek">Projek</Nav.Link>
              <Nav.Link href="#footer">Kontak</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default App;
