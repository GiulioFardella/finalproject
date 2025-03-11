import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import orango2 from "../assets/animals/Mammiferi/orango/orango2.jpg";
import "../css/navbar.css";
function MyNavbar() {
  return (
    <Navbar id="generalnavbar" expand="lg">
      <Container className="custom-container">
        {/* Logo */}
        <Navbar.Brand href="/profilo" className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        {/* Toggle per il menu mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex align-items-center gap-5 fs-6">
            <Link to={"/chisiamo"} href="#link" className="navlink fw-bold">
              CHI SIAMO
            </Link>
           <Link to={"/cosafacciamo"} href="#link" className="navlink fw-bold">
              COSA FACCIAMO
            </Link>
            <Link to={"/perche"} href="#link" className="navlink fw-bold">
              PERCHE' E' IMPORTANTE?
            </Link>
            <Link to={"/interventi"} href="#link" className="navlink fw-bold">
              INTERVENTI
            </Link>

            <NavDropdown
              title="PARTECIPA A UNA MISSIONE"
              id="basic-nav-dropdown"
              className="custom-dropdown "
            >
              <NavDropdown.Item href="#action/3.2" id="habitat2">
                <Link to="/savana"> Savana 🌾 </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" id="habitat1">
                <Link to="/giungla"> Giungla 🌳 </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" id="habitat3">
                <Link to="/deserto">Deserto 🌵</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" id="habitat4">
                <Link to="/mare"> Mare 🌊 </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" id="habitat5">
                <Link to="/montagna"> Montagna ⛰️ </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <Link to="/rinuncia"> Rinuncia ad una missione </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        {/* Form di ricerca e profilo */}
        <Form className="d-flex search-bar">
          <InputGroup className="searchfield">
            <Form.Control placeholder="Cerca..." aria-label="Search" />
          </InputGroup>
        </Form>
        <Link to="/profilo" className="ms-4 profile-container2">
          <img
            id="profilepic"
            className="searchfield"
            src={orango2}
            alt="Profilo"
          />
        </Link>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
