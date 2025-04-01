import { useEffect, useState, useContext } from "react";
import { Container, Table, Button, Form, Modal } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import "../css/admin.css";

function AdminPage() {
  const { loggedUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [animali, setAnimali] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    description: "",
    imageUrl: "",
  });

  // 🔒 Protezione accesso
  useEffect(() => {
    if (!loggedUser || loggedUser.ruolo.trim().toLowerCase() !== "admin") {
      navigate("/");
    }
  }, [loggedUser, navigate]);

  // 🟢 Fetch animali
  const fetchAnimali = () => {
    fetch("http://localhost:8080/api/animali")
      .then((res) => res.json())
      .then((data) => setAnimali(data))
      .catch((err) => console.error("Errore fetch:", err));
  };

  useEffect(() => {
    fetchAnimali();
  }, []);

  // 🟢 Modal gestione
  const handleShowModal = (animale = null) => {
    if (animale) {
      setFormData(animale);
    } else {
      setFormData({ id: null, name: "", description: "", imageUrl: "" });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  // 🟢 Gestione input form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🟢 Submit Aggiunta / Modifica
  const handleSubmit = (e) => {
    e.preventDefault();
    const method = formData.id ? "PUT" : "POST";
    const url = formData.id
      ? `http://localhost:8080/api/animali/${formData.id}`
      : "http://localhost:8080/api/animali";

    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        fetchAnimali();
        handleCloseModal();
      })
      .catch((err) => console.error("Errore salvataggio:", err));
  };

  // 🟢 Eliminazione animale
  const handleDelete = (id) => {
    if (window.confirm("Sei sicuro di voler eliminare questo animale?")) {
      fetch(`http://localhost:8080/api/animali/${id}`, { method: "DELETE" })
        .then(() => fetchAnimali())
        .catch((err) => console.error("Errore eliminazione:", err));
    }
  };

  return (
    <div className="generalAdmin">
    <Container className="admin-container">
     
      <Button
        variant="warning"
        className="mb-4 mt-5 fs-4"
        onClick={() => handleShowModal()}
      >
        ➕ Aggiungi Animale
      </Button>

      <Table striped bordered hover className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrizione</th>
            <th>Immagine</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {animali.map((animale) => (
            <tr key={animale.id}>
              <td>{animale.id}</td>
              <td>{animale.name}</td>
              <td>{animale.description}</td>
              <td>
                <img src={animale.imageUrl} alt={animale.name} width="100" />
              </td>
              <td className="admin-buttons">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleShowModal(animale)}
                >
                  Modifica
                </Button>{" "}
                <Button
                  variant="danger"
                  className="mt-2"
                  size="sm"
                  onClick={() => handleDelete(animale.id)}
                >
                  Elimina
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal Aggiungi / Modifica */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {formData.id ? "Modifica Animale" : "Aggiungi Animale"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>URL Immagine</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit">
              {formData.id ? "Aggiorna" : "Aggiungi"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
    </div> 
  );
}

export default AdminPage;
