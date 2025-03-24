import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import logo from "../assets/logo.png";
import orango2 from "../assets/animals/Mammiferi/orango/orango2.jpg";

import "../css/navbar.css";

function MyNavbar() {
  const { loggedUser } = useContext(UserContext);
console.log("Loggeduser:", loggedUser)
  return (
    <Navbar id="generalnavbar" expand="lg">
      <Container className="custom-container">
        <Navbar.Brand as={Link} to="/" className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex align-items-center gap-5 fs-6">

            <Nav.Link as={Link} to="/chisiamo" className="navlink fw-bold navlink1">
              CHI SIAMO
            </Nav.Link>

            <Nav.Link as={Link} to="/cosafacciamo" className="navlink fw-bold navlink2">
              COSA FACCIAMO
            </Nav.Link>

            <Nav.Link as={Link} to="/perche" className="navlink fw-bold navlink3">
              PERCHE' E' IMPORTANTE?
            </Nav.Link>

            <Nav.Link as={Link} to="/interventi" className="navlink fw-bold navlink4">
              INTERVENTI
            </Nav.Link>

            <NavDropdown title="PARTECIPA A UNA MISSIONE" id="basic-nav-dropdown" className="custom-dropdown">
              <NavDropdown.Item as={Link} to="/savana" id="habitat2">
                Savana 🌾
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/giungla" id="habitat1">
                Giungla 🌳
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/deserto" id="habitat3">
                Deserto 🌵
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/mare" id="habitat4">
                Mare 🌊
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/montagna" id="habitat5">
                Montagna ⛰️
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/rinuncia" id="habitat6">
                Rinuncia ad una missione
              </NavDropdown.Item>
            </NavDropdown>

            {loggedUser && loggedUser.ruolo === "admin" && (
              <Nav.Link as={Link} to="/admin">Area Admin</Nav.Link>
            )}

          </Nav>
        </Navbar.Collapse>

        <Form className="d-flex search-bar">
          <InputGroup className="searchfield">
            <Form.Control placeholder="Cerca..." aria-label="Search" />
          </InputGroup>
        </Form>

        <Link to="/profilo" className="ms-4 profile-container2">
          <img id="profilepic" className="searchfield" src={orango2} alt="Profilo" />
        </Link>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
