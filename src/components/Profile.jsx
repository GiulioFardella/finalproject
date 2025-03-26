import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import LoginModal from "./LoginModal"; // 👈 Import modale login
import "../css/profile.css";

function Profile() {
  const { loggedUser, setLoggedUser } = useContext(UserContext);
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
  const [showModal, setShowModal] = useState(false); // Stato per modale
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      if (!loggedUser) return;

      try {
        const response = await fetch(`http://localhost:8080/api/utenti/${loggedUser.email}`);
        if (!response.ok) throw new Error("Errore nel recupero dati");
        const data = await response.json();
        setUser(data);
        setEditedUser(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, [loggedUser]);

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/utenti/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedUser),
      });
      if (!response.ok) throw new Error("Errore aggiornamento");
      const updatedUser = await response.json();
      setUser(updatedUser);
      setEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:8080/logout", {
        method: "POST",
        credentials: "include",
      });
      setLoggedUser(null);
      navigate("/login");
    } catch (err) {
      console.error("Errore nel logout", err);
    }
  };

  if (!loggedUser) {
    return (
      <div className="errorLog">
        <div className="errorContent text-center">
          <p className="fw-bold fs-1">Non sei loggato!</p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Accedi
            </Button>
            <Button variant="success" onClick={() => navigate("/registrazione")}>
              Registrati
            </Button>
          </div>
        </div>
        <LoginModal show={showModal} handleClose={() => setShowModal(false)} />
      </div>
    );
  }

  if (!user) return <p>Caricamento profilo...</p>;

  return (
    <div className="profile-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="profile-card">
              <Card.Body className="text-center cardbody">
                {editing ? (
                  <Form>
                    <Form.Group controlId="formFirstname">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstname"
                        value={editedUser.firstname}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formLastname" className="mt-3">
                      <Form.Label>Cognome</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastname"
                        value={editedUser.lastname}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formUsername" className="mt-3">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        name="username"
                        value={editedUser.username}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formEmail" className="mt-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={editedUser.email}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formCity" className="mt-3">
                      <Form.Label>Città</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        value={editedUser.city}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formState" className="mt-3">
                      <Form.Label>Stato</Form.Label>
                      <Form.Control
                        type="text"
                        name="state"
                        value={editedUser.state}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Button variant="success" className="mt-3" onClick={handleSave}>
                      Salva Modifiche
                    </Button>
                  </Form>
                ) : (
                  <>
                    <h2>{user.firstname} {user.lastname}</h2>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Città:</strong> {user.city}</p>
                    <p><strong>Stato:</strong> {user.state}</p>
                    <Button className="profile-button" onClick={() => setEditing(true)}>
                      Modifica Profilo
                    </Button>
                  </>
                )}
              </Card.Body>
            </Card>

            <Row className="mt-4 justify-content-center">
              <Col md={8} className="text-center">
                <Button variant="danger" onClick={handleLogout}>
                  Logout
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
