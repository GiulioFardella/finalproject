
import { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "../css/profile.css"; // Importa il CSS


function Profile() {
  // Stato per i dati utente
  const [user, setUser] = useState({
    name: "Mario Rossi",
    email: "mario.rossi@email.com",
    bio: "Amo la natura e mi impegno per proteggerla! 🌍",
    missions: ["Salvataggio tartarughe", "Pulizia foresta amazzonica"],
    
  });

  // Stato per la modifica del profilo
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  // Funzione per gestire il cambio dei dati
  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  // Funzione per salvare le modifiche
  const handleSave = () => {
    setUser(editedUser);
    setEditing(false);
  };

  return (
    <Container className="profile-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="profile-card">
            <Card.Body className="text-center">
              {/* Foto Profilo */}
              <img
                src={user.profilePic}
                alt="Profile"
                className="profile-img"
              />
              
              {/* Nome e Email */}
              {editing ? (
                <Form>
                  <Form.Group controlId="formName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={editedUser.name}
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
                  <Form.Group controlId="formBio" className="mt-3">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="bio"
                      value={editedUser.bio}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button variant="success" className="mt-3" onClick={handleSave}>
                    Salva Modifiche
                  </Button>
                </Form>
              ) : (
                <>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                  <p className="bio">{user.bio}</p>
                  <Button variant="primary" onClick={() => setEditing(true)}>
                    Modifica Profilo
                  </Button>
                </>
              )}
            </Card.Body>
          </Card>

          {/* Sezione Missioni */}
          <Card className="missions-card mt-4">
            <Card.Body>
              <h3>Le mie missioni</h3>
              <ul>
                {user.missions.map((mission, index) => (
                  <li key={index}>🌱 {mission}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;

