import { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "../assets/fern.jpg";
import "../css/profile.css";

function Profile() {
  const [user, setUser] = useState({
    name: "Mario Rossi",
    username: "mariorossi93",
    email: "mario.rossi@email.com",
    address: "Via Roma, 10, Milano",
    phone: "+39 333 1234567",
    website: "www.mariorossi.com",
    bio: "Amo la natura e mi impegno per proteggerla! 🌍",
    missions: ["2025- Rub'al Khali"], // Una sola missione per volta
    profilePic: "https://via.placeholder.com/150"
  });

  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const [currentMission, setCurrentMission] = useState(user.missions[0] || ""); // Imposta la missione corrente

  const missionsOptions = [
    "2025 - Rub'al Khali",
    "2025 - Isola di Palawan",
    "2025 - Serengeti",
    "2025 - Melbourne",
    "2025 - Ruanda"
  ];

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(editedUser);
    setEditing(false);
  };

  const handleMissionChange = (e) => {
    setCurrentMission(e.target.value); // Aggiorna la missione selezionata
  };

  const handleSetMission = () => {
    if (currentMission) {
      // Imposta la missione selezionata nell'array delle missioni (una sola missione alla volta)
      setUser({ ...user, missions: [currentMission] });
    } else {
      alert("Seleziona una missione per impostarla!");
    }
  };

  return (
    <div className="profile-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="profile-card">
              <Card.Body className="text-center cardbody">
                <img src={user.profilePic} alt="" className="profile-img" />
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
                    <Form.Group controlId="formAddress" className="mt-3">
                      <Form.Label>Indirizzo</Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={editedUser.address}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formPhone" className="mt-3">
                      <Form.Label>Numero di Telefono</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        value={editedUser.phone}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formWebsite" className="mt-3">
                      <Form.Label>Sito Web</Form.Label>
                      <Form.Control
                        type="text"
                        name="website"
                        value={editedUser.website}
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
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Indirizzo:</strong> {user.address}</p>
                    <p><strong>Telefono:</strong> {user.phone}</p>
                    <p><strong>Sito Web:</strong> <a href={user.website}>{user.website}</a></p>
                    <p className="bio"><strong>Bio:</strong> {user.bio}</p>
                    <Button variant="primary" onClick={() => setEditing(true)}>
                      Modifica Profilo
                    </Button>
                  </>
                )}
              </Card.Body>
            </Card>

            <Card className="missions-card mt-4 missiondiv">
              <Card.Body>
                <h3>La mia missione</h3>
                <p>Attualmente stai partecipando alla missione: {user.missions[0]}</p>

                <Form>
                  <Form.Group controlId="formMission" className="mt-3">
                    <Form.Label>Seleziona una missione:</Form.Label>
                    <Form.Control as="select" value={currentMission} onChange={handleMissionChange}>
                      <option value="">Seleziona una missione</option>
                      {missionsOptions.map((mission, index) => (
                        <option key={index} value={mission}>
                          {mission}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Button
                    variant="primary"
                    className="mt-3"
                    onClick={handleSetMission}
                  >
                    Imposta Missione
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
