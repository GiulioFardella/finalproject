import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../css/navbar.css"; // Importa il CSS
import logo from "../assets/logo.png";
import orango2 from "../assets/animals/Mammiferi/orango/orango2.jpg";

function MyNavbar() {
  return (
    <Navbar expand="lg" id="generalnavbar">
      <Container className="custom-container">
        {/* Logo */}
        <Navbar.Brand href="#home" className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>

        {/* Toggle per il menu mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex align-items-center gap-5 fs-6">
            <Nav.Link href="#link">Chi siamo</Nav.Link>
            <Nav.Link href="#link">Cosa facciamo</Nav.Link>
            <Nav.Link href="#link">Perché è importante?</Nav.Link>
            <Nav.Link href="#link">Interventi</Nav.Link>
            <Nav.Link href="#link">Newsletter</Nav.Link>
            <NavDropdown title="VOLONTARIATO" id="basic-nav-dropdown" className="custom-dropdown">
             
              <NavDropdown.Item href="#action/3.1" id="habitat1">
                Giungla
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" id="habitat2">
                Pianura
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" id="habitat3">
                Deserto
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" id="habitat4">
                Mare
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" id="habitat5">
                Montagna
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" >
                rinuncia ad una missione
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        {/* Form di ricerca e profilo */}
        <Form className="d-flex search-bar">
          <InputGroup>
            <Form.Control className="searchfield" placeholder="Cerca..." aria-label="Search"
             />
          </InputGroup>
          <Nav.Link href="#link" className="ms-4">
            <img id="profilepic" src={orango2} alt="Profilo" />
          </Nav.Link>
        </Form>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
