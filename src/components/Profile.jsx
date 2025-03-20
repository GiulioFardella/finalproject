import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import "../css/profile.css";

function Profile() {
  const { loggedUser } = useContext(UserContext);
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
  const [currentMission, setCurrentMission] = useState("");

  const missionsOptions = [
    "2025 - Rub'al Khali",
    "2025 - Isola di Palawan",
    "2025 - Serengeti",
    "2025 - Melbourne",
    "2025 - Ruanda",
  ];

  useEffect(() => {
    const fetchUser = async () => {
      if (!loggedUser) return; // Non loggato, non fare nulla

      try {
        const response = await fetch(`http://localhost:8080/api/utenti/${loggedUser.email}`);
        if (!response.ok) throw new Error("Errore nel recupero dati");
        const data = await response.json();
        setUser(data);
        setEditedUser(data);
        setCurrentMission(data.mission || "");
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

  const handleMissionChange = (e) => {
    setCurrentMission(e.target.value);
  };

  const handleSetMission = () => {
    alert(`Missione impostata: ${currentMission}`);
  };

  if (!loggedUser) return <p>Non sei loggato!</p>;
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

            <Card className="missions-card mt-4 missiondiv">
              <Card.Body>
                <h3>La mia missione</h3>
                <p>Attualmente stai partecipando alla missione: {currentMission}</p>

                <Form>
                  <Form.Group controlId="formMission" className="mt-3">
                    <Form.Label>Seleziona una missione:</Form.Label>
                    <Form.Control
                      as="select"
                      value={currentMission}
                      onChange={handleMissionChange}
                    >
                      <option value="">Seleziona una missione</option>
                      {missionsOptions.map((mission, index) => (
                        <option key={index} value={mission}>
                          {mission}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Button className="mt-3 profile-button" onClick={handleSetMission}>
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
